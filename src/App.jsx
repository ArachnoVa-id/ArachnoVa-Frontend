import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/AllPage/NavBar/Navbar";
import Footer from "@/components/AllPage/Footer/Footer";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Templates from "@/pages/Templates";

// Admin pages are only for a few people; keep them out of the public bundle.
const AdminLayout = lazy(() => import("@/pages/admin/AdminLayout"));
const Login = lazy(() => import("@/pages/admin/Login"));
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));
const ProjectsAdmin = lazy(() => import("@/pages/admin/ProjectsAdmin"));
const PricingAdmin = lazy(() => import("@/pages/admin/PricingAdmin"));
const RedirectsAdmin = lazy(() => import("@/pages/admin/RedirectsAdmin"));
const TeamAdmin = lazy(() => import("@/pages/admin/TeamAdmin"));
const SettingsAdmin = lazy(() => import("@/pages/admin/SettingsAdmin"));


export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/admin/login" element={<Suspense fallback={null}><Login /></Suspense>} />
        <Route path="/admin" element={<Suspense fallback={null}><AdminLayout /></Suspense>}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="pricing" element={<PricingAdmin />} />
          <Route path="redirects" element={<RedirectsAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="settings" element={<SettingsAdmin />} />
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
              </Routes>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </HelmetProvider>
  );
}
