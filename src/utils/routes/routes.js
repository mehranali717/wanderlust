import { Home } from "../../pages";
import dashboardPageConfig from "../config/dashboardPageConfig";
import { generateRoutesFromConfigs } from "../fuseUtils/fuseUtils";

const routeConfig = [
    dashboardPageConfig
]
const routes = [
    ...generateRoutesFromConfigs(routeConfig),
    {
        path:'/',
        exact:true,
        component:()=><Home />,
    }
]
export default routes