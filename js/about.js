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
    document.getElementById("topnav").style.backgroundImage = "url('../resources/white.jpg')";
    document.getElementById("bgimg").style.backgroundImage = "url('../resources/white.jpg')";
    document.getElementById("img1").style.top = "15%";
    document.getElementById("img1").style.left = "20%";

    document.getElementById("img2").style.top = "15%";
    document.getElementById("img2").style.left = "20%";

    document.getElementById("img3").style.top = "15%";
    document.getElementById("img3").style.left = "20%";
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
            document.getElementById("mySidenav").style.textAlign = "center";
            document.getElementById("mySidenav").style.backgroundColor = "white";
            document.getElementById("mySidenav").style.opacity = "0.8";
            document.getElementById("mySidenav").style.height = "100%";
            document.getElementById("mySidenav").style.width = "100%";

        }
        else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.backgroundImage = "";
        document.getElementById("mySidenav").style.backgroundColor = "transparent";
        document.getElementById("mySidenav").style.textAlign = "left";
        //document.getElementById("main").style.marginLeft = "250px";
        //pushes main content
        }
        menuOpen = true;
    }
}

var showHomeOpen = false;

function showHome() {
    var element = document.getElementById('showhome');
    var plusbtn = document.getElementById('plusbtn');
    if (!showHomeOpen){
        element.style.width = "250px";
        plusbtn.className = "plus-rotate";
        showHomeOpen = true;
    }
    else {
        element.style.width = "0";
        plusbtn.className = "plus-btn";
        showHomeOpen = false;
    }
}
