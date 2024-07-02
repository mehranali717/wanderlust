import { Home } from "../../pages";
import dashboardPageConfig from "../config/dashboardPageConfig";
import travelAdvisorPageConfig from "../config/travelAdvisorPageConfig";
import { generateRoutesFromConfigs } from "../fuseUtils/fuseUtils";

const routeConfig = [
  dashboardPageConfig,
  travelAdvisorPageConfig];
const routes = [
  ...generateRoutesFromConfigs(routeConfig),
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
];
export default routes;
