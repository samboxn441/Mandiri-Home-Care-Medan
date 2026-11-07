const b=document.getElementById('menuBtn'),n=document.getElementById('nav');b.onclick=()=>n.classList.toggle('open');document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>n.classList.remove('open'));document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();const v=id=>document.getElementById(id).value;const msg=`Halo Home Care Medan,\n\nSaya ingin booking layanan.\nNama: ${v('nama')}\nWhatsApp: ${v('telepon')}\nLayanan: ${v('layananForm')}\nTanggal: ${v('tanggal')}\n\nMohon informasi ketersediaan dan biaya. Terima kasih.`;window.open('https://wa.me/6282168186754?text='+encodeURIComponent(msg),'_blank')});
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const menuNav = document.getElementById("menuNav");

  if (menuBtn && menuNav) {
    menuBtn.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  }
});
