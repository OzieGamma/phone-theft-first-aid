// French strings. Same shape as en.ts (type Strings); see en.ts for notes.

import type { Strings } from './en';

const fr: Strings = {
  lang: 'fr',
  dir: 'ltr',
  /** For numbers and dates. */
  locale: 'fr',
  /** The language's own name, in the language switch. */
  languageName: 'Français',
  name: 'Phone Theft First Aid',
  description: 'Que faire dans les premières minutes après le vol de votre téléphone',
  skip: 'Aller au contenu',
  languages: 'Langues',
  nav: {
    home: 'Checklist',
    recovery: 'Après le vol',
    prevention: 'Prévention',
    card: 'Carte',
    sources: 'Sources',
    advocacy: 'Plaidoyer',
    about: 'À propos',
    contribute: 'Contribuer',
    privacy: 'Confidentialité',
  },
  footer: 'Vibe-codé par',
  start: 'Commencer la checklist',
  back: 'Retour',
  done: 'Fait',
  skipStep: 'Passer pour l’instant',
  status: { done: 'Fait', skipped: 'Passé', todo: 'Pas fait' },
  markDone: 'Marquer comme fait',
  stepOf: (n: number | string, total: number) => `Étape ${n} sur ${total}`,
  beforeYouStart: 'Avant de commencer',
  progress: (done: number | string, total: number) => `${done} sur ${total} faits`,
  goBack: 'Revenir aux étapes passées',
  startOver: 'Recommencer',
  next: (title: string) => `Ensuite : ${title}`,

  home: {
    nextTitle: 'Après la première heure',
    next: [
      {
        href: '/recovery/',
        picto: 'insurance',
        title: 'Après le vol',
        text: 'Nouvelle SIM, remboursement, facture de téléphone, assurance',
      },
      {
        href: '/prevention/',
        picto: 'backup',
        title: 'Prévention',
        text: 'Pour que le prochain voleur obtienne moins',
      },
    ],
  },

  /** Shown when the official AI-compiled source lists appear (Recovery, Data sources). */
  aiWarning: {
    title: 'Cette liste a été établie avec l’IA. Personne ne l’a encore vérifiée',
    text: 'Des liens peuvent être faux ou dépassés. Vérifiez chaque page avant de vous y fier',
    report: 'Signaler une erreur',
  },

  recovery: {
    title: 'Après le vol',
    description: 'Que faire dans les jours qui suivent le vol d’un téléphone : nouvelle SIM, remboursement, facture de téléphone, assurance, comptes, nouveau téléphone',
    lead: 'Que faire dans les jours qui suivent le vol',
    listTitle: 'À faire dans les prochains jours',
    // In the order most people need them over the days after a theft. Drawn from the official sources.
    items: [
      {
        picto: 'sim',
        title: 'Récupérez votre numéro sur une nouvelle SIM',
        lines: [
          'Demandez à votre opérateur une nouvelle SIM ou eSIM avec le même numéro',
          'Prenez une pièce d’identité. La plupart des opérateurs la donnent seulement au titulaire du contrat',
          'Faites-le cette semaine. Après 30 jours, certains opérateurs donnent votre numéro à quelqu’un d’autre',
          'À l’étranger ? Demandez une eSIM',
          'Redémarrez le téléphone. Testez un appel, un SMS et les données mobiles',
          'Demandez une preuve écrite que la SIM et le téléphone sont bloqués. Gardez le numéro de référence',
        ],
      },
      {
        picto: 'bank',
        title: 'Demandez à votre banque de vous rembourser',
        lines: [
          'Signalez chaque paiement que vous n’avez pas fait, le plus tôt possible',
          'Dans beaucoup de pays, la loi oblige votre banque à vous rembourser. Un code vu par le voleur ou un téléphone resté déverrouillé n’est pas toujours votre faute',
          'Demandez la réponse par écrit',
          'Vérifiez si des prêts ou des crédits ont été ouverts à votre nom',
          'La banque refuse ? Portez plainte auprès du médiateur financier. C’est gratuit',
          'Demandez un conseil juridique à une association de consommateurs ou à un service d’aide juridique. Beaucoup le font gratuitement',
        ],
      },
      {
        picto: 'card',
        title: 'Vérifiez chaque appli qui peut payer',
        lines: [
          'Regardez les applis de paiement, les boutiques en ligne et votre facture de téléphone',
          'Signalez ce que vous n’avez pas acheté. Certains remboursent',
          'Payé par carte ? Votre banque peut aussi essayer d’annuler le paiement',
        ],
      },
      {
        picto: 'receipt',
        title: 'Vérifiez votre facture de téléphone',
        lines: [
          'Un blocage ne met pas fin à votre contrat. Continuez à payer l’abonnement et le téléphone',
          'Cherchez les appels, les données et les paiements faits par le voleur',
          'Contestez chaque frais facturé après votre signalement du vol',
          'L’opérateur ne corrige pas ? Portez plainte auprès du régulateur des télécoms ou du médiateur',
          'Lisez votre contrat avant de résilier ou de changer d’offre. Il peut y avoir des frais',
        ],
      },
      {
        picto: 'insurance',
        title: 'Déclarez le vol à votre assurance',
        lines: [
          'Déclarez-le avant la date limite de votre contrat. Certains donnent seulement 30 jours',
          'L’assurance habitation, voyage, carte bancaire ou celle du contrat de téléphone peut couvrir le vol',
          'Envoyez la référence de la police, la facture d’achat et la preuve que le téléphone est bloqué',
          'Déclarez le vol avant de retirer le téléphone de votre compte',
          'Le téléphone revient après la déclaration ? Prévenez votre assureur',
        ],
      },
      {
        picto: 'password',
        title: 'Récupérez vos comptes par la voie officielle',
        lines: [
          'Utilisez la page de récupération du service lui-même',
          'Ne payez jamais quelqu’un qui propose de récupérer un compte pour vous',
          'Changez les méthodes de connexion une à la fois. Tout changer d’un coup peut bloquer un compte pendant 30 jours',
        ],
      },
      {
        picto: 'eye',
        title: 'Surveillez vos comptes',
        lines: [
          'Chaque semaine, cherchez de nouvelles connexions sur votre e-mail et votre banque',
          'Supprimez les appareils et les applis que vous ne connaissez pas',
          'Vérifiez le transfert d’e-mails, ainsi que votre e-mail et votre numéro de récupération',
          'Changez chaque mot de passe que vous utilisez aussi sur d’autres sites',
        ],
      },
      {
        picto: 'phishing',
        title: 'Restez attentif aux arnaques',
        lines: [
          'Un message dit que votre téléphone a été retrouvé ? C’est une arnaque',
          'Les voleurs envoient de faux messages et de faux liens pour obtenir votre code ou le mot de passe de votre compte',
          'Avec ça, ils peuvent déverrouiller le téléphone et le vendre',
          'Ne donnez jamais votre code à personne',
        ],
      },
      {
        picto: 'wipe',
        title: 'Effacez le téléphone quand vous êtes sûr qu’il est perdu',
        lines: [
          'Ouvrez la page qui vous a servi à le verrouiller. Choisissez Effacer',
          'Un téléphone Android effacé ne montre plus où il est. Un iPhone, si',
          'Ne retirez pas le téléphone de votre compte. Il reste ainsi verrouillé pour le voleur',
        ],
      },
      {
        picto: 'backup',
        title: 'Configurez votre nouveau téléphone',
        lines: [
          'Restaurez vos données depuis votre sauvegarde',
          'Reconnectez-vous à vos applis de banque et de paiement mobile',
          'Configurez à nouveau votre identité numérique',
          'Connectez-vous à vos messageries. Fermez la session sur l’ancien téléphone',
          'Nouveau numéro ? Mettez-le à jour auprès de votre banque, de votre e-mail et de vos comptes administratifs',
        ],
      },
      {
        picto: 'check',
        title: 'Vous avez retrouvé votre téléphone ?',
        lines: [
          'Prévenez la police et votre assureur',
          'Demandez à votre opérateur de lever le blocage. Vous seul pouvez le faire, avec une pièce d’identité ou la référence du blocage',
          'Effacez-le avant de vous en resservir. Un voleur a pu y installer quelque chose',
        ],
      },
    ],
    officialTitle: 'Conseils officiels dans votre pays',
    officialLead: 'Les règles changent d’un pays à l’autre. Certains guides existent seulement dans la langue du pays',
    country: 'Votre pays',
    choose: 'Choisir',
    all: 'Tous les pays et toutes les sources',
  },

  prevention: {
    title: 'Prévention',
    description: 'Pour que le prochain voleur obtienne moins. Ce qu’il faut configurer sur votre téléphone et vos comptes avant un vol',
    lead: 'Pour que le prochain voleur obtienne moins',
    chartTitle: (year: string) => `Vols de téléphones à Londres en ${year}`,
    every: (minutes: number) => `Environ un vol toutes les ${minutes} minutes`,
    measure: 'Vols et vols avec violence de téléphones enregistrés par la Metropolitan Police, par an',
    updated: 'Mis à jour',
    source: 'Source',
    warningKicker: 'Le plus important',
    warningText: 'Ils visent vos comptes bancaires, pas seulement votre téléphone',
    warningStat: 'des victimes d’usurpation d’identité se sont fait prendre de l’argent sur leur compte bancaire',
    warningSource: 'Enquête GBG, 2022',
    warningSourceNote: 'L’usurpation d’identité ne vient pas toujours d’un vol de téléphone, mais je n’ai pas trouvé de chiffres plus précis',
    listTitle: 'À faire avant que ça arrive',
    listNote: 'Les noms des menus peuvent être différents sur votre téléphone. Vous n’en trouvez pas un ? Cherchez-le dans les réglages',
    items: [
      {
        picto: 'imei',
        title: 'Notez votre IMEI',
        lines: [
          'Tapez *#06# dans l’appli Téléphone. Le numéro s’affiche',
          'Écrivez-le sur papier. Gardez-le chez vous',
          'Pas de numéro ? Cherchez-le dans les réglages'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Ouvrez Réglages',
              'Touchez Général',
              'Touchez Informations',
              'Faites défiler jusqu’à IMEI'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/108037'
            }
          },
          {
            name: 'Android',
            steps: [
              'Ouvrez Paramètres',
              'Appuyez sur À propos du téléphone',
              'Cherchez IMEI'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/android/answer/15146908?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'phone',
        title: 'Notez les numéros d’urgence',
        lines: [
          'La ligne « téléphone perdu » de votre opérateur, et le numéro pour l’appeler depuis l’étranger',
          'La ligne « carte perdue » de votre banque. Elle est au dos de votre carte',
          'Une personne de confiance. Sans votre téléphone, vous ne vous souviendrez peut-être d’aucun numéro',
          'L’e-mail de votre compte Apple ou Google. Il vous le faut pour verrouiller le téléphone',
          'Gardez une copie chez vous et une dans votre sac ou votre valise, loin de votre téléphone',
        ],
        link: { label: 'Créer une carte de secours', href: '/card/' },
      },
      {
        picto: 'sim-block',
        title: 'Mettez un code PIN sur la SIM',
        lines: [
          'Un voleur ne peut alors pas mettre votre SIM dans un autre téléphone pour recevoir vos codes de connexion',
          'On vous demande un code que vous n’avez jamais choisi ? Demandez le code PIN par défaut à votre opérateur',
          'Ne devinez pas. Une erreur peut bloquer la SIM définitivement',
          'Changez le code PIN par défaut. Certains sont connus de tous'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Ouvrez Réglages',
              'Touchez Données cellulaires',
              'Deux numéros ? Touchez le numéro voulu',
              'Touchez PIN de la carte SIM',
              'Activez le code PIN',
              'Saisissez le code PIN',
              'Touchez OK'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/118228'
            }
          },
          {
            name: 'Android',
            steps: [
              'Ouvrez Paramètres',
              'Appuyez sur Sécurité et confidentialité',
              'Appuyez sur Autres paramètres de sécurité',
              'Appuyez sur Verrouillage de carte SIM',
              'Activez Verrouiller la carte SIM',
              'Saisissez le code PIN'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/android/answer/15146908?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'card',
        title: 'Ne gardez pas votre carte bancaire au dos de votre téléphone',
        lines: ['Un voleur qui prend le téléphone prend aussi la carte', 'Gardez vos cartes dans une poche ou un portefeuille, loin du téléphone'],
      },
      {
        picto: 'bank',
        title: 'Ne mettez pas toute votre banque sur votre téléphone',
        lines: [
          'Gardez au moins un compte bancaire et une carte hors du téléphone',
          'Si le téléphone est volé, vous pouvez encore payer et retirer de l’argent',
        ],
      },
      {
        picto: 'wallet',
        title: 'Gardez une pièce d’identité, de l’argent et une carte de secours en lieu sûr',
        lines: ['En voyage ? Laissez-les dans votre chambre d’hôtel', 'Ainsi, un vol ne vous laisse pas sans rien'],
      },
      {
        picto: 'locate',
        title: 'Activez Localiser',
        lines: [
          'Vérifiez que vous connaissez le mot de passe de ce compte'
        ],
        guides: [
          {
            name: 'iPhone : Localiser',
            steps: [
              'Ouvrez Réglages',
              'Touchez votre nom',
              'Touchez Localiser',
              'Touchez Localiser mon iPhone',
              'Activez Localiser mon iPhone',
              'Activez le réseau Localiser',
              'Activez Envoyer la dernière position'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/102648'
            }
          },
          {
            name: 'Android : Localiser',
            steps: [
              'Ouvrez Paramètres',
              'Appuyez sur Localisation',
              'Activez Utiliser la localisation',
              'Revenez à Paramètres',
              'Appuyez sur Sécurité',
              'Appuyez sur Localiser',
              'Activez Autoriser la localisation de l’appareil',
              'Revenez à Paramètres',
              'Appuyez sur Google',
              'Appuyez sur Tous les services',
              'Appuyez sur Localiser',
              'Appuyez sur Localiser vos appareils hors connexion',
              'Choisissez Avec le réseau partout'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/android/answer/3265955?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'lock',
        title: 'Activez la protection contre le vol',
        lines: [],
        guides: [
          {
            name: 'iPhone : Protection en cas de vol de l’appareil',
            notes: [
              'Elle demande votre visage ou votre empreinte avant les changements importants',
              'Il vous faut l’identification à deux facteurs, Localiser, un code, Face ID ou Touch ID, et Lieux importants'
            ],
            steps: [
              'Ouvrez Réglages',
              'Touchez Face ID et code',
              'Saisissez votre code',
              'Touchez Protection en cas de vol de l’appareil',
              'Activez Protection en cas de vol de l’appareil',
              'Sous Exiger un délai de sécurité, touchez Toujours'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/120340'
            }
          },
          {
            name: 'Android : Protection contre le vol',
            notes: [
              'Elle verrouille l’écran si quelqu’un arrache le téléphone, si le téléphone est hors connexion ou après des erreurs',
              'Il vous faut un verrouillage de l’écran',
              'Une option est grisée ? Votre téléphone n’a pas ce verrouillage'
            ],
            steps: [
              'Ouvrez Paramètres',
              'Appuyez sur Google',
              'Appuyez sur Tous les services',
              'Appuyez sur Protection contre le vol',
              'Activez Verrouillage en cas de détection de vol',
              'Activez Verrouillage de l’appareil hors connexion',
              'Activez Verrouillage en cas d’échec de l’authentification',
              'Appuyez sur Verrouillage à distance',
              'Activez Verrouillage à distance'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/android/answer/15146908?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'printer',
        title: 'Imprimez vos codes de secours',
        lines: [
          'Commencez par votre e-mail',
          'Un autre fournisseur d’e-mail ? Regardez dans les réglages de sécurité de ce compte',
          'Gardez le papier chez vous, pas dans votre portefeuille ni dans la coque du téléphone',
          'Compte Apple : utilisez plutôt un contact de récupération. Voir Ajoutez un deuxième moyen de connexion'
        ],
        guides: [
          {
            name: 'Compte Google',
            notes: [
              'Activez d’abord la validation en deux étapes'
            ],
            steps: [
              'Ouvrez votre compte Google',
              'Appuyez sur Sécurité et connexion',
              'Appuyez sur Validation en deux étapes',
              'Sous Codes de secours, appuyez sur Continuer',
              'Appuyez sur Générez des codes de secours',
              'Appuyez sur Imprimer'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/accounts/answer/1187538?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'password',
        title: 'Ajoutez un deuxième moyen de connexion',
        lines: [
          'Une clé de sécurité ou une clé d’accès sur un ordinateur portable fonctionne aussi'
        ],
        guides: [
          {
            name: 'Compte Apple : contact de récupération',
            notes: [
              'Choisissez une personne de confiance qui a un appareil Apple',
              'iMessage doit être activé chez vous deux'
            ],
            steps: [
              'Ouvrez Réglages',
              'Touchez votre nom',
              'Touchez Connexion et sécurité',
              'Touchez Contacts de récupération',
              'Touchez Ajouter un contact de récupération',
              'Suivez les étapes à l’écran'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/102641'
            }
          },
          {
            name: 'Compte Google : e-mail et téléphone de récupération',
            notes: [
              'Utilisez une adresse e-mail différente de celle de votre compte',
              'Ajoutez un deuxième numéro de téléphone qui n’est pas dans ce téléphone, par exemple celui d’un proche'
            ],
            steps: [
              'Ouvrez votre compte Google',
              'Appuyez sur Sécurité et connexion',
              'Appuyez sur Adresse e-mail de récupération',
              'Suivez les étapes à l’écran',
              'Revenez à Sécurité et connexion',
              'Appuyez sur Numéro de téléphone de récupération',
              'Suivez les étapes à l’écran'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/accounts/answer/183723?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'authenticator',
        title: 'Ne gardez pas vos codes de connexion seulement sur le téléphone',
        lines: [
          'Une autre appli de codes ? Activez la sauvegarde dans ses réglages',
          'Ou configurez-la aussi sur un deuxième appareil'
        ],
        guides: [
          {
            name: 'Google Authenticator',
            steps: [
              'Ouvrez Google Authenticator',
              'Connectez-vous à votre compte Google dans l’appli',
              'On vous demande d’enregistrer vos codes dans le compte ? Appuyez sur Autoriser'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/accounts/answer/1066447?hl=fr&co=GENIE.Platform%3DAndroid'
            }
          }
        ]
      },
      {
        picto: 'check',
        title: 'Testez',
        lines: ['Connectez-vous à votre e-mail sur un ordinateur, sans votre téléphone', 'Si ça ne marche pas, corrigez-le maintenant, pas après un vol'],
      },
      {
        picto: 'repeat',
        title: 'Téléphone déjà volé une fois ?',
        lines: [
          'Quand vous avez de nouveau accès à vos comptes, créez de nouveaux codes de secours',
          'Les anciens ont pu être volés avec le téléphone'
        ],
        guides: [
          {
            name: 'Compte Google',
            steps: [
              'Ouvrez votre compte Google',
              'Appuyez sur Sécurité et connexion',
              'Appuyez sur Validation en deux étapes',
              'Sous Codes de secours, appuyez sur Continuer',
              'Appuyez sur Actualiser',
              'Imprimez les nouveaux codes'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/accounts/answer/1187538?hl=fr'
            }
          }
        ]
      },
      {
        picto: 'backup',
        title: 'Sauvegardez votre téléphone',
        lines: [
          'Les photos et les contacts sont ce qui manque le plus'
        ],
        guides: [
          {
            name: 'iPhone',
            steps: [
              'Ouvrez Réglages',
              'Touchez votre nom',
              'Touchez iCloud',
              'Touchez Sauvegarde iCloud',
              'Activez Sauvegarder cet iPhone',
              'Touchez Sauvegarder maintenant'
            ],
            doc: {
              label: 'Guide Apple',
              href: 'https://support.apple.com/fr-fr/108366'
            }
          },
          {
            name: 'Android',
            steps: [
              'Ouvrez Paramètres',
              'Appuyez sur Google',
              'Appuyez sur Tous les services',
              'Appuyez sur Sauvegarde',
              'Activez Sauvegarde',
              'Appuyez sur Sauvegarder maintenant'
            ],
            doc: {
              label: 'Guide Google',
              href: 'https://support.google.com/android/answer/2819582?hl=fr'
            }
          }
        ]
      },
    ],
  },

  card: {
    title: 'Carte de secours',
    description: 'Imprimez une carte avec votre IMEI et les numéros d’urgence, à garder loin de votre téléphone',
    lead: 'Votre IMEI et les numéros à appeler, sur papier. Gardez-la loin de votre téléphone',
    imei: 'IMEI',
    imeiHint: 'Tapez *#06# dans l’appli Téléphone. Le numéro s’affiche',
    imei2: 'Deuxième IMEI, si le téléphone en affiche deux',
    numbers: 'Numéros d’urgence',
    numbersHint: 'Pour votre opérateur et votre banque, utilisez leurs lignes « téléphone perdu » et « carte perdue ». Ajoutez aussi le numéro à appeler depuis l’étranger',
    nameLabel: 'Nom',
    numberLabel: 'Numéro',
    preview: 'Votre carte',
    previewHint: 'Elle s’imprime deux fois : une pour votre sac ou votre portefeuille, une pour chez vous',
    print: 'Imprimer la carte',
  },

  sources: {
    title: 'Sources',
    description: 'Guides officiels par pays en cas de vol de téléphone : gouvernement, police, régulateurs, associations de consommateurs, opérateurs et fabricants de téléphones',
    lead: 'Les conseils officiels de chaque pays. Les règles changent d’un pays à l’autre. Certains guides existent seulement dans la langue du pays',
    worldwide: 'Monde entier',
    pdf: 'PDF',
    categories: {
      Government: 'Gouvernement',
      Regulator: 'Régulateur',
      Police: 'Police',
      'Cyber agency': 'Agence de cybersécurité',
      'Consumer org': 'Association de consommateurs',
      'Security nonprofit': 'Association',
      Telco: 'Opérateur',
      Manufacturer: 'Fabricant de téléphones',
      'Tech platform': 'Plateforme tech',
      'Finance industry': 'Banque',
      'Industry body': 'Organisation professionnelle',
    },
  },

  advocacy: {
    title: 'Plaidoyer',
    description: 'Gardez la checklist sur papier pour les personnes qui viennent de se faire voler leur téléphone',
    policeTitle: 'La police devrait aider les victimes à bloquer leurs comptes',
    police: [
      'Quand mon téléphone a été volé, le policier m’a dit de bloquer mon compte bancaire par e-mail',
      'Le travail de la police n’est pas seulement d’attraper les criminels et de dire aux victimes « on ne peut rien faire ». Elle devrait aider les gens à bloquer l’accès à leurs comptes et à appeler leur banque',
    ],
    printTitle: 'La checklist sur papier',
    print: [
      '⚠️ Une personne qui vient de se faire voler son téléphone ne peut pas chercher quoi faire. Elle n’a pas de téléphone, et souvent pas d’internet',
      'Police, hôtels, commerces : imprimez cette checklist. Gardez-la prête et donnez-la-leur',
      '⚠️ Prenez le vol au sérieux. Ce n’est pas juste un téléphone. Sa banque et ses comptes sont en danger',
    ],
    download: 'Télécharger la checklist (PDF)',
    writeTitle: 'Écrivez-nous',
    writeTo: 'Presse, opérateurs, fabricants de téléphones, toute personne qui veut qu’un téléphone volé ne vaille plus rien : écrivez à',
    /** The no-JS text of the address, spelled out. */
    address: 'advocacy arobase phone-theft-first-aid point org',
  },

  about: {
    title: 'À propos',
    description: 'Fait par quelqu’un dont le téléphone a été volé',
    story: [
      'On m’a volé mon téléphone. Je n’avais pas d’autre appareil, et les fonctions de sécurité comme la double authentification m’empêchaient d’accéder à mes comptes. Le temps que j’arrive à y revenir, les voleurs avaient fait des dégâts énormes. Ce site essaie de lister ce que j’aurais dû faire à l’avance pour limiter les dégâts, juste après le vol, et pour récupérer le plus possible',
      'Je ne suis pas une entreprise de sécurité ni une agence. Les informations de ce site ne prétendent pas être complètes',
    ],
    madeBy: 'Vibe-codé par',
    mistake: 'Vous avez trouvé une erreur ou une meilleure étape ?',
    contribute: 'Contribuer',
    press: 'Presse, opérateurs, fabricants de téléphones : voir',
  },

  privacy: {
    title: 'Confidentialité',
    description: 'Ce que ce site garde sur vous, et où',
    lines: [
      'Ce site est fait de simples fichiers. Je n’ai aucun serveur qui enregistre ce que vous faites ici',
      'Votre progression dans la checklist reste dans cet onglet du navigateur. Elle est supprimée quand vous fermez l’onglet, donc rien ne reste sur un téléphone ou un ordinateur emprunté',
      'Les polices sont servies par ce site. Je ne charge rien depuis d’autres entreprises',
      'L’entreprise qui héberge ces fichiers peut garder des journaux d’accès standard, comme pour tout site web',
    ],
  },

  notFound: {
    title: 'Page introuvable',
    lead: 'Téléphone volé ? Allez à la checklist',
    go: 'Aller à la checklist',
  },
};

export default fr;
