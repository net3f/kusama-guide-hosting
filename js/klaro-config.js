// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: 'klaro',

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: 'cookie',

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: 'klaro',

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  // Put a link to your privacy policy here (relative or absolute).
  privacyPolicy: 'https://polkadot.network/privacy/',

  // Defines the default state for applications (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party apps.
  mustConsent: false,

  // Show "accept all" to accept all apps instead of "ok" that only accepts
  // required and "default: true" apps
  acceptAll: false,

  // replace "decline" with cookie manager modal
  hideDeclineAll: false,

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  //lang: 'en',

  // You can overwrite existing translations and add translations for your
  // app descriptions and purposes. See `src/translations/` for a full
  // list of translations that can be overwritten:
  // https://github.com/KIProtect/klaro/tree/master/src/translations

  // Example config that shows how to overwrite translations:
  // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
  translations: {
      // If you erase the "consentModal" translations, Klaro will use the
      // bundled translations.
      de: {
          consentModal: {
              description:
                  'Hier k??nnen Sie einsehen und anpassen, welche Information wir ??ber Sie sammeln. Eintr??ge die als "Beispiel" gekennzeichnet sind dienen lediglich zu Demonstrationszwecken und werden nicht wirklich verwendet.',
          },
          inlineTracker: {
              description: 'Beispiel f??r ein Inline-Tracking Skript',
          },
          externalTracker: {
              description: 'Beispiel f??r ein externes Tracking Skript',
          },
          adsense: {
              description: 'Anzeigen von Werbeanzeigen (Beispiel)',
          },
          fathom: {
              description: 'Sammeln von Besucherstatistiken',
          },
          camera: {
              description:
                  'Eine ??berwachungskamera (nur ein Beispiel zu IMG-Tags)',
          },
          cloudflare: {
              description: 'Schutz gegen DDoS-Angriffe',
          },
          intercom: {
              description:
                  'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
          },
          mouseflow: {
              description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
          },
          googleFonts: {
              description: 'Web-Schriftarten von Google gehostet',
          },
          purposes: {
              analytics: 'Besucher-Statistiken',
              security: 'Sicherheit',
              livechat: 'Live Chat',
              advertising: 'Anzeigen von Werbung',
              styling: 'Styling',
          },
      },
      en: {
          consentModal: {
              description:
                  'Measuring our audience gives us useful statistics to improve the website and the products we build for you. By allowing these third party services, you accept their cookies and the use of tracking technologies necessary for their functioning.',
          },
          inlineTracker: {
              description: 'Example of an inline tracking script',
          },
          externalTracker: {
              description: 'Example of an external tracking script',
          },
          adsense: {
              description: 'Displaying of advertisements (just an example)',
          },
          fathom: {
              description: 'Collecting of visitor statistics',
          },
          camera: {
              description:
                  'A surveillance camera (just an example for an IMG tag)',
          },
          cloudflare: {
              description: 'Protection against DDoS attacks',
          },
          intercom: {
              description:
                  'Chat widget & collecting of visitor statistics (just an example)',
          },
          mouseflow: {
              description: 'Real-Time user analytics (just an example)',
          },
          googleFonts: {
              description: 'Web fonts hosted by Google',
          },
          purposes: {
              analytics: 'Analytics',
              security: 'Security',
              livechat: 'Livechat',
              advertising: 'Advertising',
              styling: 'Styling',
          },
      },
      tr: {
          consentModal: {
              description:
                  'Hakk??n??zda toplad??????m??z bilgileri burada g??rebilir ve ??zelle??tirebilirsiniz. "??rnek" olarak belirtilenler sadece g??sterim ama??l??d??r ve ger??ekte bu site i??in kullan??lmazlar.',
          },
          inlineTracker: {
              description: 'Sat??ri??i takip kodu i??in bir ??rnek',
          },
          externalTracker: {
              description: 'D????ar??dan ??a????r??lan bir takip kodu i??in ??rnek',
          },
          adsense: {
              description: 'Reklam g??r??nt??leme (sadece ??rnek)',
          },
          fathom: {
              description: 'Ziyaret??i istatistiklerini toplama',
          },
          camera: {
              description:
                  '??zleme kameras?? (IMG tag icin sa??ma bir ??rnek daha)',
          },
          cloudflare: {
              description: 'DDoS sald??r??lar??na kar???? koruma',
          },
          intercom: {
              description:
                  'Sohbet arac?? ve ziyaret??i istatistiklerini toplama (sadece bir ??rnek)',
          },
          mouseflow: {
              description:
                  'Ger??ek zamanl?? kullan??c?? istatisti??i (sadece bir ??rnek)',
          },
          googleFonts: {
              description:
                  'Google taraf??ndan bar??nd??r??lan Web Yaz??tipi bilgileri',
          },
          purposes: {
              analytics: 'Analitik',
              security: 'G??venlik',
              livechat: 'Canl?? Sohbet',
              advertising: 'Reklam',
              styling: 'Bi??imlendirme',
          },
      },
  },

  // This is a list of third-party apps that Klaro will manage for you.
  apps: [
      {
          name: 'cloudflare',
          title: 'Cloudflare',
          purposes: ['security'],
          required: true,
      },
  ],
};