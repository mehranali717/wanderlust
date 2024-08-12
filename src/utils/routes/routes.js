import { Home } from "../../pages";
import {
  ContactUsPageConfig,
  HotelsPageConfig,
  InspirationPageConfig,
  // LoginPageConfig,
  RegisterPageConfig,
  UserListPageConfig,
  WelcomePageConfig,
  cruisesPageConfig,
  dashboardPageConfig,
  destinationsPageConfig,
  travelAdvisorPageConfig,
} from "../config/RouteConfig";
import { generateRoutesFromConfigs } from "../fuseUtils/fuseUtils";

const routeConfig = [
  dashboardPageConfig,
  travelAdvisorPageConfig,
  destinationsPageConfig,
  HotelsPageConfig,
  cruisesPageConfig,
  InspirationPageConfig,
  ContactUsPageConfig,
  // LoginPageConfig,
  WelcomePageConfig,
  UserListPageConfig,
  RegisterPageConfig
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
