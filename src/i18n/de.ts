import type { Dictionary } from './types';

/**
 * ⚠️ PENDIENTE DE REVISIÓN NATIVA antes de usarlo comercialmente en Suiza.
 * Alemán correcto, redactado para el mercado suizo (ss en lugar de ß, CHF,
 * "Offerte" en lugar de "Angebot", "Unterhalt" junto a "Wartung").
 * Falta el matiz de tono que solo aporta un nativo de la región de Basilea.
 */
export const de: Dictionary = {
  meta: {
    tagline: 'Wir bauen das System, das Ihr Unternehmen braucht',
    description:
      'Individuelle Software, CRM und IT-Betreuung für Unternehmen. Wir bauen das System, betreuen die Geräte und sorgen dafür, dass beides läuft.',
    aboutDesc:
      'Angewandte Informatik: Wir entwickeln massgeschneiderte Verwaltungssysteme und betreiben die Infrastruktur, auf der sie laufen.',
    servicesDesc:
      'Individuelle Software, CRM, IT-Betreuung, Automatisierung und Webanwendungen für Unternehmen.',
    workDesc: 'Software-, System- und Anwendungsprojekte von NESTEK.',
    contactDesc:
      'Erzählen Sie uns, welcher Prozess Ihnen zu eng geworden ist. Das erste Gespräch ist kostenlos.',
  },
  nav: {
    services: 'Leistungen',
    work: 'Referenzen',
    about: 'Über uns',
    contact: 'Kontakt',
    cta: 'Gespräch vereinbaren',
    menu: 'Menü öffnen',
    home: 'Startseite',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
  },
  common: {
    seeDetail: 'Mehr erfahren',
    seeAll: 'Alle Referenzen',
    visit: 'Ansehen',
    talk: 'Gespräch vereinbaren',
    tellUs: 'Erzählen Sie uns davon',
    seeServices: 'Leistungen ansehen',
  },
  home: {
    eyebrow: 'Individuelle Software · CRM · IT-Betreuung',
    h1: 'Wir bauen das System, das Ihr Unternehmen braucht',
    lead: 'Und wir bleiben, um es zu betreuen. Software, CRM und Ihre gesamte IT aus einer Hand, zum Festpreis.',
    facts: [
      { t: 'Entwicklung', d: 'Individuelle Software, CRM und Schnittstellen' },
      { t: 'Systeme', d: 'Arbeitsplätze, Netzwerk und Server' },
      { t: 'Ein Vertrag', d: 'Beides, dasselbe Team' },
    ],
    vs: {
      eyebrow: 'Warum wir',
      h2: 'Ein Partner statt drei',
      lead: 'Üblich ist: eine Firma für die Software, eine für die Computer und eine für die Website. Geht etwas schief, zeigt jede auf die beiden anderen.',
      badTag: 'Der Normalfall',
      goodTag: 'Mit NESTEK',
      bad: [
        'Eine Firma schreibt die Software',
        'Eine andere betreut die Computer',
        'Eine dritte hat die Website',
      ],
      good: [
        'Entwicklung und Systeme, dasselbe Team',
        'Ein Vertrag, eine Telefonnummer',
        'Die Software und die Maschine, auf der sie läuft',
      ],
      badEnd: 'Niemand verantwortet das Ganze',
      goodEnd: 'Geht etwas schief, ist es unser Problem',
    },
    signals: {
      eyebrow: 'Wann sich ein Anruf lohnt',
      h2: 'Wenn Ihnen davon etwas bekannt vorkommt, liegt es nicht an Ihrem Team. Es liegt am Werkzeug.',
      items: [
        'Ihr Prozess lebt in geteilten Tabellen',
        'Jemand verbringt Stunden damit, Daten von einem System ins andere zu übertragen',
        'Niemand weiss, wie viele Geräte es gibt und in welchem Zustand',
        'Die gekaufte Software nutzt kaum jemand',
        'Sie finden niemanden, den Sie dafür einstellen könnten',
        'Ihr bisheriger Dienstleister antwortet nicht mehr',
      ],
      foot: 'Nichts davon löst sich durch mehr Einsatz. Es löst sich mit einem System, das zu Ihrer Arbeitsweise passt, und jemandem, der es am Laufen hält.',
    },
    services: {
      eyebrow: 'Leistungen',
      h2: 'Was wir machen',
      more: 'Automatisierung, Softwarewartung und Webportale',
    },
    pricing: {
      eyebrow: 'IT-Betreuung',
      h2: 'Preis pro Arbeitsplatz, ohne Überraschungen',
      lead: 'Die gesamte IT betreut. Sie wissen ab dem ersten Tag, was Sie monatlich zahlen.',
      seats: 'Arbeitsplätze',
      perSeat: 'pro Arbeitsplatz',
      month: 'CHF/Monat',
      inclTitle: 'In allen Paketen enthalten',
      included: [
        'Inventar und Geräteverwaltung',
        'Updates und Sicherheit',
        'Geprüfte Datensicherungen',
        'Ein- und Austritte von Mitarbeitenden',
        'Netzwerk, WLAN und Drucker',
        'Server und Cloud',
        'Monatlicher Bericht',
        'Anwenderunterstützung',
      ],
      note: 'Richtpreise. Die definitive Offerte hängt von Servern, Standorten und Servicegrad ab.',
      noteLink: 'Leistungsumfang ansehen',
    },
    steps: {
      eyebrow: 'Wie wir arbeiten',
      h2: 'Das Projekt ist der Anfang, nicht das Ende',
      lead: 'Die meisten Anbieter liefern und verschwinden. Wir verkaufen System und Unterhalt zusammen, weil ein System ohne Unterhalt verfällt.',
      items: [
        {
          t: 'Wir verstehen den Prozess',
          d: 'Bevor wir etwas vorschlagen, schauen wir, wie Sie tatsächlich arbeiten: die Schritte, die Ausnahmen und wo Zeit verloren geht. Ohne Analyse keine Offerte.',
        },
        {
          t: 'Festpreis',
          d: 'Ein Preis, ein Umfang, ein Termin. Was enthalten ist und was nicht, schriftlich. Keine Stundenabrechnung, keine Überraschungen unterwegs.',
        },
        {
          t: 'Wir bauen und integrieren',
          d: 'Alle zwei Wochen eine Lieferung und eine Umgebung, in der Sie es von Anfang an laufen sehen. Kein Verschwinden für einen Monat.',
        },
        {
          t: 'Wir bleiben',
          d: 'Unterhalt der Software und der IT, mit monatlichem Bericht. Das System entwickelt sich nach der Übergabe weiter.',
        },
      ],
    },
    work: { eyebrow: 'Referenzen', h2: 'Ausgewählte Projekte' },
    cta: {
      h2: 'Ist Ihnen ein Prozess zu eng geworden?',
      lead: 'Erzählen Sie uns, wie Sie heute arbeiten. Wenn wir helfen können, sagen wir es mit einer Festpreis-Offerte. Wenn nicht, sagen wir das auch.',
    },
  },
  services: {
    h1: 'Was wir bauen',
    lead: 'Alles beginnt am gleichen Punkt: verstehen, wie Ihr Unternehmen arbeitet, und das fehlende Werkzeug bauen. Danach bleiben wir und betreuen es.',
    unsureH2: 'Unsicher, was passt?',
    unsureLead:
      'Ganz normal. Kaum jemand kommt und weiss, was er braucht — man weiss, was weh tut. Schildern Sie uns das Problem, wir sagen Ihnen, ob wir helfen können.',
    includesH2: 'Was enthalten ist',
    signalsH2: 'Anzeichen, dass Sie das brauchen',
    startH2: 'Wie es beginnt',
    startLead:
      'Ein Gespräch, um den Prozess zu verstehen. Wenn wir helfen können, erhalten Sie eine Offerte mit klarem Umfang und Festpreis. Unverbindlich, und das Gespräch verrechnen wir nicht.',
    others: 'Weitere Leistungen',
    breadcrumb: 'Navigationspfad',
  },
  work: {
    h1: 'Projekte',
    lead: 'Jedes Projekt beginnt mit einem konkreten Problem eines konkreten Unternehmens. Hier einige davon, und was sie gelöst haben.',
    empty: 'Dieser Bereich ist in Arbeit.',
    ctaH2: 'Kommt Ihnen einer dieser Fälle bekannt vor?',
    ctaLead:
      'Sagen Sie uns, welcher Prozess zu eng geworden ist, und wir sagen Ihnen, ob wir helfen können.',
  },
  about: {
    h1: 'Entwicklung und Systeme, ein Ansprechpartner',
    lead: 'NESTEK ist ein Informatikunternehmen. Wir entwickeln die Software, die ein Unternehmen zum Arbeiten braucht, und betreiben die Infrastruktur, auf der diese Software läuft.',
    p2: 'In den meisten Fällen sind das zwei verschiedene Dienstleister: einer, der programmiert, und einer, der die Computer betreut. Geht etwas schief, zeigt jeder auf den anderen. Bei uns ist es ein Vertrag und eine Telefonnummer.',
    p3: 'Wir arbeiten mit Unternehmen, die schneller gewachsen sind als ihre Werkzeuge: Prozesse in Tabellen, Software, die niemand nutzt, Informationen über Abteilungen verstreut und eine IT, die niemand im Griff hat. Wir bauen das fehlende System und bleiben, um es zu betreuen.',
    capsEyebrow: 'Kompetenzen',
    capsH2: 'Beide Hälften des Problems',
    capsFoot:
      'Ein funktionierendes System braucht beide. Sie zu trennen ist der Grund, warum Projekte auf halbem Weg stecken bleiben.',
    capabilities: [
      {
        area: 'Entwicklung',
        items: [
          'Individuelle Verwaltungssoftware',
          'CRM und Verkaufsprozesse',
          'Schnittstellen und Automatisierung',
          'Webanwendungen und Portale',
        ],
      },
      {
        area: 'Systeme',
        items: [
          'Arbeitsplätze und Benutzer',
          'Netzwerke, Server und Cloud',
          'Datensicherung und Wiederherstellung',
          'Sicherheit und Zugriffskontrolle',
        ],
      },
    ],
    howEyebrow: 'Wie wir arbeiten',
    howH2: 'Vier Dinge, über die wir nicht verhandeln',
    principles: [
      {
        t: 'Festpreis',
        d: 'Ein Umfang, ein Preis, ein Termin — schriftlich, bevor wir beginnen. Muss etwas geändert werden, sagen wir vorher, was es kostet.',
      },
      {
        t: 'Keine versteckte Abhängigkeit',
        d: 'Code und Daten gehören Ihnen. Wenn Sie gehen möchten, nehmen Sie beides mitsamt Dokumentation mit. Wir binden keine Kunden.',
      },
      {
        t: 'Ein Ansprechpartner',
        d: 'Entwicklung und Systeme laufen an derselben Stelle zusammen. Geht etwas schief, zeigt niemand auf jemand anderen.',
      },
      {
        t: 'Technik nach Problem',
        d: 'Wir haben kein Lieblingswerkzeug zu verkaufen. Wir wählen danach, was der Unterhalt in fünf Jahren kostet.',
      },
    ],
    ctaH2: 'Sprechen wir?',
    ctaLead: 'Das erste Gespräch dient dazu, das Problem zu verstehen. Wir verrechnen es nicht.',
  },
  contact: {
    h1: 'Erzählen Sie uns davon',
    lead: 'Am besten funktioniert es, wenn Sie uns schildern, wie Sie heute arbeiten und was am meisten stört. Damit können wir sagen, ob sich ein weiteres Gespräch lohnt.',
    fields: {
      name: 'Name',
      company: 'Unternehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      optional: '(optional)',
      message: 'Welcher Prozess ist Ihnen zu eng geworden?',
      placeholder:
        'Zum Beispiel: Wir führen die Aufträge in einer geteilten Tabelle, und jeder neue Auftrag muss von Hand in die Fakturierung übertragen werden.',
      privacy: 'Ich habe die',
      privacyLink: 'Datenschutzerklärung',
      submit: 'Senden',
      note: 'Wir antworten innerhalb eines Arbeitstages.',
    },
    directH: 'Direkt',
    nextH: 'Wie es weitergeht',
    next: [
      'Wir antworten innerhalb eines Arbeitstages.',
      'Ein Gespräch von 20–30 Minuten, um den Prozess zu verstehen.',
      'Wenn wir helfen können, eine Offerte mit klarem Umfang und Festpreis.',
      'Wenn nicht, sagen wir es und verweisen Sie an jemanden, der es kann.',
    ],
    whoH: 'Mit wem wir arbeiten',
    who: 'Unternehmen mit einem Team und Prozessen, die ihren Werkzeugen entwachsen sind. Projekte ab CHF 3’000.',
    fallbackH2: 'Schreiben Sie uns direkt',
    fallbackP:
      'Schildern Sie uns in zwei Zeilen, wie Sie heute arbeiten und was am meisten stört. Wir antworten innerhalb eines Arbeitstages.',
  },
  footer: {
    servicesH: 'Leistungen',
    companyH: 'Unternehmen',
    contactH: 'Kontakt',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
  },
  services_data: {
    'software-a-medida': {
      title: 'Individuelle Software',
      short: 'Anwendungen, die zu Ihrer Arbeitsweise passen — nicht umgekehrt.',
      pain: '«Wir haben ein Programm, aber die Hälfte der Arbeit landet trotzdem in Excel.»',
      intro:
        'Standardsoftware zwingt Ihr Team in einen Prozess, der nicht seiner ist. Wir bauen Anwendungen, die von Ihrer tatsächlichen Arbeitsweise ausgehen: den Schritten, den Ausnahmen und den beteiligten Personen.',
      includes: [
        'Analyse des realen Prozesses, nicht des Handbuchs',
        'Fachkonzept und Freigabe, bevor Code entsteht',
        'Entwicklung, Tests und Inbetriebnahme',
        'Migration Ihrer bestehenden Daten',
        'Anbindung an die genutzten Systeme',
        'Schulung und Dokumentation',
      ],
      signals: [
        'Ihr Prozess lebt in geteilten Tabellen',
        'Jede Abteilung führt ihre eigene Version der Informationen',
        'Zeit geht beim Übertragen von Daten verloren',
        'Die gekaufte Software nutzt kaum jemand',
      ],
      from: 'Ab CHF 12’000',
    },
    crm: {
      title: 'Individuelles CRM',
      short: 'Kundenverwaltung, gebaut um Ihre Art zu verkaufen.',
      pain: '«Wir haben ein CRM gekauft und notieren das Wichtige weiterhin im Notizbuch.»',
      intro:
        'Generische CRM-Systeme scheitern, weil sie einen fremden Verkaufstrichter vorgeben. Wir gehen von Ihrem realen Verkaufsprozess aus und bauen das Werkzeug darauf, angebunden an das, was Sie bereits nutzen.',
      includes: [
        'Abbildung Ihres Verkaufsprozesses',
        'Kunden, Verkaufschancen und Nachverfolgung',
        'Automatisierung wiederkehrender Aufgaben',
        'Auswertungen und Übersichten, die wirklich nützen',
        'Anbindung an E-Mail, Fakturierung und Website',
        'Migration aus dem bisherigen CRM oder Excel',
      ],
      signals: [
        'Das CRM ist voller leerer Felder',
        'Der Verkauf arbeitet daran vorbei',
        'Sie wissen nicht sicher, wie viele Chancen offen sind',
        'Informationen gehen zwischen Verkauf und Administration verloren',
      ],
      from: 'Ab CHF 12’000',
    },
    'soporte-informatico': {
      title: 'IT-Betreuung und Unterhalt',
      short: 'Ihre Computer, Netzwerk und Server aus einer Hand betreut.',
      pain: '«Wenn etwas kaputtgeht, rufen wir einen Bekannten an und hoffen.»',
      intro:
        'Ein Unternehmen mit 30, 50 oder 100 Arbeitsplätzen braucht jemanden, der sich um Geräte, Konten, Datensicherungen, Netzwerk und Server kümmert — bevor sie ausfallen, nicht danach. Wir betreuen die gesamte IT zum Preis pro Arbeitsplatz, ohne Überraschungen.',
      includes: [
        'Inventar und Verwaltung aller Geräte',
        'Zentrale System- und Sicherheitsupdates',
        'Virenschutz und Absicherung der Arbeitsplätze',
        'Geprüfte Datensicherungen von Geräten und Servern',
        'Ein- und Austritte sowie Änderungen von Benutzern',
        'Netzwerk, WLAN, Drucker und Peripherie',
        'Server und Cloud-Umgebungen',
        'Monatlicher Bericht zum Zustand der IT',
      ],
      signals: [
        'Niemand weiss, wie viele Geräte es gibt und in welchem Zustand',
        'Computer werden aktualisiert, wenn jemand daran denkt',
        'Ein Gerät für einen neuen Mitarbeitenden bereitzustellen ist eine Odyssee',
        'Der Server wurde von jemandem aufgesetzt, der nicht mehr hier arbeitet',
        'Es gibt keinen Plan, falls morgen eine Maschine ausfällt',
        'Sie zahlen mehrere Dienstleister und keiner übernimmt Verantwortung',
      ],
      from: 'Ab CHF 40 pro Arbeitsplatz und Monat',
    },
    'mantenimiento-software': {
      title: 'Softwarewartung',
      short: 'Das System, das wir gebaut haben — überwacht und monatlich verbessert.',
      pain: '«Es wurde geliefert, lief ein Jahr, und jetzt antwortet niemand mehr.»',
      intro:
        'Ein System ohne Wartung verfällt: Abhängigkeiten veralten, Datensicherungen werden nicht mehr geprüft, Verbesserungen bleiben liegen. Wir bleiben nach der Übergabe, mit monatlicher Verpflichtung und enthaltenen Stunden, damit das System nicht stehen bleibt.',
      includes: [
        'Überwachung mit automatischen Meldungen',
        'Tägliche Datensicherung und Prüfung der Wiederherstellung',
        'Sicherheits- und Abhängigkeitsupdates',
        'Fehlerbehebung ohne Zusatzkosten',
        'Enthaltene Stunden pro Monat für Änderungen und Verbesserungen',
        'Monatlicher Statusbericht',
      ],
      signals: [
        'Niemand hat je geprüft, ob sich Ihre Datensicherungen wiederherstellen lassen',
        'Sie merken einen Ausfall erst, wenn jemand anruft',
        'Kleine Änderungen stapeln sich, weil jede eine Offerte braucht',
        'Ihr bisheriger Dienstleister antwortet nicht mehr',
      ],
      from: 'Ab CHF 300/Monat',
    },
    automatizacion: {
      title: 'Automatisierung und Schnittstellen',
      short: 'Verbinden, was nicht miteinander spricht, und wiederholte Handarbeit abschaffen.',
      pain: '«Jemand verbringt einen halben Tag damit, Daten von A nach B zu übertragen.»',
      intro:
        'Viele Unternehmen haben gute Werkzeuge, die nicht miteinander sprechen — und eine Person, die die Brücke bildet. Wir verbinden die Systeme und automatisieren die Übergabe. Meist das Projekt, das sich am schnellsten rechnet.',
      includes: [
        'Erfassen, wo Zeit verloren geht',
        'Systemintegration über Schnittstellen',
        'Automatisierung von Administration und Verkauf',
        'Automatische Dokumentenverarbeitung',
        'Meldungen und Benachrichtigungen nach eigenen Regeln',
      ],
      signals: [
        'Jemand überträgt Informationen von Hand zwischen Systemen',
        'Dieselben Daten werden zwei- oder dreimal erfasst',
        'Auswertungen werden jeden Monat von Hand erstellt',
        'Es gibt Fehler, die immer aus derselben Übertragung stammen',
      ],
      from: 'Ab CHF 4’500',
    },
    'aplicaciones-web': {
      title: 'Webanwendungen und Portale',
      short: 'Kundenportale, geschützte Bereiche und Anwendungen im Browser.',
      pain: '«Unsere Kunden fragen per E-Mail nach Dingen, die sie selbst nachsehen könnten.»',
      intro:
        'Wenn das interne System läuft, folgt meist die Öffnung nach aussen: Kunden sehen ihren Status, laden ihre Dokumente herunter oder bestellen, ohne anzurufen. Wir bauen das auf demselben System, nicht daneben.',
      includes: [
        'Kundenportale und geschützte Bereiche',
        'Webanwendungen, angebunden an Ihr System',
        'Unternehmenswebsites, wenn sie Teil des Projekts sind',
        'Leistung, Barrierefreiheit und technisches SEO',
      ],
      signals: [
        'Sie beantworten Anrufe zu Dingen, die Kunden selbst nachsehen könnten',
        'Sie versenden Dokumente einzeln von Hand',
        'Ihre Website und Ihr System sprechen nicht miteinander',
      ],
      from: null,
    },
  },
  projects_data: {
    unero: {
      client: 'Unero — Bau und Renovation · Ibiza und Formentera',
      summary:
        'Plattform mit Katalog von Projekten, Objekten und Studio, zweisprachig und mit eigenem Backend. Kein Schaufenster, sondern ein System, das ihre Informationen verwaltet und mit dem Bau mitwächst.',
      sector: 'Bau · Immobilien',
    },
    'tri-infinity': {
      client: 'Tri Infinity — Sportverein',
      summary:
        'Eigenes Verwaltungspanel, damit der Verein seine Nachrichten ohne fremde Hilfe publiziert. Für jede Änderung braucht es keinen Entwickler mehr.',
      sector: 'Sport · Verein',
    },
    'distrito-44': {
      client: 'Distrito 44 — Immobilienbüro',
      summary:
        'Objektportal mit integrierten Kontaktformularen, um Kundenanfragen zu bündeln statt sie zwischen Telefon und E-Mail zu verteilen.',
      sector: 'Immobilien',
    },
    fastrecord: {
      client: 'FastRecord — Immobilienbetreuung, Ibiza',
      summary:
        'Erfassung von Anfragen zu Vermietung und Objektunterhalt über das Mobiltelefon, mit Formularen, die in ihren Arbeitsprozess eingebunden sind.',
      sector: 'Immobilien',
    },
  },
};
