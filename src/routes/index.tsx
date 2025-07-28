import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" index Component={Home} />
        </Routes>
    );
}

export default AppRoutes;