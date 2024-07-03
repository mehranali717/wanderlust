import { Home } from "../../pages";
import {
  ContactUsPageConfig,
  HotelsPageConfig,
  InspirationPageConfig,
  cruisesPageConfig,
  dashboardPageConfig,
  destinationsPageConfig,
  travelAdvisorPageConfig,
} from "../config/PageConfig";
import { generateRoutesFromConfigs } from "../fuseUtils/fuseUtils";

const routeConfig = [
  dashboardPageConfig,
  travelAdvisorPageConfig,
  destinationsPageConfig,
  HotelsPageConfig,
  cruisesPageConfig,
  InspirationPageConfig,
  ContactUsPageConfig,
];
const routes = [
  ...generateRoutesFromConfigs(routeConfig),
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
];
export default routes;
