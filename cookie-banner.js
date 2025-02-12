document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');
    const settingsButton = document.getElementById('cookie-settings');
    const settingsPopup = document.getElementById('cookie-settings-popup');
    const closeSettingsButton = document.getElementById('close-settings');
    const form = document.getElementById('cookie-settings-form');
    
    const cookieAnalytics = document.getElementById('cookie-analytics');
    const cookieMarketing = document.getElementById('cookie-marketing');

    // Wenn der Benutzer "Akzeptieren" klickt
    acceptButton.addEventListener('click', function () {
        setCookie('cookiesAccepted', true, 365);
        setCookie('analyticsCookies', cookieAnalytics.checked, 365);
        setCookie('marketingCookies', cookieMarketing.checked, 365);
        cookieBanner.style.display = 'none';
    });

    // Wenn der Benutzer "Ablehnen" klickt
    declineButton.addEventListener('click', function () {
        setCookie('cookiesAccepted', true, 365);
        cookieBanner.style.display = 'none';
    });

    // Öffne Cookie-Einstellungen
    settingsButton.addEventListener('click', function () {
        settingsPopup.style.display = 'block';
        cookieAnalytics.checked = getCookie('analyticsCookies') === 'true';
        cookieMarketing.checked = getCookie('marketingCookies') === 'true';
    });

    // Schließe die Cookie-Einstellungen
    closeSettingsButton.addEventListener('click', function () {
        settingsPopup.style.display = 'none';
    });

    // Speichern der Cookie-Einstellungen
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        setCookie('analyticsCookies', cookieAnalytics.checked, 365);
        setCookie('marketingCookies', cookieMarketing.checked, 365);
        settingsPopup.style.display = 'none';
    });

    // Hilfsfunktionen zum Setzen und Abrufen von Cookies
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Zeige den Banner nur, wenn die Zustimmung noch nicht erteilt wurde
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }
});
