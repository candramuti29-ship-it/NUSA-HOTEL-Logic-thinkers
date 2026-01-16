// Fungsi untuk otomatis memilih kamar saat tombol diklik
function bookNow(roomName) {
    document.getElementById('roomType').value = roomName;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Menangani submit form
document.getElementById('resvForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('guestName').value;
    const room = document.getElementById('roomType').value;
    const date = document.getElementById('checkIn').value;

    if(date === "") {
        alert("Mohon pilih tanggal check-in!");
    } else {
        alert(`Terima kasih ${nama}! Pesanan kamar ${room} untuk tanggal ${date} telah kami terima.`);
        this.reset();
    }
});