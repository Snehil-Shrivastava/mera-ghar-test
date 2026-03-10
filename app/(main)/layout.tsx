import ContactModal from "@/modal/ContactModal";
import Navbar from "../components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <ContactModal />
    </div>
  );
};

export default Layout;
