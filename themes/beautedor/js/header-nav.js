(function() {

    var header = document.getElementsByClassName("site-branding-container")[0];
    var toggler = document.getElementsByClassName("hamburger")[0];
    var initialClasses = header.className;
    var togglerInitialClasses = toggler.className;
    var expanded = false;

    toggler.onclick = () => {
        header.className = expanded ? initialClasses : initialClasses + " expanded";
        toggler.className = expanded ? togglerInitialClasses : togglerInitialClasses + " is-active";

        if (expanded) {
            document.getElementsByTagName("body")[0].removeAttribute("style");
        } else {
            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
        }

        expanded = !expanded;
    };
})();