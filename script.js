function hitungTagihan() {
    let hargaPaket = 0;
    const cboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    cboxes.forEach(cbox => {
      hargaPaket += parseInt(cbox.value);
    });
  
    const peserta = document.getElementById("peserta").value;
    const hari = 1; // Default 1 hari (bisa ditambah input)
    const total = hargaPaket * peserta * hari;
  
    document.getElementById("harga-paket").textContent = `Rp ${hargaPaket.toLocaleString()}`;
    document.getElementById("total-tagihan").textContent = `Rp ${total.toLocaleString()}`;
  }
  
  function simpanPesanan() {
    const nama = document.getElementById("nama").value;
    const peserta = document.getElementById("peserta").value;
    const harga = document.getElementById("harga-paket").textContent;
    const total = document.getElementById("total-tagihan").textContent;
  
    const pesanan = {
      nama: nama,
      jumlahPeserta: peserta,
      harga: harga,
      total: total
    };
  
    localStorage.setItem('pemesanan', JSON.stringify(pesanan));
    alert("Pesanan disimpan! Lihat di console browser (F12 > Application > LocalStorage)");
  }