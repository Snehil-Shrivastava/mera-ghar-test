import ContactModal from "@/modal/ContactModal";
import Navbar from "../components/navbar";
import { Suspense } from "react";
import Footer from "../components/footer";
import FloatingBanner from "../components/FloatingBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="font-raleway">
        {children}
        <FloatingBanner />
      </div>
      <Footer />
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
    </div>
  );
};

export default Layout;
