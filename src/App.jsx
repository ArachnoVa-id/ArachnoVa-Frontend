import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/AllPage/NavBar/Navbar";
import Footer from "@/components/AllPage/Footer/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Templates from "@/pages/Templates";
import RedirectPage from "@/pages/RedirectPage";
import AdminLayout from "@/pages/admin/AdminLayout";
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ProjectsAdmin from "@/pages/admin/ProjectsAdmin";
import ServicesAdmin from "@/pages/admin/ServicesAdmin";
import PricingAdmin from "@/pages/admin/PricingAdmin";
import ProductsAdmin from "@/pages/admin/ProductsAdmin";
import HeroAdmin from "@/pages/admin/HeroAdmin";
import HomepageSectionsAdmin from "@/pages/admin/HomepageSectionsAdmin";
import AboutUsAdmin from "@/pages/admin/AboutUsAdmin";
import NavigationAdmin from "@/pages/admin/NavigationAdmin";
import RedirectsAdmin from "@/pages/admin/RedirectsAdmin";

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="pricing" element={<PricingAdmin />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="hero" element={<HeroAdmin />} />
          <Route path="homepage-sections" element={<HomepageSectionsAdmin />} />
          <Route path="about-us" element={<AboutUsAdmin />} />
          <Route path="navigation" element={<NavigationAdmin />} />
          <Route path="redirects" element={<RedirectsAdmin />} />
        </Route>
        <Route path="*" element={
          <>
            <Navbar />
            <div className="flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/academy" element={<RedirectPage />} />
                <Route path="/academy/booklet" element={<RedirectPage />} />
                <Route path="/academy/evaluation" element={<RedirectPage />} />
                <Route path="/client-evaluation" element={<RedirectPage />} />
                <Route path="/open-recruitment" element={<RedirectPage />} />
              </Routes>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </HelmetProvider>
  );
}
