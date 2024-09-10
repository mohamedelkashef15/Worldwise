import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of coutries</p>
      <Outlet />
      <Footer />
    </section>
  );
}

export default Sidebar;
