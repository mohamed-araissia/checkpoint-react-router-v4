import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, { fakeAuth } from "./Login";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/admin">Admin area</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

//Home component
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
    </div>
  );
};

export default App;
