
            var link = document.querySelector(".write_us");
            var popup = document.querySelector(".modal-content-write-us");
            var close = document.querySelector(".modal-content-close.email");
            var form = popup.querySelector("form");
            var login = popup.querySelector("#user-name-field");
            var email = popup.querySelector("#email-field");
            var email_text = popup.querySelector("#email-text-field");
            var storage_login = localStorage.getItem("login");
            var storage_email = localStorage.getItem("email");
     
            link.addEventListener("click", function(evt) {
                evt.preventDefault();
                popup.classList.add("modal-content-open");

                if (storage_login) {
                    login.value = storage_login;
                    email.focus();
                } else {
                    login.focus();
                }
            });

            close.addEventListener("click", function(evt) {
                evt.preventDefault();
                popup.classList.remove("modal-content-open");
            });

            form.addEventListener("submit", function(evt) {
                if (!login.value) {
                    evt.preventDefault();
                    login.classList.add("modal-error");
                    console.log("Нужно ввести login");
                } else {
                    localStorage.setItem("login", login.value);
                } 

                if (!email.value) {
                    evt.preventDefault();                    
                    email.classList.add("modal-error");
                    console.log("Нужно ввести email");
                }        
            });

            login.addEventListener("click", function(evt) {
                evt.preventDefault();
                login.classList.remove("modal-error");
            });

            email.addEventListener("click", function(evt) {
                evt.preventDefault();
                email.classList.remove("modal-error");
            });

            window.addEventListener("keydown", function(evt) {
                if (evt.keyCode === 27) {
                    if (popup.classList.contains("modal-content-open")) {
                        popup.classList.remove("modal-content-open");
                    }
                }
            });

            var mapOpen = document.querySelector(".map-link");
            var mapPopup = document.querySelector(".modal-content-map");
            var mapClose = mapPopup.querySelector(".modal-content-close.map");

            mapOpen.addEventListener("click", function(evt) {
                evt.preventDefault();
                mapPopup.classList.add("modal-content-open");
            });

            mapClose.addEventListener("click", function(evt) {
                evt.preventDefault();
                mapPopup.classList.remove("modal-content-open");
            });

            window.addEventListener("keydown", function(evt) {
                if (evt.keyCode === 27) {
                    if (mapPopup.classList.contains("modal-content-open")) {
                        mapPopup.classList.remove("modal-content-open");
                    }
                }
            });        
    