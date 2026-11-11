import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-nuit-900 px-4 py-24 text-center text-white">
      <div className="max-w-md">
        <p className="font-display text-7xl font-extrabold text-or-400">404</p>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="mt-3 text-nuit-100">
          Le lien est peut-être incorrect ou la page a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-or-400 px-6 py-3 font-bold text-nuit-900 transition hover:bg-or-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
