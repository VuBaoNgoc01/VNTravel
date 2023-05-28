
w3.includeHTML(myCallback);
function myCallback() {

    //Scroll

    $(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 20) {
                $('.box-navbar').addClass("scrollMenu")
            } else {
                $('.box-navbar').removeClass("scrollMenu")
            }

            if (this.scrollY > 200) {
                $('.scroll-to-top').addClass("active")
            } else {
                $('.scroll-to-top').removeClass("active")
            }
        });

        $("#scroll-to-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100)
        })
    });

    //Active btn-CTA-search

    const ctaSearch = document.getElementById("cta-search");
    const formSearch = document.getElementById("wrap-form");

    ctaSearch.addEventListener("click", () => {
        ctaSearch.classList.toggle("active");
        formSearch.classList.toggle("active");
    });

    //Active btn-CTA-Userlog

    const ctaUser = document.getElementById("cta-user");
    const formLog = document.getElementById("form-log");

    ctaUser.addEventListener("click", () => {
        ctaUser.classList.toggle("active");
        formLog.classList.toggle("active");
    });

    //Active select-blog

    var btnBlog = document.getElementsByClassName(('show-select')[0]);

    // If you care about all of the elements, you'll need to loop through the elements:
    var btnBlog = document.getElementsByClassName('show-select');

    for (var i = 0; i < btnBlog.length; ++i) {
        btnBlog[i].addEventListener('click', function () {
            // Using an if statement to check the class
            if (this.classList.contains('open')) {
                // The box that we clicked has a class of bad so let's remove it and add the good class
                this.classList.remove('open');
            } else {
                // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
                this.classList.add('open');
            }
        });
    }


    //Import Include HTML//

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                        if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }


}
