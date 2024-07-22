import styles from "./mainlayout.module.css";
import { Suspense } from "react";
import { Sidebar, Header, RouteRenderer } from "../../views";
const MainLayout = () => (
  <div className={styles.wrapper}>
    <Sidebar />
    <div className={styles.contentWrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className={styles.contentInner}>
          <RouteRenderer />
        </div>
      </Suspense>
    </div>
  </div>
);
export default MainLayout;
