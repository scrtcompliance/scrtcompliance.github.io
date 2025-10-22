// Hapus: URL Pengalihan (Redirect) setelah data ditangkap oleh GoPhish
// Jika ini adalah laman web sah, form submit akan menangani pengalihan ke backend.
// const REDIRECT_URL = "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-and-apps"; 

// Hapus: Variabel GoPhish untuk mengisi email secara otomatis dan logika pengisiannya
// const GOPHISH_EMAIL = "{{.Email}}";
// if (GOPHISH_EMAIL && GOPHISH_EMAIL !== "{{.Email}}") {
//     document.getElementById('input_username').value = GOPHISH_EMAIL;
//     document.getElementById('displayed_username').textContent = GOPHISH_EMAIL;
// }

// Fungsi untuk menampilkan langkah password
function showPasswordStep() {
    const username = document.getElementById('input_username').value;
    if (username) {
        // Hapus: Menyimpan username ke hidden field GoPhish
        // document.getElementById('hidden_username').value = username;
        
        // Tampilkan username yang baru dimasukkan di Langkah 2
        document.getElementById('displayed_username').textContent = username;

        // Tampilkan langkah password, sembunyikan langkah username
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

// Hapus: Penanganan pengiriman formulir GoPhish (manipulasi submit, hidden field, dan timeout redirect)
// Ganti dengan fungsi standar submit form (sehingga mengarah ke backend yang sah atau mock-up)
document.getElementById('gophish_form').onsubmit = function(event) {
    // Di lingkungan non-phishing, ini akan mengirimkan data ke 'action' form.
    // Tambahkan validasi jika perlu.

    // Untuk mock-up, Anda mungkin ingin mencegah submit
    // event.preventDefault(); 
    
    // Opsional: Untuk simulasi, alihkan ke halaman sukses.
    // window.location.href = 'https://www.microsoft.com/en-us/'; 
    
    // Dalam konteks nyata, biarkan form terkirim ke server.
    return true; 
};
