// menuOpen = false;
//
// function openNav() {
//     if (menuOpen) {
//         document.getElementById("mySidenav").style.width = "0";
//         // document.getElementById("main").style.marginLeft= "0";
//         //pushes main content
//         menuOpen = false;
//     }
//     else {
//         document.getElementById("mySidenav").style.width = "100%";
//         // document.getElementById("main").style.marginLeft = "250px";
//         //pushes main content
//         menuOpen = true;
//     }
// }
//
//
// background-image: url("../resources/wood-bg.jpg");
//
// ------------------------------------------------------------------------------------------------------
menuOpen = false;


var mq = window.matchMedia( "(max-width: 767px)" );

window.onload = function() {

  if (mq.matches) {
    // window width is at least 500px
    setTransparent();
  }
  else {
    // window width is less than 500px
    //  openNav ();
  }
};




function setTransparent(){
     document.getElementById("mySidenav").style.backgroundColor = "transparent";
}

function openNav() {
    if (menuOpen) {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("mySidenav").style.backgroundImage = "url('../resources/wood-bg.jpg')";
        //document.getElementById("main").style.marginLeft= "0";
        //pushes main content
        menuOpen = false;
    }
    else {
        mq = window.matchMedia( "(max-width: 767px)" );
        if (mq.matches){
            document.getElementById("mySidenav").style.backgroundImage = "url('../resources/wood-bg.jpg')";
            document.getElementById("mySidenav").style.height = "100%";
            document.getElementById("mySidenav").style.width = "65%";

        }
        else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.backgroundImage = "";
        //document.getElementById("main").style.marginLeft = "250px";
        //pushes main content
        }
        menuOpen = true;
    }
}
