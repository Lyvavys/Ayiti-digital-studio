import Image from "next/image";

const services = [
  {
    id: "service-sites",
    icone: "🌐",
    titre: "Sites web",
    description:
      "Un site professionnel pour être visible en ligne et recevoir des clients.",
    points: [
      "Restaurant, hôtel, école, boutique",
      "Adapté au téléphone",
      "Contact direct par WhatsApp",
    ],
    message: "Bonjour, je suis intéressé par la création d'un site web.",
  },
  {
    id: "service-ia",
    icone: "🤖",
    titre: "Outils IA",
    description:
      "Des outils intelligents qui font gagner du temps à votre entreprise.",
    points: [
      "Automatisation des tâches répétitives",
      "Analyse de vos données",
      "Petits outils sur mesure",
    ],
    message:
      "Bonjour, je suis intéressé par vos outils IA pour mon entreprise.",
  },
  {
    id: "service-gestion",
    icone: "📊",
    titre: "Gestion",
    description:
      "Un système simple pour suivre votre argent et votre activité.",
    points: [
      "Enregistrement des ventes et des dépenses",
      "Calcul du profit",
      "Rapport chaque semaine",
    ],
    message:
      "Bonjour, je suis intéressé par un système de gestion des ventes et des dépenses.",
  },
];

// Pour chaque projet terminé : collez son lien dans « lien ».
// Exemple : lien: "https://restaurant-lakay.vercel.app",
// Si « lien » est vide, la carte affiche « Bientôt disponible ».
const projets = [
  {
    titre: "Site de restaurant",
    description: "Menu, photos des plats, horaires et réservation par WhatsApp.",
    lien: "https://restaurant-lakay.vercel.app/",
  },
  {
    titre: "Site d'hôtel en Haïti",
    description: "Présentation des chambres, tarifs et contact direct pour réserver.",
    lien: "",
  },
  {
    titre: "Site d'école",
    description: "Présentation de l'école, programmes, inscriptions et actualités.",
    lien: "",
  },
  {
    titre: "Boutique de produits",
    description: "Catalogue de produits et commande simple par WhatsApp.",
    lien: "",
  },
  {
    titre: "Gestion ventes et dépenses",
    description: "Enregistrer les ventes, calculer le profit et recevoir un rapport chaque semaine.",
    lien: "",
  },
];

// Angles des petits traits autour de la photo (effet « soleil »)
const rayons = [-75, -50, -25, 0, 25, 50, 75];

// Lien WhatsApp : numéro avec indicatif pays, sans + ni espaces
const creerLienWhatsapp = (message: string) =>
  "https://wa.me/50938106967?text=" + encodeURIComponent(message);

const whatsappLien = creerLienWhatsapp(
  "Bonjour, je suis intéressé par vos services."
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* En-tête avec logo */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <a href="#accueil" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Logo Ayiti Digital Studio"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
              priority
            />
            <span className="hidden text-lg font-bold text-blue-900 sm:inline">
              Ayiti Digital Studio
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#accueil" className="text-blue-700">Accueil</a>
            <a href="#apropos" className="hover:text-blue-700">À propos</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#projets" className="hover:text-blue-700">Projets</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Contact
          </a>
        </div>

        {/* Menu pour téléphone */}
        <nav className="flex items-center justify-around border-t border-slate-100 px-2 py-2 text-sm font-semibold text-slate-700 md:hidden">
          <a href="#accueil" className="text-blue-700">Accueil</a>
          <a href="#apropos" className="hover:text-blue-700">À propos</a>
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#projets" className="hover:text-blue-700">Projets</a>
        </nav>
      </header>

      {/* Section d'accueil (bord incliné) */}
      <section id="accueil" className="px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-900 text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_90%)]">
          <div className="grid items-center gap-8 px-6 pb-24 pt-10 md:grid-cols-2 md:px-12 md:pb-28 md:pt-14">
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Je crée des sites web et des outils intelligents pour les
                petits commerces
              </h1>
              <p className="mt-4 max-w-xl text-blue-100">
                Restaurants, hôtels, écoles, boutiques : je vous aide à être
                visible en ligne et à gagner du temps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#service-sites"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                >
                  Sites web
                </a>
                <a
                  href="#service-ia"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                >
                  Outils IA
                </a>
                <a
                  href="#service-gestion"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                >
                  Gestion
                </a>
              </div>
            </div>

            {/* Photo ronde avec petits traits autour */}
            <div className="relative mx-auto h-72 w-72 shrink-0">
              {rayons.map((angle) => (
                <span
                  key={angle}
                  className="absolute left-1/2 top-1/2 -ml-3 -mt-0.5 h-1 w-6 rounded-full bg-amber-400"
                  style={{
                    transform: `rotate(${angle}deg) translateX(142px)`,
                  }}
                />
              ))}
              <Image
                src="/profil.jpeg"
                alt="Photo de profil"
                width={400}
                height={480}
                className="absolute left-1/2 top-1/2 h-60 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section
        id="apropos"
        className="mx-auto max-w-3xl scroll-mt-28 px-4 py-16 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          Développeur web et créateur d&apos;outils{" "}
          <span className="text-blue-700">IA</span> pour les{" "}
          <span className="text-amber-500">petits commerces</span> en{" "}
          <span className="text-blue-700">Haïti</span>
        </h2>
        <p className="mt-4 text-slate-600">
          Je suis développeur web en formation. J&apos;apprends à utiliser
          l&apos;intelligence artificielle pour créer des outils simples qui
          font gagner du temps aux entreprises.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold text-blue-900">
            Mes services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  {service.icone}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-blue-900">
                  {service.titre}
                </h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-amber-500">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={creerLienWhatsapp(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-blue-900 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Demander ce service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold text-blue-900">
            Mes projets
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projets.map((projet, index) => (
              <div
                key={projet.titre}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-blue-900">
                  {projet.titre}
                </h3>
                <p className="mt-2 text-slate-600">{projet.description}</p>
                {projet.lien ? (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    Voir le projet
                  </a>
                ) : (
                  <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    Bientôt disponible
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-3xl scroll-mt-28 px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-900">Contact</h2>
        <p className="mt-4 text-slate-600">
          Vous avez un projet ? Écrivez-moi.
        </p>
        <a
          href={whatsappLien}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-500"
        >
          Écrire sur WhatsApp
        </a>
        <p className="mt-4 text-slate-500">+509 38106967</p>
        <p className="mt-1 text-sm text-slate-500">
          E-mail :{" "}
          <a
            href="mailto:jeanlevygracia412@gmail.com"
            className="font-semibold text-blue-700 hover:underline"
          >
            jeanlevygracia412@gmail.com
          </a>
        </p>
      </section>

      {/* Pied de page */}
      <footer className="bg-blue-900 py-6 text-center text-sm text-blue-100">
        ©️ 2026 Ayiti Digital Studio. Tous droits réservés.
      </footer>
    </div>
  );
}