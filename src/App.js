import { useLocation } from "react-router-dom";
import { Route } from "./contextapi/route";
import MainLayout from "./layouts/mainlayout/mainlayout";
import routes from "./utils/routes/routes";
import AuthLayout from "./layouts/authLayout/authLayout";
const App = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  return <Route.Provider value={{ routes }}>
    {path == "login" || path == "" ? <AuthLayout /> : <MainLayout />}
  </Route.Provider>
}

export default App;
