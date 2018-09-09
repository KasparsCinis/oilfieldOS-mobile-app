import LoginLayout from "./Login.layout";
import NormalLayout from "./Normal.layout";

const layoutRoutes = [
    { path: "/login", component: LoginLayout },
    { path: "/", component: NormalLayout },
];

export default layoutRoutes;