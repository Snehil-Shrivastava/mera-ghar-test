import ContactModal from "@/modal/ContactModal";
import Navbar from "../components/navbar";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
    </div>
  );
};

export default Layout;
