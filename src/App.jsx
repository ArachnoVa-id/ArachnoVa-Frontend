import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/AllPage/NavBar/Navbar";
import Footer from "@/components/AllPage/Footer/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Templates from "@/pages/Templates";
import AdminLayout from "@/pages/admin/AdminLayout";
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ProjectsAdmin from "@/pages/admin/ProjectsAdmin";
import PricingAdmin from "@/pages/admin/PricingAdmin";
import RedirectsAdmin from "@/pages/admin/RedirectsAdmin";
import TeamAdmin from "@/pages/admin/TeamAdmin";
import SettingsAdmin from "@/pages/admin/SettingsAdmin";
import RedirectGuard from "@/pages/RedirectGuard";

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="pricing" element={<PricingAdmin />} />
          <Route path="redirects" element={<RedirectsAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="settings" element={<SettingsAdmin />} />
        </Route>
        <Route path="*" element={
          <RedirectGuard>
            <Navbar />
            <div className="flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/templates" element={<Templates />} />
              </Routes>
            </div>
            <Footer />
          </RedirectGuard>
        } />
      </Routes>
    </HelmetProvider>
  );
}
