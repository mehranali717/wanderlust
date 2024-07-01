import Header from "../../sidebar/sidebar";
import RouteRenderer from "../../routeRenderer/routeRenderer";
import styles from "./mainlayout.module.css";
const MainLayout = () => (
  <div className={styles.wrapper}>
  <Header />
  <div className={styles.contentWrapper}>
  <RouteRenderer />
  </div>
  </div>
);
export default MainLayout