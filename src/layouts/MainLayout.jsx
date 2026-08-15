import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import BackToTopButton from "../components/layout/BackToTopButton.jsx";
import PageLoader from "../components/layout/PageLoader.jsx";
import { usePageLoader } from "../hooks/usePageLoader.js";

export default function MainLayout() {
  const loading = usePageLoader();

  return (
    <div className="flex min-h-screen flex-col bg-paper-50">
      <PageLoader visible={loading} />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
