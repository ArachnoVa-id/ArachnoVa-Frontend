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
import PricingAdmin from "@/pages/admin/PricingAdmin";
import RedirectsAdmin from "@/pages/admin/RedirectsAdmin";
import TeamAdmin from "@/pages/admin/TeamAdmin";

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
