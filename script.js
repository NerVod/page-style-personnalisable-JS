function selectMode(mode) {

    let color = "url(images/kashyyk.png) no-repeat 50% 50%";
    let image = "images/Yoda.png";
    let label = "Light Mode";
    let titre = "rgb(94, 94, 94)";

    if (mode === "dark") {
        color = "url(images/Mustafar.jpg) no-repeat 50% 50%";
        image = "images/sith.png";
        label = "Dark Mode";
        titre = "rgb(188, 42, 34)"

    } else if (mode === "light") {
        color = "url(images/kashyyk.png) no-repeat 50% 50%";
        image = "images/Yoda.png";
        label = "Light Mode";
        titre = "rgb(199, 197, 61)";

    } else {
        color = "url(images/senateDistrict.png) no-repeat 50% 50%";
        image = "images/solo.png";
        label = "Balanced Mode";
        titre = "rgb(56, 54, 54)";
    }

    console.log(label);


    document.getElementById("icon").src = image;
    document.getElementById("theme").style
        .background = color;
    document.getElementById("label").innerHTML =
        label;
    document.getElementById("label").style
        .color = titre;

}