import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy"

import Visa from "./pages/Visa";
import ApplyVisa from "./pages/ApplyVisa";

import Passport from "./pages/Passport";
import PassportFresh from "./pages/Passportfresh";
import Payment from "./pages/Payment";

import Application from "./pages/Application";

import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import VisaDetail from "./pages/VisaDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Visa */}
        <Route path="/visa" element={<Visa />} />
        <Route path="/visa/:slug" element={<VisaDetail />} />

        <Route path="/apply-visa" element={<ApplyVisa />} />

        {/* Passport flow */}
        <Route path="/passport" element={<Passport />} />
        <Route path="/passport/fresh" element={<PassportFresh />} />
        <Route path="/payment" element={<Payment />} />

        {/* Application */}
        <Route path="/application" element={<Application />} />
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>

        {/* Admin Auth */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
