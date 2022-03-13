function kirim() {
  let nama = document.getElementById('name').value;
  let pesan = document.getElementById('pesan').value;
  //validasi email
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let rs = document.getElementById('email').value;

  if (rs.match(mailformat)) {
    alert(`Hai, ${nama}
    \nemail kamu adalah ${rs}
    \npesan kamu adalah ${pesan}
    \nTerima kasih atas pesan kritik/saran yang telah kamu kirimkan, secepatnya akan saya tanggapi pesan dari kamu :)`);
  } else {
    alert('Alamat email tidak valid.');
    return false;
  }
  //akhir validasi
}

function tentang1() {
  var x = document.getElementById('temu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
