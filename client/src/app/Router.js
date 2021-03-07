import {BrowserRouter, Route, Switch} from "react-router-dom";
import {
    LandingScreen,
    LoginScreen,
    RegisterScreen,
    ForgotScreen
} from "./screens/account";
import {
    HomeScreen
} from './screens/panel'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path={"/"}
                    exact
                    render={LandingScreen}
                />
                <Route
                    path={"/account/login"}
                    exact
                    render={LoginScreen}
                />
                <Route
                    path={"/account/register"}
                    exact
                    render={RegisterScreen}
                />
                <Route
                    path={"/account/forgot"}
                    exact
                    render={ForgotScreen}
                />
                <Route
                    path={"/panel"}
                    exact
                    render={HomeScreen}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
