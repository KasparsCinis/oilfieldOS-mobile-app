import LoginLayout from "./login/Login.layout";
import NormalLayout from "./normal/Normal.layout";

const layoutRoutes = [
    { path: "/user/login", component: LoginLayout },
    { path: "/user/forgot-password", component: LoginLayout },
    { path: "/", component: NormalLayout },
];

export default layoutRoutes;