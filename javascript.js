function toggleLanguage() {
    var Eng = document.getElementById("Eng");
    var Urdu = document.getElementById("Urdu");
    
    if (Eng.style.display === "none") {
        Eng.style.display = "block";
        Urdu.style.display = "none";
    } else {
        Eng.style.display = "none";
        Urdu.style.display = "block";
    }
}
