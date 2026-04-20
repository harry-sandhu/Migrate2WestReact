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
import PassportRenewal from "./pages/passportRenewal";
import Payment from "./pages/Payment";
import Application from "./pages/Application";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import VisaDetail from "./pages/VisaDetail";
import PaymentSuccess from "./pages/paymentSuccess";
import ThankYou from "./pages/thankYou";
import AirTicket from "./pages/airTicket";
import HotelConfirmation from "./pages/hotelConfirmation";
import TravelInsurance from "./pages/travelInsurance";
import PermanentResidence from "./pages/permanentResidence";
import FRRO from "./pages/frro";
import OCI from "./pages/oci";
import TourPackages from "./pages/tourPackages";
import JobAssistance from "./pages/jobAssistance";
import CareerCounseling from "./pages/careerCounseling";
import MeetAndAssist from "./pages/meetAndAssist";
import Coaching from "./pages/coaching";
import PassportLost from "./pages/passportLost";
import PassportDamaged from "./pages/passportDamaged";
import VisaSlot from "./pages/Visaslot";
import AirTicketApply from "./pages/AirTicketApply";
import HotelConfirmationApply from "./pages/HotelConfirmationApply";
import StudyAbroad from "./pages/StudyAbroad";
import TravelInsuranceApply from "./pages/TravelInsuranceApply ";
import PermanentResidenceApply from "./pages/PermanentResidenceApply";
import FRROApply from "./pages/FRROApply";
import TourPackagesApply from "./pages/TourPackagesApply";
import JobAssistanceApply from "./pages/JobAssistanceApply";
import CareerCounselingApply from "./pages/CareerCounselingApply";
import MeetAssistApply from "./pages/MeetAssistApply";
import CoachingApply from "./pages/CoachingApply";
import OCIApply from "./pages/OCIApply";
import StudyAbroadApply from "./pages/StudyAbroadApply";
import UserDashboard from "./pages/UserDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminSlots from "./pages/admin/AdminSlots";
import AdminContacts from "./pages/admin/AdminContacts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminServiceData from "./pages/admin/AdminServiceData";

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
        <Route path="/visa/:slug/slot" element={<VisaSlot />} />

        <Route path="/apply-visa" element={<ApplyVisa />} />

        {/*Air Ticket */}
        <Route path="/air-ticket" element={<AirTicket />} />
        <Route path="/air-tickets/apply/:slug" element={<AirTicketApply />} />

        {/*Hotel Conformation */}
        <Route path="/hotel-confirmation" element={<HotelConfirmation />} />
        <Route
          path="/hotel-confirmation/apply/:slug"
          element={<HotelConfirmationApply />}
        />
        
        {/*Travel Insurance */}
        <Route path="/travel-insurance" element={<TravelInsurance />} />
        <Route
          path="/travel-insurance/apply/:slug"
          element={<TravelInsuranceApply />}
        />
        {/*Travel Insurance */}
        <Route path="/permanent-residence" element={<PermanentResidence />} />
        <Route
  path="/permanent-residence/apply/:slug"
  element={<PermanentResidenceApply />}
/>


        {/*Travel Insurance */}
        <Route path="/frro" element={<FRRO />} />
        <Route path="/frro/apply/:slug" element={<FRROApply />} />
        {/*Travel Insurance */}
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/tour-packages/apply/:slug" element={<TourPackagesApply />} />
        {/*Travel Insurance */}
        <Route path="/job-assistance" element={<JobAssistance />} />
        <Route path="/job-assistance/apply/:slug" element={<JobAssistanceApply />} />
        {/*Travel Insurance */}
        <Route path="/career-counseling" element={<CareerCounseling />} />
         <Route
  path="/career-counseling/apply/:slug"
  element={<CareerCounselingApply />}
/>
        {/*Travel Insurance */}
        <Route path="/meet-and-assist" element={<MeetAndAssist />} />
         <Route path="/meet-assist/apply/:slug" element={<MeetAssistApply />} />
        {/*Travel Insurance */}
        <Route path="/coaching" element={<Coaching />} />
         <Route path="/coaching/apply/:slug" element={<CoachingApply />} />
        {/*Travel Insurance */}
        <Route path="/oci" element={<OCI />} />
        <Route path="/oci/apply/:slug" element={<OCIApply />} />

        <Route path="/study-abroad" element={<StudyAbroad />} />
         <Route path="/study-abroad/apply/:slug" element={<StudyAbroadApply />} />
        {/* Passport flow */}
        <Route path="/passport" element={<Passport />} />
        <Route path="/passport/fresh" element={<PassportFresh />} />
        <Route path="/passport/renewal" element={<PassportRenewal />} />
        <Route path="/passport/lost" element={<PassportLost />} />
        <Route path="/passport/damaged" element={<PassportDamaged />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/thank-you" element={<ThankYou/>} />

        {/* Application */}
        <Route path="/application" element={<Application />} />
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
         <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <UserDashboard />
    </ProtectedRoute>
  }
/>
        {/* Admin Dashboard */}
      <Route
  path="/admin"
  element={
    <ProtectedRoute adminOnly={true}>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<AdminDashboard />} />
  <Route path="blogs" element={<AdminBlogs />} />
  <Route path="testimonials" element={<AdminTestimonials />} />
  <Route path="payments" element={<AdminPayments />} />
  <Route path="slots" element={<AdminSlots />} />
  <Route path="contacts" element={<AdminContacts />} />
  <Route path="users" element={<AdminUsers />} />
  <Route path="services" element={<AdminServiceData />} />
</Route>

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
