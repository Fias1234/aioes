function toggleLanguage() {
    var headingEnglish = document.getElementById("heading-english");
    var headingUrdu = document.getElementById("heading-urdu");
    var subheadingEnglish = document.getElementById("subheading-english");
    var subheadingUrdu = document.getElementById("subheading-urdu");

    if (headingEnglish.style.display === "none") {
        headingEnglish.style.display = "block";
        headingUrdu.style.display = "none";
        subheadingEnglish.style.display = "block";
        subheadingUrdu.style.display = "none";
    } else {
        headingEnglish.style.display = "none";
        headingUrdu.style.display = "block";
        subheadingEnglish.style.display = "none";
        subheadingUrdu.style.display = "block";
    }
}
