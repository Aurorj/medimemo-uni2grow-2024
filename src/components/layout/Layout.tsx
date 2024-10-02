import "./Layout.css";
import { Outlet, useLocation} from "react-router-dom";
import { AppNavigation } from "../appNavigation/AppNavigation";

let withoutFooter = [
  "/medications/details",
  "/profil"
];

export function Layout() {
  const location = useLocation();

  const showAppNav = !withoutFooter.includes(location.pathname);
  return (
    <div className="container">
      <div className="panel">
        <Outlet />
      </div>
      {showAppNav && <AppNavigation /> }
    </div>
  );
}
