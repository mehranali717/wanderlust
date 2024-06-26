import { Route } from "./contextapi/route"
import routes from "./utils/routes/routes"
import { MainLayout } from "./views"
const App = () => <Route.Provider value={{routes}}>
   <MainLayout />
</Route.Provider>

export default App