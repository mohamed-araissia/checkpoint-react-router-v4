import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  function login() {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  }

  const { from } = props.location.state || {
    from: { pathname: "/" },
  };
  const { redirectToReferrer } = this.state;

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

/* A fake authentication function */

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default Login;
