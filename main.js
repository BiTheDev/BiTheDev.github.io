function responsivenav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav mdb-color lighten-4") {
        x.className += " responsive";
    } else {
        x.className = "topnav mdb-color lighten-4";
    }
}

function ChangeView(value) {
    $('html,body').animate({
        scrollTop: $("#"+value).offset().top
    }, 'normal')
    document.getElementById("myTopnav").classList.remove("responsive");
}

