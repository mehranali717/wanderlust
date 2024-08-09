import styles from "./mainlayout.module.css";
import { Suspense } from "react";
import { Sidebar, Header, RouteRenderer } from "../../views";
import RequireAuth from "../../features/auth/requireAuth";
import { IsLoading } from "../../components";
const MainLayout = () => (
  <div className={styles.wrapper}>
    <Sidebar />
    <div className={styles.contentWrapper}>
      <Suspense fallback={<IsLoading />} >
        <Header />
        <div className={styles.contentInner}>
          <RequireAuth>
            <RouteRenderer />
          </RequireAuth>
        </div>
      </Suspense>
    </div>
  </div>
);
export default MainLayout;
