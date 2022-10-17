import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
