function formatAmount(input) {
  // Menghilangkan karakter selain angka
  let value = input.value.replace(/\D/g, '');
  
  // Menambahkan titik setiap 3 digit
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Memasukkan kembali nilai yang sudah diformat
  input.value = value;
}

function calculateBalance() {
  const amount = parseFloat(document.getElementById('amount').value.replace(/\./g, '') || 0);
  const dp = parseFloat(document.getElementById('dp').value.replace(/\./g, '') || 0);
  const balance = amount - dp;
  document.getElementById('balance').value = balance >= 0 ? balance : 0;
}

function generateInvoice() {
  const clientName = document.getElementById('clientName').value;
  const serviceType = document.getElementById('serviceType').value;
  const amount = document.getElementById('amount').value.replace(/\./g, ''); // Menghilangkan titik untuk perhitungan
  const dp = document.getElementById('dp').value.replace(/\./g, ''); // Menghilangkan titik untuk perhitungan
  const balance = document.getElementById('balance').value;
  const description = document.getElementById('description').value;

  // Simpan data ke localStorage
  localStorage.setItem('clientName', clientName);
  localStorage.setItem('serviceType', serviceType);
  localStorage.setItem('amount', amount);
  localStorage.setItem('dp', dp);
  localStorage.setItem('balance', balance);
  localStorage.setItem('description', description);

  // Buka halaman preview
  window.location.href = 'preview.html';
}
