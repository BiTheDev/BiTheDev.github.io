function responsivenav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav rgba-grey-strong") {
        x.className += " responsive";
    } else {
        x.className = "topnav rgba-grey-strong";
    }
}