import ContactModal from "@/modal/ContactModal";
import Navbar from "../components/navbar";
import { Suspense } from "react";
import Footer from "../components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[7vh] font-raleway">{children}</div>
      <Footer />
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
    </div>
  );
};

export default Layout;
