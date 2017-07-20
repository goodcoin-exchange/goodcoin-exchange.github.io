menuOpen = false;

function openNav() {
    if (menuOpen) {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
        //pushes main content
        menuOpen = false;
    }
    else {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        //pushes main content
        menuOpen = true;
    }
}
