document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieSettingsPopup = document.getElementById("cookie-settings-popup");
    const acceptCookiesBtn = document.getElementById("accept-cookies");
    const declineCookiesBtn = document.getElementById("decline-cookies");
    const cookieSettingsBtn = document.getElementById("cookie-settings");
    const closeSettingsBtn = document.getElementById("close-settings");
    const cookieSettingsForm = document.getElementById("cookie-settings-form");

    // Überprüfen, ob der Benutzer bereits eine Entscheidung getroffen hat
    if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
        cookieBanner.style.display = "block";
    }

    acceptCookiesBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

    declineCookiesBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDeclined", "true");
        cookieBanner.style.display = "none";
    });

    cookieSettingsBtn.addEventListener("click", function () {
        cookieBanner.style.display = "none";
        cookieSettingsPopup.style.display = "block";
    });

    closeSettingsBtn.addEventListener("click", function () {
        cookieSettingsPopup.style.display = "none";
    });

    cookieSettingsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Hier können Sie die Einstellungen speichern
        cookieSettingsPopup.style.display = "none";
    });
});
