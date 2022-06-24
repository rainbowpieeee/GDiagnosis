import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function GuestRoute({ children, ...rest }) {
    const auth = useAuth();
    const location = useLocation();
    const url = new URLSearchParams(location.search.slice(1));

    return auth.user ? <useHistory to={url.get("redirect") || "/"} /> : children;
}

export default GuestRoute;