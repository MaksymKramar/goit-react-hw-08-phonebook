import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import AppBar from "./components/AppBar";
import { Switch } from "react-router-dom";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";
import Container from "./components/Container/Container";

import "./App.css";

const HomeView = lazy(() => import("./views/HomeViews"));
const RegisterView = lazy(() => import("./views/RegisterViews"));
const LoginView = lazy(() => import("./views/LoginViews"));
const PhonebookView = lazy(() => import("./views/PhonebookView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/phonebook">
              <PhonebookView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
