import Image from "next/image";

/* =========================================================
   CONFIGURATION — modifiez ici les informations du site
   ========================================================= */

// Numéro WhatsApp : indicatif pays, sans + ni espaces
const numeroWhatsapp = "50938106967";
const numeroAffiche = "+509 38106967";
const email = "jeanlevygracia412@gmail.com";

type Icone = "web" | "ia" | "gestion";

const services: {
  id: string;
  icone: Icone;
  titre: string;
  description: string;
  points: string[];
  message: string;
}[] = [
  {
    id: "service-sites",
    icone: "web",
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
    icone: "ia",
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
    icone: "gestion",
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
// Si « lien » est vide, la carte affiche « Bientôt disponible ».
// « demo: true » affiche « Projet de démonstration » (pas un vrai client).
// « couleur » : dégradé de la bannière de la carte.
const projets = [
  {
    titre: "Site de restaurant",
    description: "Menu, photos des plats, horaires et réservation par WhatsApp.",
    lien: "https://restaurant-lakay.vercel.app/",
    demo: false, // vrai client
    emoji: "🍽️",
    couleur: "from-red-900 via-red-800 to-amber-600",
  },
  {
    titre: "Site d'hôtel en Haïti",
    description: "Présentation des chambres, tarifs et contact direct pour réserver.",
    lien: "https://hotel-ayiti.vercel.app/",
    demo: true,
    emoji: "🏨",
    couleur: "from-teal-900 via-teal-700 to-amber-500",
  },
  {
    titre: "Site d'école",
    description: "Présentation de l'école, programmes, inscriptions et actualités.",
    lien: "",
    demo: true,
    emoji: "🎓",
    couleur: "from-emerald-900 via-emerald-700 to-lime-500",
  },
  {
    titre: "Boutique de produits",
    description: "Catalogue de produits et commande simple par WhatsApp.",
    lien: "",
    demo: true,
    emoji: "🛍️",
    couleur: "from-fuchsia-900 via-purple-700 to-orange-400",
  },
  {
    titre: "Gestion ventes et dépenses",
    description: "Enregistrer les ventes, calculer le profit et recevoir un rapport chaque semaine.",
    lien: "",
    demo: true,
    emoji: "📊",
    couleur: "from-nuit-950 via-nuit-800 to-nuit-700",
  },
];

// Étapes de travail (affichées dans « Comment je travaille »)
const etapes = [
  {
    titre: "On discute",
    texte:
      "Vous m'écrivez sur WhatsApp. Je pose quelques questions sur votre commerce et vos besoins.",
  },
  {
    titre: "Je crée votre site",
    texte:
      "Je prépare le site avec vos textes, vos photos et vos prix. Vous le voyez et donnez votre avis.",
  },
  {
    titre: "Mise en ligne",
    texte:
      "Le site est publié avec un lien à partager. Les informations restent faciles à mettre à jour.",
  },
];

const liensMenu = [
  { href: "#apropos", texte: "À propos" },
  { href: "#services", texte: "Services" },
  { href: "#projets", texte: "Projets" },
  { href: "#methode", texte: "Méthode" },
];

// Angles des petits traits autour de la photo (effet « soleil »)
const rayons = [-75, -50, -25, 0, 25, 50, 75];

/* ========================================================= */

const creerLienWhatsapp = (message: string) =>
  `https://wa.me/${numeroWhatsapp}?text=` + encodeURIComponent(message);

const whatsappLien = creerLienWhatsapp(
  "Bonjour, je suis intéressé par vos services."
);

/* ---------- Petites icônes SVG (légères, sans bibliothèque) ---------- */

function IconeService({ type }: { type: Icone }) {
  const commun = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (type === "web")
    return (
      <svg {...commun}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 21h8M12 18v3" />
      </svg>
    );
  if (type === "ia")
    return (
      <svg {...commun}>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z" />
      </svg>
    );
  return (
    <svg {...commun}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </svg>
  );
}

function IconeWhatsapp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function Fleche() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Titre de section réutilisable ---------- */

function TitreSection({
  surtitre,
  titre,
  texte,
  clair = false,
}: {
  surtitre: string;
  titre: string;
  texte?: string;
  clair?: boolean;
}) {
  return (
    <div className="apparaitre mx-auto max-w-2xl text-center">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          clair ? "text-or-400" : "text-or-700"
        }`}
      >
        {surtitre}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${
          clair ? "text-white" : "text-nuit-900"
        }`}
      >
        {titre}
      </h2>
      {texte && (
        <p className={`mt-4 ${clair ? "text-nuit-100" : "text-slate-600"}`}>
          {texte}
        </p>
      )}
    </div>
  );
}

