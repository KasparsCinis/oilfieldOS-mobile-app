import LoginLayout from "./Login.layout";
import NormalLayout from "./Normal.layout";

const layoutRoutes = [
    { path: "/user/login", component: LoginLayout },
    { path: "/user/forgot-password", component: LoginLayout },
    { path: "/", component: NormalLayout },
];

export default layoutRoutes;