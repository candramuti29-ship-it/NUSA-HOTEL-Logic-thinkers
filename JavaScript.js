// Fungsi untuk memicu notifikasi pop-up
function triggerNotification(guestName, roomType) {
    const toast = document.getElementById('notifToast');
    const title = document.getElementById('notifTitle');
    const msg = document.getElementById('notifMsg');

    title.innerText = "Booking Baru!";
    msg.innerText = `${guestName} memesan ${roomType}`;

    toast.classList.add('active');

    // Hilangkan notifikasi setelah 4 detik
    setTimeout(() => {
        toast.classList.remove('active');
    }, 4000);
}

// Update fungsi processBooking yang sudah ada sebelumnya
// Ganti bagian akhir fungsi processBooking Anda dengan ini:
function processBooking() {
    const calculation = updatePrice();
    if (calculation.total === 0) {
        alert("Silakan lengkapi tanggal menginap dengan benar!");
        return;
    }

    const guestName = "Tamu #" + Math.floor(1000 + Math.random() * 9000); // Simulasi nama
    const roomName = roomSelect.options[roomSelect.selectedIndex].text.split(' - ')[0];

    const newBooking = {
        id: "MNL-" + Math.floor(1000 + Math.random() * 9000),
        guest: guestName,
        room: roomName,
        date: checkinInput.value,
        total: calculation.total.toLocaleString('id-ID'),
        status: "Pending"
    };

    // Simpan data
    bookings.unshift(newBooking);
    localStorage.setItem('monoloog_bookings', JSON.stringify(bookings));

    // Jalankan Notifikasi di Admin Panel (bahkan jika admin sedang tidak melihat tabel)
    triggerNotification(guestName, roomName);
    
    // Update Statistik Dashboard
    updateAdminStats();

    alert("Pemesanan Berhasil!");
    showPage('admin');
}

// Fungsi untuk memperbarui angka statistik di Dashboard Admin
function updateAdminStats() {
    // Simulasi penambahan angka di stat cards
    const totalOrderEl = document.querySelector('.stat-card p'); // Mengambil card pertama
    if(totalOrderEl) {
        let currentCount = parseInt(totalOrderEl.innerText);
        totalOrderEl.innerText = currentCount + 1;
    }
}