/* =========================================
   MUHAMMAD RIZWAN RAZZI
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       LANGUAGE SYSTEM
    ===================================== */

    const languageButton = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("websiteLanguage") || "ur";


    function updateLanguage(language) {

        currentLanguage = language;

        localStorage.setItem(
            "websiteLanguage",
            language
        );


        /* HTML direction */

        if (language === "ur") {

            document.documentElement.lang = "ur";

            document.documentElement.dir = "rtl";

            document.body.classList.remove("ltr");

        } else {

            document.documentElement.lang = "en";

            document.documentElement.dir = "ltr";

            document.body.classList.add("ltr");

        }


        /* CHANGE ALL TEXT */

        const elements =
            document.querySelectorAll("[data-ur][data-en]");


        elements.forEach(function (element) {

            const text =
                element.getAttribute(
                    "data-" + language
                );

            if (text !== null) {

                element.textContent = text;

            }

        });


        /* CHANGE PLACEHOLDERS */

        document
            .querySelectorAll("[data-placeholder-ur][data-placeholder-en]")
            .forEach(function (element) {

                element.placeholder =
                    element.getAttribute(
                        "data-placeholder-" + language
                    );

            });


        /* BUTTON */

        if (languageButton && languageText) {

            if (language === "ur") {

                languageText.textContent = "English";

            } else {

                languageText.textContent = "اردو";

            }

        }


        /* PAGE TITLES */

        const title =
            document.querySelector("title[data-ur][data-en]");

        if (title) {

            title.textContent =
                title.getAttribute("data-" + language);

        }

    }


    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                const newLanguage =
                    currentLanguage === "ur"
                        ? "en"
                        : "ur";

                updateLanguage(newLanguage);

            }
        );

    }


    updateLanguage(currentLanguage);



    /* =====================================
       STICKY / FLOATING HEADER
    ===================================== */

    const header =
        document.getElementById("header");


    function checkScroll() {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        checkScroll
    );


    checkScroll();



    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.querySelector(".navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("open");

            }
        );


        /* Close menu after clicking */

        document
            .querySelectorAll(".navbar a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navbar.classList.remove("open");

                    }
                );

            });

    }



    /* =====================================
       CONTACT FORM MESSAGE
    ===================================== */

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                setTimeout(function () {

                    alert(
                        currentLanguage === "ur"
                            ? "آپ کا پیغام بھیجنے کی کوشش کی جا رہی ہے۔"
                            : "Your message is being sent."
                    );

                }, 100);

            }
        );

    }

});