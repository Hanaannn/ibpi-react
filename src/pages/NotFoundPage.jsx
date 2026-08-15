import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { SITE } from "../constants/site.js";

export default function NotFoundPage() {
  usePageTitle(`Halaman Tidak Ditemukan | ${SITE.name}`);

  return (
    <section className="flex min-h-[70vh] items-center bg-paper-50 py-24">
      <Container className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-amber-600">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-graphite-900 sm:text-4xl">
          Halaman ini belum kami bangun.
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-graphite-700/70">
          Tautan yang Anda tuju tidak tersedia atau sudah dipindahkan. Kembali ke beranda
          untuk melanjutkan.
        </p>
        <Button as={Link} to="/" icon={ArrowLeft} iconPosition="left" className="mt-8">
          Kembali ke Beranda
        </Button>
      </Container>
    </section>
  );
}
