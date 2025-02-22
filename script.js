function showPage(pageId) {
    const pages = ["dashboard", "menu1", "menu2", "menu3"];
    
    pages.forEach(page => {
        let element = document.getElementById(page);
        
        if (page === pageId) {
            element.style.display = "flex";
            element.style.animation = "slideIn 0.5s ease-in-out";
        } else {
            element.style.animation = "slideOut 0.5s ease-in-out";
            setTimeout(() => {
                element.style.display = "none";
            }, 400);
        }
    });

    // 🔹 Ubah Background Setiap Menu
    if (pageId === "menu1") {
        document.getElementById(pageId).style.backgroundImage = "url('c.jpg')";
    } else if (pageId === "menu2") {
        document.getElementById(pageId).style.backgroundImage = "url('b.png')";
    } else if (pageId === "menu3") {
        document.getElementById(pageId).style.backgroundImage = "url('menu3-background.jpg')";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
});


