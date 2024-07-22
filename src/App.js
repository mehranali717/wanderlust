import { Route } from "./contextapi/route";
import MainLayout from "./layouts/mainlayout/mainlayout";
import routes from "./utils/routes/routes";
const App = () => (
  <Route.Provider value={{ routes }}>
    <MainLayout />
  </Route.Provider>
);

export default App;
