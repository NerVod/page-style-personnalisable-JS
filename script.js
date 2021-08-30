function selectMode(mode) {

    let color = "ghostWhite";
    let image = "images/Yoda.png";
    let label = "Light Mode";

    if (mode === "dark") {
        color = "darkSlateBlue";
        image = "images/sith.png";
        label = "Dark Mode";

    } else if (mode === "light") {
        color = "ghostWhite";
        image = "images/Yoda.png";
        label = "Light Mode";

    } else {
        color = "dimGray";
        image = "images/solo.png";
        label = "Balanced Mode";
    }

    console.log(label);


    document.getElementById("icon").src = image;
    document.getElementById("theme").style
        .backgroundColor = color;
    document.getElementById("label").innerHTML =
        label;

}