function toggleLanguage() {
    var headingEnglish = document.getElementById("heading-english");
    var headingUrdu = document.getElementById("heading-urdu");
    var subheadingEnglish = document.getElementById("subheading-english");
    var subheadingUrdu = document.getElementById("subheading-urdu");
    var MissionHeadEng = document.getElementById("Mission Head Eng");
    var MissionHeadUrdu = document.getElementById("Mission Head Urdu");
    
    if (headingEnglish.style.display === "none") {
        headingEnglish.style.display = "block";
        headingUrdu.style.display = "none";
        subheadingEnglish.style.display = "block";
        subheadingUrdu.style.display = "none";
        MissionHeadEng.style.display = "block";
        MissionHeadUrdu.style.display = "none";
        Mission Eng.style.display = "block";
        Mission Urdu.style.display = "none";
    } else {
        headingEnglish.style.display = "none";
        headingUrdu.style.display = "block";
        subheadingEnglish.style.display = "none";
        subheadingUrdu.style.display = "block";
        MissionHeadEng.style.display = "none";
        MissionHeadUrdu.style.display = "block";
        Mission Eng.style.display = "none";
        Mission Urdu.style.display = "block";
    }
}