/* ========================================================= */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Lien d'accès rapide (clavier / lecteur d'écran) */}
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-or-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-nuit-900"
      >
        Aller au contenu
      </a>

      {/* ================= En-tête ================= */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
          <a
            href="#accueil"
            className="flex items-center gap-3"
            aria-label="Ayiti Digital Studio – retour à l'accueil"
          >
            <Image
              src="/logo.jpeg"
              alt=""
              width={44}
              height={44}
              sizes="44px"
              className="h-11 w-11 rounded-full ring-2 ring-or-400/60"
              fetchPriority="high"
            />
            <span className="font-display text-base font-extrabold leading-tight text-nuit-900 sm:text-lg">
              Ayiti <span className="text-or-700">Digital</span> Studio
            </span>
          </a>

          <nav
            aria-label="Menu principal"
            className="hidden items-center gap-1 text-sm font-semibold text-slate-700 md:flex"
          >
            {liensMenu.map((lien) => (
              <a
                key={lien.href}
                href={lien.href}
                className="rounded-full px-4 py-2 transition-colors hover:bg-nuit-50 hover:text-nuit-900"
              >
                {lien.texte}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-nuit-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-nuit-800 hover:shadow-md"
          >
            Contact
          </a>
        </div>

        {/* Menu pour téléphone (défilement horizontal si besoin) */}
        <nav
          aria-label="Menu mobile"
          className="flex gap-1 overflow-x-auto border-t border-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 md:hidden"
        >
          {liensMenu.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className="shrink-0 rounded-full px-3 py-1.5 transition-colors hover:bg-nuit-50 hover:text-nuit-900"
            >
              {lien.texte}
            </a>
          ))}
        </nav>
      </header>

      <main id="contenu">
        {/* ================= Accueil (bord incliné) ================= */}
        <section id="accueil" className="px-3 pt-3 sm:px-6 sm:pt-5">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-nuit-900 text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_93%)] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_88%)]">
            {/* Décor : lueurs et points */}
            <div
              aria-hidden="true"
              className="motif-points absolute inset-0 opacity-60"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-nuit-700/50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-or-400/20 blur-3xl"
            />

            <div className="relative grid items-center gap-10 px-6 pb-24 pt-12 md:grid-cols-[1.15fr_1fr] md:px-12 md:pb-32 md:pt-16">
              <div>
                <p className="anim-monter inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-nuit-100 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-or-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-or-400" />
                  </span>
                  Basé en Haïti · Ouvert aux nouveaux projets
                </p>

                <h1 className="anim-monter delai-1 mt-6 text-[1.95rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
                  Des sites web et des outils intelligents pour les{" "}
                  <span className="relative whitespace-nowrap text-or-400">
                    petits commerces
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 h-3 w-full text-or-400/70"
                    >
                      <path
                        d="M2 9c40-6 120-8 196-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="anim-monter delai-2 mt-6 max-w-xl text-lg text-nuit-100">
                  Restaurants, hôtels, écoles, boutiques : je vous aide à être
                  visible en ligne, à recevoir des clients sur WhatsApp et à
                  gagner du temps.
                </p>

                <div className="anim-monter delai-3 mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-or-400 px-6 py-3.5 font-bold text-nuit-900 shadow-lg shadow-or-400/20 transition hover:-translate-y-0.5 hover:bg-or-300"
                  >
                    <IconeWhatsapp />
                    Discutons de votre projet
                  </a>
                  <a
                    href="#projets"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Voir mes projets
                    <Fleche />
                  </a>
                </div>

                {/* Accès rapide aux services */}
                <div className="anim-monter delai-4 mt-8 flex flex-wrap gap-2 text-sm">
                  {services.map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="rounded-full bg-white/10 px-4 py-1.5 font-medium text-white ring-1 ring-white/15 transition hover:bg-white hover:text-nuit-900"
                    >
                      {service.titre}
                    </a>
                  ))}
                </div>
              </div>

              {/* Photo ovale avec petits traits « soleil » */}
              <div className="anim-monter delai-2 relative mx-auto h-80 w-80 shrink-0">
                {rayons.map((angle, i) => (
                  <span
                    key={angle}
                    aria-hidden="true"
                    className="anim-rayon absolute left-1/2 top-1/2 -ml-3.5 -mt-0.5 h-1.5 w-7 rounded-full bg-or-400"
                    style={{
                      transform: `rotate(${angle}deg) translateX(150px)`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[17.5rem] w-[12.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-or-400 to-nuit-700 opacity-70 blur-md"
                />
                <div className="anim-flotter absolute left-1/2 top-1/2 h-[16.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/profil.jpeg"
                    alt="Photo de profil – Ayiti Digital Studio"
                    width={604}
                    height={1080}
                    sizes="200px"
                    className="h-full w-full rounded-full border-4 border-white object-cover object-[50%_20%] shadow-2xl"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Atouts ================= */}
        <section aria-label="Points forts" className="px-4">
          <ul className="mx-auto -mt-2 grid max-w-5xl gap-3 sm:grid-cols-3">
            {[
              ["📱", "Pensé d'abord pour le téléphone"],
              ["💬", "Contact direct par WhatsApp"],
              ["✏️", "Informations faciles à mettre à jour"],
            ].map(([icone, texte]) => (
              <li
                key={texte}
                className="apparaitre flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-nuit-900 shadow-sm"
              >
                <span aria-hidden="true" className="text-xl">
                  {icone}
                </span>
                {texte}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= À propos ================= */}
        <section id="apropos" className="scroll-mt-28 px-4 py-20 sm:py-24">
          <div className="apparaitre mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-or-700">
              À propos
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-800 sm:text-4xl">
              Développeur web et créateur d&apos;outils{" "}
              <span className="text-nuit-700">IA</span> pour les{" "}
              <span className="text-or-700">petits commerces</span> en{" "}
              <span className="text-nuit-700">Haïti</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Je suis développeur web en formation. J&apos;apprends à utiliser
              l&apos;intelligence artificielle pour créer des outils simples
              qui font gagner du temps aux entreprises.
            </p>
          </div>
        </section>

        {/* ================= Services ================= */}
        <section
          id="services"
          className="scroll-mt-28 bg-creme px-4 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <TitreSection
              surtitre="Services"
              titre="Mes services"
              texte="Trois façons d'aider votre commerce à avancer avec le numérique."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="apparaitre group relative flex scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-or-400/60 hover:shadow-xl"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-or-400 to-nuit-700 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nuit-900 text-or-400 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                    <IconeService type={service.icone} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-nuit-900">
                    {service.titre}
                  </h3>
                  <p className="mt-2 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-4 w-4 shrink-0 text-or-700"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8.1 14.3 3.8 10l1.4-1.4 2.9 2.9 6.7-6.7 1.4 1.4z" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <a
                      href={creerLienWhatsapp(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-nuit-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-nuit-800"
                    >
                      Demander ce service
                      <Fleche />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Projets ================= */}
        <section id="projets" className="scroll-mt-28 px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <TitreSection
              surtitre="Portfolio"
              titre="Mes projets"
              texte="Des sites réalisés pour des commerces, et d'autres en préparation pour montrer ce que je peux faire pour vous."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projets.map((projet, index) => (
                <article
                  key={projet.titre}
                  className="apparaitre group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative flex h-36 items-end justify-between bg-gradient-to-br p-5 ${projet.couleur}`}
                  >
                    <div
                      aria-hidden="true"
                      className="motif-points absolute inset-0"
                    />
                    <span className="relative font-display text-5xl font-extrabold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    >
                      {projet.emoji}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-nuit-900">
                      {projet.titre}
                    </h3>
                    <p className="mt-2 flex-1 text-slate-600">
                      {projet.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {projet.lien ? (
                        <a
                          href={projet.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Voir le projet : ${projet.titre} (nouvel onglet)`}
                          className="inline-flex items-center gap-2 rounded-full bg-nuit-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-nuit-800"
                        >
                          Voir le projet
                          <Fleche />
                        </a>
                      ) : (
                        <span className="inline-block rounded-full bg-or-100 px-3 py-1 text-xs font-semibold text-or-700">
                          Bientôt disponible
                        </span>
                      )}
                      {projet.lien &&
                        (projet.demo ? (
                          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            Projet de démonstration
                          </span>
                        ) : (
                          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                            Client
                          </span>
                        ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Méthode ================= */}
        <section
          id="methode"
          className="relative scroll-mt-28 overflow-hidden bg-nuit-900 px-4 py-20 sm:py-24"
        >
          <div aria-hidden="true" className="motif-points absolute inset-0" />
          <div className="relative mx-auto max-w-6xl">
            <TitreSection
              clair
              surtitre="Méthode"
              titre="Comment je travaille"
              texte="Un processus simple, étape par étape, avec vous du début à la fin."
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {etapes.map((etape, index) => (
                <li
                  key={etape.titre}
                  className="apparaitre rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-or-400/50 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-or-400 font-display text-lg font-extrabold text-nuit-900">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {etape.titre}
                  </h3>
                  <p className="mt-2 text-nuit-100">{etape.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= Contact ================= */}
        <section id="contact" className="scroll-mt-28 px-4 py-20 sm:py-24">
          <div className="apparaitre relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-or-100 via-white to-nuit-50 p-8 text-center ring-1 ring-slate-200 sm:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-or-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-nuit-900 sm:text-4xl">
              Vous avez un projet ? Écrivez-moi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Parlez-moi de votre commerce sur WhatsApp ou par e-mail. Je vous
              réponds dès que possible.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-8 py-3.5 font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800 sm:w-auto"
              >
                <IconeWhatsapp />
                Écrire sur WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-nuit-900/20 bg-white px-8 py-3.5 font-semibold text-nuit-900 transition hover:border-nuit-900 sm:w-auto"
              >
                Envoyer un e-mail
              </a>
            </div>
            <dl className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-slate-600 sm:flex-row sm:gap-8">
              <div>
                <dt className="sr-only">WhatsApp</dt>
                <dd>
                  WhatsApp :{" "}
                  <span className="font-semibold text-nuit-900">
                    {numeroAffiche}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">E-mail</dt>
                <dd className="break-all">
                  E-mail :{" "}
                  <a
                    href={`mailto:${email}`}
                    className="font-semibold text-nuit-700 hover:underline"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* ================= Pied de page ================= */}
      <footer className="bg-nuit-950 px-4 pb-24 pt-14 text-sm text-nuit-100 sm:pb-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt=""
                width={40}
                height={40}
                sizes="40px"
                className="h-10 w-10 rounded-full"
              />
              <span className="font-display text-base font-extrabold text-white">
                Ayiti Digital Studio
              </span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed">
              Sites web, outils IA et gestion pour les petits commerces en
              Haïti.
            </p>
          </div>
          <nav aria-label="Liens du pied de page">
            <p className="font-display font-bold text-white">Navigation</p>
            <ul className="mt-4 space-y-2">
              {liensMenu.map((lien) => (
                <li key={lien.href}>
                  <a href={lien.href} className="transition hover:text-or-400">
                    {lien.texte}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-display font-bold text-white">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={whatsappLien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-or-400"
                >
                  WhatsApp : {numeroAffiche}
                </a>
              </li>
              <li className="break-all">
                <a
                  href={`mailto:${email}`}
                  className="transition hover:text-or-400"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-nuit-100/80">
          © 2026 Ayiti Digital Studio. Tous droits réservés.
        </p>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a
        href={whatsappLien}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire sur WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-xl shadow-green-900/30 transition hover:scale-110 hover:bg-green-800"
      >
        <IconeWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}