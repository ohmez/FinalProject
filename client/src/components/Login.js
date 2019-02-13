import React from 'react';

const Login = (props) => {
  return (

        <div className="container">
            <form id="signup-form" onSubmit={props.handleLogin} > 
                <div>SummonerName: <input type="text" name="name" /></div>
                <div>Email: <input type="email" name="email" /></div>
                <div><input type="submit" value="login" /></div>
            </form>
        </div>
  );
};

export default Login;