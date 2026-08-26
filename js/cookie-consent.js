/**
 * Banner de Consentimiento de Cookies + Google Consent Mode v2
 *
 * Autónomo: funciona tanto en index.html como en las páginas legales,
 * que no cargan translations.js. Detecta el idioma leyendo el atributo
 * lang del <html> y la preferencia guardada por el selector de idioma.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'nestek_cookie_consent';
    const LANG_KEY = 'preferredLanguage';

    const texts = {
        es: {
            title: 'Cookies en Nestek',
            body: 'Usamos cookies de analítica (Google Analytics) para entender cómo se usa el sitio y mejorarlo. Solo se activan si las aceptas.',
            more: 'Política de Cookies',
            accept: 'Aceptar',
            reject: 'Rechazar',
            aria: 'Aviso de consentimiento de cookies'
        },
        en: {
            title: 'Cookies at Nestek',
            body: 'We use analytics cookies (Google Analytics) to understand how the site is used and improve it. They are only enabled if you accept.',
            more: 'Cookie Policy',
            accept: 'Accept',
            reject: 'Reject',
            aria: 'Cookie consent notice'
        }
    };

    let banner = null;

    // ===== Estado =====

    function getLang() {
        let lang;
        try {
            lang = localStorage.getItem(LANG_KEY);
        } catch (e) {
            lang = null;
        }
        lang = lang || document.documentElement.lang || 'es';
        return texts[lang] ? lang : 'es';
    }

    function getStatus() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function saveStatus(value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (e) {
            /* Modo privado o almacenamiento bloqueado: la decisión dura la sesión */
        }
    }

    /**
     * Borra las cookies que GA haya podido dejar, para que rechazar
     * después de haber aceptado surta efecto real.
     */
    function clearAnalyticsCookies() {
        const host = location.hostname;
        const domains = ['', host, '.' + host];
        const parts = host.split('.');
        if (parts.length > 2) {
            domains.push('.' + parts.slice(-2).join('.'));
        }

        document.cookie.split(';').forEach(function (cookie) {
            const name = cookie.split('=')[0].trim();
            if (!/^_ga/.test(name) && name !== '_gid') return;

            domains.forEach(function (domain) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
                    (domain ? '; domain=' + domain : '');
            });
        });
    }

    // ===== Consentimiento =====

    function accept() {
        saveStatus('granted');
        if (typeof gtag === 'function') {
            gtag('consent', 'update', { analytics_storage: 'granted' });
        }
        hide();
    }

    function reject() {
        saveStatus('denied');
        if (typeof gtag === 'function') {
            gtag('consent', 'update', { analytics_storage: 'denied' });
        }
        clearAnalyticsCookies();
        hide();
    }

    // ===== Interfaz =====

    function render() {
        const t = texts[getLang()];

        banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.setAttribute('aria-label', t.aria);

        banner.innerHTML =
            '<div class="cookie-banner__text">' +
                '<h2 class="cookie-banner__title"></h2>' +
                '<p class="cookie-banner__body"></p>' +
            '</div>' +
            '<div class="cookie-banner__actions">' +
                '<a class="cookie-banner__link" href="cookies.html"></a>' +
                '<button type="button" class="cookie-banner__btn cookie-banner__btn--ghost"></button>' +
                '<button type="button" class="cookie-banner__btn cookie-banner__btn--primary"></button>' +
            '</div>';

        banner.querySelector('.cookie-banner__btn--ghost').addEventListener('click', reject);
        banner.querySelector('.cookie-banner__btn--primary').addEventListener('click', accept);

        document.body.appendChild(banner);
        translate();

        requestAnimationFrame(function () {
            banner.classList.add('is-visible');
        });
    }

    /** Reaplica los textos en el idioma actual (el banner sigue vivo al cambiar de idioma). */
    function translate() {
        if (!banner) return;
        const t = texts[getLang()];

        banner.setAttribute('aria-label', t.aria);
        banner.querySelector('.cookie-banner__title').textContent = t.title;
        banner.querySelector('.cookie-banner__body').textContent = t.body;
        banner.querySelector('.cookie-banner__link').textContent = t.more;
        banner.querySelector('.cookie-banner__btn--ghost').textContent = t.reject;
        banner.querySelector('.cookie-banner__btn--primary').textContent = t.accept;
    }

    function hide() {
        if (!banner) return;
        banner.classList.remove('is-visible');
        const node = banner;
        banner = null;
        setTimeout(function () {
            if (node.parentNode) node.parentNode.removeChild(node);
        }, 300);
    }

    function open() {
        if (!banner) render();
    }

    // ===== Arranque =====

    function init() {
        // translations.js cambia document.documentElement.lang al traducir la página.
        new MutationObserver(translate).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['lang']
        });

        // Enlaces "Configurar cookies" de los pies de página.
        document.querySelectorAll('[data-cookie-settings]').forEach(function (el) {
            el.addEventListener('click', function (event) {
                event.preventDefault();
                open();
            });
        });

        if (!getStatus()) render();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // API pública para reabrir el banner desde cualquier sitio.
    window.NestekConsent = { open: open, getStatus: getStatus };
})();
