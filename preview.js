// Fungsi untuk mengambil data dari localStorage dan menampilkan di halaman preview
window.onload = function() {
  const clientName = localStorage.getItem('clientName');
  const serviceType = localStorage.getItem('serviceType');
  const amount = parseFloat(localStorage.getItem('amount')).toLocaleString('id-ID');
  const dp = parseFloat(localStorage.getItem('dp')).toLocaleString('id-ID');
  const balance = parseFloat(localStorage.getItem('balance')).toLocaleString('id-ID');
  const description = localStorage.getItem('description');

  // Menampilkan data di halaman preview
  document.getElementById('clientNamePreview').textContent = clientName;
  document.getElementById('serviceTypePreview').textContent = serviceType;
  document.getElementById('descriptionPreview').textContent = description;
  document.getElementById('amountPreview').textContent = `Rp ${amount}`;
  document.getElementById('dpPreview').textContent = `Rp ${dp}`;
  document.getElementById('balancePreview').textContent = `Rp ${balance}`;

  // Menampilkan status lunas jika sisa pembayaran 0
  const paymentStatusElement = document.getElementById('paymentStatus');
  if (balance === 'Rp 0') {
    paymentStatusElement.textContent = 'Lunas';
    paymentStatusElement.style.color = 'green';
  } else {
    paymentStatusElement.textContent = '';
  }
};

function updateStatus() {
  // Toggle visibility of the card image
  const cardImage = document.getElementById('cardImage');
  if (cardImage.style.display === 'none' || cardImage.style.display === '') {
    cardImage.style.display = 'block';
  } else {
    cardImage.style.display = 'none';
  }
}
