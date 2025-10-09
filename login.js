
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const kembaliBtn = document.getElementById('kembaliBtn');
    const selanjutnyaBtn = document.getElementById('selanjutnyaBtn');

    // Mencegah form dikirim (halaman refresh) saat tombol 'Selanjutnya' diklik
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Fungsionalitas login sesungguhnya memerlukan server (backend). Anda mengklik "Selanjutnya".');
    });

    // Menambahkan aksi untuk tombol 'Kembali'
    kembaliBtn.addEventListener('click', () => {
        alert('Anda mengklik tombol "Kembali".');
        // Di aplikasi nyata, ini bisa mengarahkan ke halaman sebelumnya
    });
    
    // Memberi tahu jika tombol 'Selanjutnya' diklik (walaupun sudah ada di submit form)
    selanjutnyaBtn.addEventListener('click', () => {
        // Form submit akan menangani ini, tapi ini untuk demonstrasi
        console.log('Tombol Selanjutnya diklik.');
    });
});
