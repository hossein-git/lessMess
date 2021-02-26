//uesd in listing page for sticky header


let header = document.getElementById("stickyNav");

if (header !== undefined) {
    let sticky = header.offsetTop;
    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        if (window.innerWidth >= 992) {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky", "py-2", "bg-light");
            } else {
                header.classList.remove("sticky", "py-2", "bg-light");
            }
        }

    }

}

