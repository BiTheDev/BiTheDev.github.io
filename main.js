function responsivenav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav mdb-color lighten-4") {
        x.className += " responsive";
    } else {
        x.className = "topnav mdb-color lighten-4";
    }
}

function ChangeView(value) {
    switch (value) {
        case "AboutMe":
            $('html,body').animate({
                scrollTop: $("#AboutMe").offset().top
            }, 'normal')
    }
}
//Page Transcation
// function ChangeView(value) {
//     console.log(value);
//     $('.topnav').toggleClass('slider');
//     switch (value){
//         case "AboutMe":
//         console.log("me");
//         document.getElementById("thumbnail").style.display = "none";
//         document.getElementById("AboutMe").style.display="flex";
//         document.getElementById("AboutMe").style.top="0px";
//         document.getElementById("project").style.display = "none";
//         document.getElementById("edu").style.display = "none";
//         break;
//         case "thumbnail":
//         document.getElementById("thumbnail").style.display = "flex";
//         document.getElementById("project").style.display = "none";
//         document.getElementById("edu").style.display = "none";
//         document.getElementById('me').style.display="none";
//         break;
//         case "project":
//         document.getElementById("thumbnail").style.display = "none";
//         document.getElementById("project").style.display = "block";
//         document.getElementById("edu").style.display = "none";
//         document.getElementById('me').style.display="none";
//         break;
//         case "edu":
//         document.getElementById("thumbnail").style.display = "none";
//         document.getElementById("project").style.display = "none";
//         document.getElementById("edu").style.display = "block";
//         document.getElementById('me').style.display="none";
//     }
// }



// down = false;


// $('.arrow').hover(function() {
//   down = true;
//   $('.arrow').removeClass('auto');
// });

// setInterval(function(){ 

//   console.log(down);

//   if(down === false) {
//     autoToggle();
//   }

// },2000);

