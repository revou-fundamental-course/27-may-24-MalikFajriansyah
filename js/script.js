document.getElementById('contactForm').addEventListener('submit', function (events) {
    events.preventDefault();

    //validasi function untuk enter nama
    showNameInput();


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var tableBody = document.getElementById('contactData');

    // Buat elemen <tr> baru
    var row = document.createElement('tr');

    // Tambahkan data ke dalam elemen <tr>
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${message}</td>
    `;

    // Tambahkan elemen <tr> ke dalam tabel
    tableBody.appendChild(row);

    // Tampilkan notifikasi
    var notification = document.createElement('div');
    notification.textContent = 'Message sent successfully';
    notification.classList.add('notification');
    document.body.appendChild(notification);

    // Reset formulir setelah pengisian
    document.getElementById('contactForm').reset();
    // Hapus notifikasi setelah 3 detik
    setTimeout(function() {
        notification.remove();
    }, 3000);
})

// Fungsi untuk menampilkan form input nama saat halaman dimuat
function showNameInput() {
    const name = localStorage.getItem('userName');

    if (!name) {
        const userName = prompt("Please enter your name:");
        if (userName) {
            localStorage.setItem('userName', userName);
            updateWelcomeMessage(userName);
        }
    } else {
        updateWelcomeMessage(name);
    }
}

// Fungsi untuk memperbarui pesan selamat datang dengan nama pengguna
function updateWelcomeMessage(name) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Welcome ${name}`;
}