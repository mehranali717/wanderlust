import { Route } from "./contextapi/route"
import routes from "./utils/routes/routes"
const App = () => <Route.Provider value={{routes}}>
</Route.Provider>

export default App