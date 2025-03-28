window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 500);
    }, 1000);
};

document.getElementById("btnKolaborator").addEventListener("click", function() {
    new bootstrap.Modal(document.getElementById("kolaboratorModal")).show();
});