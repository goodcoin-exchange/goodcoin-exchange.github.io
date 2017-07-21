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
        document.getElementById("mySidenav").style.backgroundColor = "transparent";
        document.getElementById("main").style.marginLeft= "0";
        //pushes main content
        menuOpen = false;
    }
    else {
        mq = window.matchMedia( "(max-width: 767px)" );
        if (mq.matches){
            document.getElementById("mySidenav").style.backgroundColor = "#e7e7e7";
            document.getElementById("mySidenav").style.height = "100%";
            document.getElementById("mySidenav").style.width = "65%";

        }
        else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        //pushes main content
        }
        menuOpen = true;
    }
}
