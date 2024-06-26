import { Route } from "./contextapi/route"
import routes from "./utils/routes/routes"
import RouteRenderer from "./views/routeRenderer/routeRenderer"
const App = () => <Route.Provider value={{routes}}>
    <RouteRenderer />
</Route.Provider>

export default App