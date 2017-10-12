menuOpen = false;
accountOpen = false;


var mq = window.matchMedia( "(max-width: 767px)" );

window.onload = function() {

  if (mq.matches) {
    // window width is at least 500px
    document.getElementById("mySidenav").style.color = "white";
    document.getElementById("myaccountnav").style.color = "white";
    setTransparent();
  }
  else {
    // window width is less than 500px
    //  openNav ();
  }
};




function setTransparent(){
     document.getElementById("mySidenav").style.backgroundColor = "transparent";
     document.getElementById("myaccountnav").style.backgroundColor = "transparent";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.backgroundColor = "transparent";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("topnav").style.backgroundImage = "none";
  //pushes main content
  menuOpen = false;
}

function openNav() {
    if (menuOpen) {
        closeNav();
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
        //document.getElementById("mySidenav").style.textAlign = "center";
        //pushes main content
        }
        closeAccount();
        menuOpen = true;
    }
}

function closeAccount() {
  document.getElementById("myaccountnav").style.width = "0";
  document.getElementById("myaccountnav").style.backgroundColor = "transparent";
  document.getElementById("main-inner").style.marginRight= "0";
  //document.getElementById("topnav").style.backgroundImage = "none";
  accountOpen = false;
}

function openAccount() {
  if (accountOpen) {
    closeAccount();
  }
  else {

    mq = window.matchMedia( "(max-width: 767px)" );
    if (mq.matches){
      document.getElementById("myaccountnav").style.backgroundColor = "#00CCFF";
      document.getElementById("myaccountnav").style.opacity = "0.9";
      document.getElementById("myaccountnav").style.textAlign = "center";
      document.getElementById("myaccountnav").style.height = "100%";
      document.getElementById("myaccountnav").style.width = "100%";
      //document.getElementById("topnav").style.backgroundImage = "url('../resources/blue-edu.png')";
    }

    else {
      document.getElementById("myaccountnav").style.width = "200px";
      document.getElementById("main-inner").style.marginRight = "200px";
      //document.getElementById("myaccountnav").style.textAlign = "center";
      //pushes main content
    }
    closeNav();
    accountOpen = true;
  }
}
