menuOpen = false;


var mq = window.matchMedia( "(max-width: 767px)" );

window.onload = function() {

  if (mq.matches) {
    // window width is at least 500px
    document.getElementById("mySidenav").style.color = "white";
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
        document.getElementById("mySidenav").style.backgroundColor = "transparent";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("topnav").style.backgroundImage = "none";
        //pushes main content
        menuOpen = false;
    }
    else {
        mq = window.matchMedia( "(max-width: 767px)" );
        if (mq.matches){
            document.getElementById("mySidenav").style.backgroundColor = "#00CCFF";
            document.getElementById("mySidenav").style.opacity = "0.9";
            document.getElementById("mySidenav").style.textAlign = "center";

            document.getElementById("mySidenav").style.height = "100%";
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("topnav").style.backgroundImage = "url('../resources/blue-edu.png')";

        }
        else {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        //pushes main content
        }
        menuOpen = true;
    }
}
