// script.js
// Save contents below into script.js
(function(){
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const input = document.getElementById('userInput');
const createOne = document.getElementById('createOne');
const cantAccess = document.getElementById('cantAccess');


nextBtn.addEventListener('click', function(){
const value = input.value.trim();
if(!value){
input.focus();
flash(input);
alert('Silakan masukkan email, nomor telepon, atau Skype.');
return;
}
// Simulate next step: show a mock validation and prevent real submission
nextBtn.disabled = true;
nextBtn.textContent = 'Loading...';
setTimeout(()=>{
// After "validation" open the fake next page or show modal
alert('Simulasi: data diterima (demo). Halaman berikutnya seharusnya meminta kata sandi.');
nextBtn.disabled = false;
nextBtn.textContent = 'Next';
},900);
});


backBtn.addEventListener('click', function(){
alert('Kembali (demo)');
});


createOne.addEventListener('click', function(e){
e.preventDefault();
alert('Tautan pembuatan akun (demo)');
});
cantAccess.addEventListener('click', function(e){
e.preventDefault();
alert('Bantuan akses akun (demo)');
});


function flash(el){
const orig = el.style.boxShadow;
el.style.boxShadow = '0 0 0 4px rgba(0,120,212,0.12)';
setTimeout(()=>el.style.boxShadow = orig,400);
}
})();
