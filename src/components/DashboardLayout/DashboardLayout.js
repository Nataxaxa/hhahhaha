import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <><Header />
      <Main>{children}</Main>
      <Footer /></>
  );
}
