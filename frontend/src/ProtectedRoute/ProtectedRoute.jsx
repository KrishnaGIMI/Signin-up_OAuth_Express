import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
    const isLogged = useSelector((state) => state.authReducer.isLogged);
    const token = useSelector((state) => state.authReducer.token);

    let isExp = false;

    // Decode only if token exists
    if (token) {
        const decoded = jwtDecode(token);
        isExp = decoded.exp * 1000 < Date.now(); // expired?
        console.log("token check", { token, decoded, isExp });
    }

    // Redirect if any condition fails
    if (!isLogged || !token || isExp) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
