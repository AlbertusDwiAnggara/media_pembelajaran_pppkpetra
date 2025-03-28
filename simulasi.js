document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-primary");

    // Membuat elemen popup
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <h2>Simulasi Interaktif</h2>
            <p>Scan barcode berikut menggunakan gadget untuk memulai simulasi:</p>
            <img src="./asset/barcode.png" alt="QR Code Simulasi" class="barcode-img">
            <p>Atau klik <a href="https://app-edu.assemblrworld.com/EduKits/45_1378" target="_blank">di sini</a> untuk langsung membuka simulasi.</p>
        </div>
    `;
    document.body.appendChild(popup);

    // Menangani event tombol tutup
    const closeButton = popup.querySelector(".close");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            popup.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
