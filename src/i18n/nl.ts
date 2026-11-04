// Dutch strings. Same shape as en.ts (type Strings); see en.ts for notes.
import type { Strings } from './en';

const nl: Strings = {
  lang: 'nl',
  dir: 'ltr',
  /** For numbers and dates. */
  locale: 'nl',
  /** The language's own name, in the language switch. */
  languageName: 'Nederlands',
  name: 'Phone Theft First Aid',
  description: 'Wat je doet in de eerste minuten nadat je telefoon is gestolen',
  skip: 'Ga naar de inhoud',
  languages: 'Talen',
  nav: {
    home: 'Checklist',
    recovery: 'Herstel',
    prevention: 'Preventie',
    card: 'Kaart',
    sources: 'Bronnen',
    advocacy: 'Actie',
    about: 'Over ons',
    contribute: 'Meewerken',
    privacy: 'Privacy',
  },
  footer: 'Gevibecoded door',
  start: 'Start de checklist',
  back: 'Terug',
  done: 'Klaar',
  skipStep: 'Sla nu over',
  status: { done: 'Klaar', skipped: 'Overgeslagen', todo: 'Niet gedaan' },
  markDone: 'Markeer als klaar',
  stepOf: (n: number | string, total: number) => `Stap ${n} van ${total}`,
  beforeYouStart: 'Voor je begint',
  progress: (done: number | string, total: number) => `${done} van ${total} klaar`,
  goBack: 'Ga terug naar de overgeslagen stappen',
  startOver: 'Begin opnieuw',
  next: (title: string) => `Volgende: ${title}`,

  home: {
    nextTitle: 'Na het eerste uur',
    next: [
      {
        href: '/recovery/',
        picto: 'insurance',
        title: 'Herstel',
        text: 'Nieuwe simkaart, geld terug, telefoonrekening, verzekering',
      },
      {
        href: '/prevention/',
        picto: 'backup',
        title: 'Preventie',
        text: 'Zodat de volgende dief minder krijgt',
      },
    ],
  },

  /** Shown when the official AI-compiled source lists appear (Recovery, Data sources). */
  aiWarning: {
    title: 'Deze lijst is gemaakt met AI. Nog niemand heeft hem nagekeken',
    text: 'Links kunnen fout of verouderd zijn. Controleer elke pagina voor je erop vertrouwt',
    report: 'Meld een fout',
  },

  recovery: {
    title: 'Herstel',
    description: 'Wat je doet in de dagen na een telefoondiefstal: nieuwe simkaart, geld terug, telefoonrekening, verzekering, accounts, nieuwe telefoon',
    lead: 'Wat je doet in de dagen na de diefstal',
    listTitle: 'Doe dit de komende dagen',
    // In the order most people need them over the days after a theft. Drawn from the official sources.
    items: [
      {
        picto: 'sim',
        title: 'Krijg je nummer terug op een nieuwe simkaart',
        lines: [
          'Vraag je provider om een nieuwe simkaart of eSIM met hetzelfde nummer',
          'Neem je identiteitsbewijs mee. De meeste providers geven de simkaart alleen aan de klant op wiens naam het contract staat',
          'Doe het deze week. Na 30 dagen geven sommige providers je nummer aan iemand anders',
          'In het buitenland? Vraag om een eSIM',
          'Start de telefoon opnieuw op. Test een oproep, een sms en mobiele data',
          'Vraag een schriftelijk bewijs dat de simkaart en de telefoon geblokkeerd zijn. Bewaar het referentienummer',
        ],
      },
      {
        picto: 'bank',
        title: 'Vraag je bank om je geld terug',
        lines: [
          'Meld elke betaling die je niet zelf deed, zo snel als je kunt',
          'In veel landen moet je bank je volgens de wet terugbetalen. Als iemand je pincode zag of je telefoon niet vergrendeld was, is dat niet altijd jouw schuld',
          'Vraag het antwoord schriftelijk',
          'Controleer of er leningen of kredieten op jouw naam zijn geopend',
          'Zegt de bank nee? Dien een klacht in bij de financiële ombudsdienst. Dat is gratis',
          'Vraag juridisch advies aan een consumentenorganisatie of een juridisch loket. Veel geven het gratis',
        ],
      },
      {
        picto: 'card',
        title: 'Controleer elke app die kan betalen',
        lines: [
          'Kijk naar betaalapps, webwinkels en je telefoonrekening',
          'Meld wat je niet zelf kocht. Sommige betalen het terug',
          'Met je kaart betaald? Je bank kan ook proberen de betaling terug te draaien',
        ],
      },
      {
        picto: 'receipt',
        title: 'Controleer je telefoonrekening',
        lines: [
          'Een blokkering beëindigt je contract niet. Blijf het abonnement en de telefoon betalen',
          'Zoek naar oproepen, data en betalingen van de dief',
          'Betwist alle kosten van na je melding van de diefstal',
          'Lost je provider het niet op? Dien een klacht in bij de telecomtoezichthouder of de ombudsdienst',
          'Lees je contract voor je opzegt of een nieuw toestel neemt. Er kunnen kosten zijn',
        ],
      },
      {
        picto: 'insurance',
        title: 'Doe een aangifte bij je verzekering',
        lines: [
          'Meld de schade voor de termijn in je polis verloopt. Sommige geven maar 30 dagen',
          'Je woon-, reis-, bankkaart- en telefoonverzekering kunnen elk diefstal dekken',
          'Stuur het referentienummer van de politie, het aankoopbewijs en het bewijs dat de telefoon geblokkeerd is',
          'Meld de schade voor je de telefoon uit je account verwijdert',
          'Komt de telefoon terug nadat je de schade meldde? Laat het je verzekeraar weten',
        ],
      },
      {
        picto: 'password',
        title: 'Herstel je accounts via de officiële weg',
        lines: [
          'Gebruik de herstelpagina van de dienst zelf',
          'Betaal nooit iemand die aanbiedt om een account voor je te herstellen',
          'Wijzig je inlogmethoden een voor een. Als je ze allemaal tegelijk wijzigt, kan een account 30 dagen geblokkeerd raken',
        ],
      },
      {
        picto: 'eye',
        title: 'Blijf je accounts controleren',
        lines: [
          'Controleer elke week je e-mail en je bank op nieuwe inlogs',
          'Verwijder apparaten en apps die je niet kent',
          'Controleer het doorsturen van e-mail, en je herstel-e-mailadres en -telefoonnummer',
          'Wijzig elk wachtwoord dat je ook op andere sites gebruikt',
        ],
      },
      {
        picto: 'phishing',
        title: 'Blijf letten op oplichting',
        lines: [
          'Een bericht zegt dat je telefoon is gevonden? Dat is oplichting',
          'Dieven sturen valse berichten en links om je toegangscode of het wachtwoord van je account te krijgen',
          'Daarmee kunnen ze de telefoon ontgrendelen en verkopen',
          'Geef je toegangscode nooit aan iemand',
        ],
      },
      {
        picto: 'wipe',
        title: 'Wis de telefoon als je zeker weet dat hij weg is',
        lines: [
          'Open de pagina waarmee je hem vergrendelde. Kies Wissen',
          'Een gewiste Android-telefoon toont niet meer waar hij is. Een iPhone wel',
          'Verwijder de telefoon niet uit je account. Dan blijft hij vergrendeld voor de dief',
        ],
      },
      {
        picto: 'backup',
        title: 'Stel je nieuwe telefoon in',
        lines: [
          'Zet je gegevens terug uit je back-up',
          'Log opnieuw in op je bankapps en apps voor mobiel betalen',
          'Stel je digitale ID opnieuw in',
          'Log in op je berichtenapps. Beëindig de sessie op de oude telefoon',
          'Nieuw nummer? Pas het aan bij je bank, je e-mail en je overheidsaccounts',
        ],
      },
      {
        picto: 'check',
        title: 'Telefoon terug?',
        lines: [
          'Laat het de politie en je verzekeraar weten',
          'Vraag je provider om de blokkering op te heffen. Alleen jij kunt dat, met je identiteitsbewijs of het referentienummer van de blokkering',
          'Wis hem voor je hem opnieuw gebruikt. Een dief kan er iets op gezet hebben',
        ],
      },
    ],
    officialTitle: 'Officieel advies in jouw land',
    officialLead: 'De regels zijn in elk land anders. Sommige gidsen zijn alleen in de lokale taal',
    country: 'Jouw land',
    choose: 'Kies',
    all: 'Alle landen en bronnen',
  },

  prevention: {
    title: 'Preventie',
    description: 'Zodat de volgende dief minder krijgt. Wat je op je telefoon en accounts instelt voor een diefstal',
    lead: 'Zodat de volgende dief minder krijgt',
    chartTitle: (year: string) => `Telefoondiefstallen en -overvallen in Londen in ${year}`,
    every: (minutes: number) => `Ongeveer één diefstal om de ${minutes} minuten`,
    measure: 'Telefoondiefstallen en telefoonovervallen geregistreerd door de Metropolitan Police, per jaar',
    updated: 'Bijgewerkt',
    source: 'Bron',
    warningKicker: 'Het belangrijkste',
    warningText: 'Ze willen je bankrekeningen, niet alleen je telefoon',
    warningStat: 'van de slachtoffers van identiteitsfraude zag geld verdwijnen van de bankrekening',
    warningSource: 'Enquête van GBG, 2022',
    warningSourceNote: 'Niet alle identiteitsfraude komt door telefoondiefstal, maar ik vond geen preciezere cijfers',
    listTitle: 'Doe dit voor het gebeurt',
    listNote: 'Menunamen kunnen op je telefoon anders zijn. Vind je er een niet? Zoek ernaar in de instellingen',
    items: [
      {
        picto: 'imei',
        title: 'Schrijf je IMEI op',
        lines: [
          'Typ *#06# in de telefoonapp. Het nummer verschijnt',
          'Schrijf het op papier. Bewaar het thuis',
          'Geen nummer? Zoek het in de instellingen'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Open Instellingen',
              'Tik op Algemeen',
              'Tik op Info',
              'Scrol omlaag naar IMEI'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/108037'
            }
          },
          {
            name: 'Android',
            steps: [
              'Open Instellingen',
              'Tik op Over de telefoon',
              'Zoek IMEI'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/android/answer/15146908?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'phone',
        title: 'Schrijf noodnummers op',
        lines: [
          'Het nummer van je provider voor een verloren of gestolen telefoon, en het nummer om te bellen vanuit het buitenland',
          'Het nummer van je bank om een kaart te blokkeren. Het staat op de achterkant van je kaart',
          'Iemand die je vertrouwt. Zonder je telefoon weet je misschien geen enkel nummer meer',
          'Het e-mailadres van je Apple- of Google-account. Je hebt het nodig om de telefoon te vergrendelen',
          'Bewaar een kopie thuis en een in je tas of koffer, niet bij je telefoon',
        ],
        link: { label: 'Maak een herstelkaart', href: '/card/' },
      },
      {
        picto: 'sim-block',
        title: 'Stel een pincode in voor je simkaart',
        lines: [
          'Dan kan een dief je simkaart niet in een andere telefoon steken om je inlogcodes te krijgen',
          'Vraagt het een pincode die je nooit hebt gekozen? Vraag de standaardpincode aan je provider',
          'Raad niet. Een foute pincode kan je simkaart voorgoed blokkeren',
          'Wijzig de standaardpincode. Sommige zijn voor iedereen te vinden'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Open Instellingen',
              'Tik op Mobiel netwerk',
              'Twee nummers? Tik op het nummer dat je wilt',
              'Tik op Simpincode',
              'Zet Simpincode aan',
              'Voer de pincode in',
              'Tik op Gereed'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/118228'
            }
          },
          {
            name: 'Android',
            steps: [
              'Open Instellingen',
              'Tik op Beveiliging en privacy',
              'Tik op Meer beveiligingsinstellingen',
              'Tik op Simlock',
              'Zet Simkaart vergrendelen aan',
              'Voer de pincode in'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/android/answer/15146908?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'card',
        title: 'Bewaar je bankkaart niet achter op je telefoon',
        lines: ['Een dief die de telefoon neemt, heeft dan ook de kaart', 'Bewaar je kaarten in een zak of portemonnee, niet bij de telefoon'],
      },
      {
        picto: 'bank',
        title: 'Zet niet al je bankzaken op je telefoon',
        lines: [
          'Hou minstens een bankrekening en een kaart buiten de telefoon',
          'Als de telefoon wordt gestolen, kun je dan nog betalen en geld afhalen',
        ],
      },
      {
        picto: 'wallet',
        title: 'Bewaar een reserve-ID, cash en een kaart op een veilige plek',
        lines: ['Op reis? Laat ze in je hotelkamer', 'Dan zit je na een diefstal niet zonder geld of ID'],
      },
      {
        picto: 'locate',
        title: 'Zet Zoek mijn of Vind-plek aan',
        lines: [
          'Controleer of je het wachtwoord van dat account kent'
        ],
        guides: [
          {
            name: 'iPhone: Zoek mijn',
            steps: [
              'Open Instellingen',
              'Tik op je naam',
              'Tik op Zoek mijn',
              'Tik op Zoek mijn iPhone',
              'Zet Zoek mijn iPhone aan',
              'Zet Zoek mijn-netwerk aan',
              'Zet Stuur laatste locatie aan'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/102648'
            }
          },
          {
            name: 'Android: Vind-plek',
            steps: [
              'Open Instellingen',
              'Tik op Locatie',
              'Zet Locatie gebruiken aan',
              'Ga terug naar Instellingen',
              'Tik op Beveiliging',
              'Tik op Vind-plek',
              'Zet Toestaan dat het apparaat wordt gevonden aan',
              'Ga terug naar Instellingen',
              'Tik op Google',
              'Tik op Alle services',
              'Tik op Vind-plek',
              'Tik op Je offline apparaten vinden',
              'Kies Met netwerk overal'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/android/answer/3265955?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'lock',
        title: 'Zet diefstalbeveiliging aan',
        lines: [],
        guides: [
          {
            name: 'iPhone: Bescherming voor gestolen apparaat',
            notes: [
              'Die vraagt je gezicht of vingerafdruk voor grote wijzigingen',
              'Je hebt twee-factor-authenticatie, Zoek mijn, een toegangscode, Face ID of Touch ID en Belangrijke locaties nodig'
            ],
            steps: [
              'Open Instellingen',
              'Tik op Face ID en toegangscode',
              'Voer je toegangscode in',
              'Tik op Bescherming voor gestolen apparaat',
              'Zet Bescherming voor gestolen apparaat aan',
              'Kies onder Beveiligingsvertraging vereist de optie Altijd'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/120340'
            }
          },
          {
            name: 'Android: Diefstalbeveiliging',
            notes: [
              'Die vergrendelt het scherm als iemand de telefoon grijpt, als de telefoon offline gaat of na foute pogingen',
              'Je hebt een schermvergrendeling nodig',
              'Is een optie grijs? Je telefoon heeft die vergrendeling niet'
            ],
            steps: [
              'Open Instellingen',
              'Tik op Google',
              'Tik op Alle services',
              'Tik op Diefstalbeveiliging',
              'Zet Vergrendeling bij diefstaldetectie aan',
              'Zet Offline apparaatvergrendeling aan',
              'Zet Vergrendeling bij mislukte verificatie aan',
              'Tik op Apparaatvergrendeling op afstand',
              'Zet Apparaatvergrendeling op afstand aan'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/android/answer/15146908?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'printer',
        title: 'Print je back-upcodes',
        lines: [
          'Doe dit eerst voor je e-mail',
          'Een andere e-mailprovider? Kijk in de beveiligingsinstellingen van dat account',
          'Bewaar het papier thuis, niet in je portemonnee of telefoonhoesje',
          'Apple Account: gebruik in plaats daarvan een herstelcontact. Zie Voeg een tweede manier om in te loggen toe'
        ],
        guides: [
          {
            name: 'Google-account',
            notes: [
              'Zet eerst tweestapsverificatie aan'
            ],
            steps: [
              'Open je Google-account',
              'Tik op Beveiliging en inloggen',
              'Tik op Tweestapsverificatie',
              'Tik onder Back-upcodes op Doorgaan',
              'Tik op Back-upcodes verkrijgen',
              'Tik op Afdrukken'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/accounts/answer/1187538?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'password',
        title: 'Voeg een tweede manier om in te loggen toe',
        lines: [
          'Een beveiligingssleutel of een toegangssleutel op een laptop werkt ook'
        ],
        guides: [
          {
            name: 'Apple Account: herstelcontact',
            notes: [
              'Kies iemand die je vertrouwt en die een Apple apparaat heeft',
              'Jullie moeten allebei iMessage aan hebben staan'
            ],
            steps: [
              'Open Instellingen',
              'Tik op je naam',
              'Tik op Inloggen en beveiliging',
              'Tik op Herstelcontacten',
              'Tik op Voeg herstelcontact toe',
              'Volg de stappen op het scherm'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/102641'
            }
          },
          {
            name: 'Google-account: herstelmailadres en hersteltelefoonnummer',
            notes: [
              'Gebruik een ander e-mailadres dan dat waarmee je inlogt',
              'Voeg een tweede telefoonnummer toe dat niet in deze telefoon zit, bijvoorbeeld van een familielid'
            ],
            steps: [
              'Open je Google-account',
              'Tik op Beveiliging en inloggen',
              'Tik op Herstelmailadres',
              'Volg de stappen op het scherm',
              'Ga terug naar Beveiliging en inloggen',
              'Tik op Hersteltelefoonnummer',
              'Volg de stappen op het scherm'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/accounts/answer/183723?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'authenticator',
        title: 'Bewaar je inlogcodes niet alleen op de telefoon',
        lines: [
          'Een andere code-app? Zet back-up aan in de instellingen van die app',
          'Of stel hem ook in op een tweede apparaat'
        ],
        guides: [
          {
            name: 'Google Authenticator',
            steps: [
              'Open Google Authenticator',
              'Log in de app in op je Google-account',
              'Vraagt de app om je codes op te slaan in het account? Tik op Toestaan'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/accounts/answer/1066447?hl=nl&co=GENIE.Platform%3DAndroid'
            }
          }
        ]
      },
      {
        picto: 'check',
        title: 'Test het',
        lines: ['Log op een computer in op je e-mail zonder je telefoon', 'Lukt het niet? Los het nu op, niet na een diefstal'],
      },
      {
        picto: 'repeat',
        title: 'Al eens een telefoon gestolen?',
        lines: [
          'Maak nieuwe back-upcodes zodra je weer in je accounts kunt',
          'De oude zijn misschien samen met de telefoon gestolen'
        ],
        guides: [
          {
            name: 'Google-account',
            steps: [
              'Open je Google-account',
              'Tik op Beveiliging en inloggen',
              'Tik op Tweestapsverificatie',
              'Tik onder Back-upcodes op Doorgaan',
              'Tik op Vernieuwen',
              'Print de nieuwe codes'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/accounts/answer/1187538?hl=nl'
            }
          }
        ]
      },
      {
        picto: 'backup',
        title: 'Maak een back-up van je telefoon',
        lines: [
          'Foto’s en contacten missen mensen het meest'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Open Instellingen',
              'Tik op je naam',
              'Tik op iCloud',
              'Tik op iCloud-reservekopie',
              'Zet Back-up van deze iPhone aan',
              'Tik op Maak nu back-up'
            ],
            doc: {
              label: 'Uitleg van Apple',
              href: 'https://support.apple.com/nl-nl/108366'
            }
          },
          {
            name: 'Android',
            steps: [
              'Open Instellingen',
              'Tik op Google',
              'Tik op Alle services',
              'Tik op Back-up',
              'Zet Back-up aan',
              'Tik op Nu back-up maken'
            ],
            doc: {
              label: 'Uitleg van Google',
              href: 'https://support.google.com/android/answer/2819582?hl=nl'
            }
          }
        ]
      },
    ],
  },

  card: {
    title: 'Herstelkaart',
    description: 'Print een kaart met je IMEI en noodnummers, en bewaar hem niet bij je telefoon',
    lead: 'Je IMEI en de nummers om te bellen, op papier. Bewaar hem niet bij je telefoon',
    imei: 'IMEI',
    imeiHint: 'Typ *#06# in de telefoonapp. Het nummer verschijnt',
    imei2: 'Tweede IMEI, als de telefoon er twee toont',
    numbers: 'Noodnummers',
    numbersHint: 'Gebruik voor je provider en je bank hun nummer voor een gestolen telefoon en een verloren kaart. Zet er ook het nummer bij om vanuit het buitenland te bellen',
    nameLabel: 'Naam',
    numberLabel: 'Nummer',
    preview: 'Je kaart',
    previewHint: 'Hij wordt twee keer geprint: een voor je tas of portemonnee, een voor thuis',
    print: 'Print de kaart',
  },

  sources: {
    title: 'Bronnen',
    description: 'Officiële gidsen over gestolen telefoons per land: overheid, politie, toezichthouders, consumentenorganisaties, providers en telefoonfabrikanten',
    lead: 'Officieel advies in elk land. De regels zijn in elk land anders. Sommige gidsen zijn alleen in de lokale taal',
    worldwide: 'Wereldwijd',
    pdf: 'PDF',
    categories: {
      Government: 'Overheid',
      Regulator: 'Toezichthouder',
      Police: 'Politie',
      'Cyber agency': 'Cyberbeveiligingsdienst',
      'Consumer org': 'Consumentenorganisatie',
      'Security nonprofit': 'Non-profit',
      Telco: 'Provider',
      Manufacturer: 'Telefoonfabrikant',
      'Tech platform': 'Techplatform',
      'Finance industry': 'Banken',
      'Industry body': 'Sectororganisatie',
    },
  },

  advocacy: {
    title: 'Actie',
    description: 'Hou de checklist op papier klaar voor mensen wier telefoon net is gestolen',
    policeTitle: 'De politie moet slachtoffers helpen hun accounts te blokkeren',
    police: [
      'Toen mijn telefoon werd gestolen, zei de politieagent dat ik mijn bankrekening per e-mail moest blokkeren',
      'De taak van de politie is niet alleen criminelen vangen en slachtoffers zeggen "we kunnen niets doen". Ze moeten mensen helpen de toegang tot hun accounts te blokkeren en hun bank te bellen',
    ],
    printTitle: 'De checklist op papier',
    print: [
      '⚠️ Iemand wiens telefoon net is gestolen, kan niet opzoeken wat te doen. Die heeft geen telefoon, en vaak geen internet',
      'Politie, hotels, winkels: print deze checklist. Hou hem klaar en geef hem aan het slachtoffer',
      '⚠️ Neem de diefstal ernstig. Het is niet zomaar een telefoon. Hun bank en accounts lopen gevaar',
    ],
    download: 'Download de checklist (PDF)',
    writeTitle: 'Schrijf ons',
    writeTo: 'Pers, providers, telefoonfabrikanten, iedereen die wil dat gestolen telefoons niets meer waard zijn: schrijf naar',
    /** The no-JS text of the address, spelled out. */
    address: 'advocacy apenstaartje phone-theft-first-aid punt org',
  },

  about: {
    title: 'Over ons',
    description: 'Gemaakt door iemand wiens telefoon is gestolen',
    story: [
      'Mijn telefoon werd gestolen. Ik had geen ander apparaat, en beveiligingen zoals tweestapsverificatie sloten me buiten mijn accounts. Tegen de tijd dat ik er weer in kon, hadden de dieven enorme schade aangericht. Deze website is een poging om op te sommen wat ik vooraf had moeten doen om de schade te beperken, wat meteen na het incident, en hoe ik zoveel mogelijk kon herstellen',
      'Ik ben geen beveiligingsbedrijf of instantie. De informatie op deze website is niet bedoeld als volledig',
    ],
    madeBy: 'Gevibecoded door',
    mistake: 'Een fout gevonden of een betere stap?',
    contribute: 'Meewerken',
    press: 'Pers, providers, telefoonfabrikanten: zie',
  },

  privacy: {
    title: 'Privacy',
    description: 'Wat deze site over je bewaart, en waar',
    lines: [
      'Deze site bestaat uit gewone bestanden. Er is geen server van mij die iets bewaart van wat je hier doet',
      'Je voortgang in de checklist blijft in dit browsertabblad. Ze wordt gewist als je het tabblad sluit, zodat er niets achterblijft op een geleende telefoon of computer',
      'De lettertypen komen van deze site. Ik laad niets van andere bedrijven',
      'Het bedrijf dat deze bestanden host, kan gewone toegangslogs bewaren, zoals bij elke website',
    ],
  },

  notFound: {
    title: 'Pagina niet gevonden',
    lead: 'Telefoon gestolen? Ga naar de checklist',
    go: 'Ga naar de checklist',
  },
};

export default nl;
