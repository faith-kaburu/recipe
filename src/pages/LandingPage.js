import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
import { useNavigate} from 'react-router-dom';

function LandingPage() {
  const navigate= useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginClick = () => {
    // setIsChecked(!isChecked);
    navigate('/recipes')
  };

  const handleSignUpClick = () => {
    // setIsChecked(!isChecked);
    navigate('/landingpage')
  };

  const [redirectToRecipes, setRedirectToRecipes] = useState(false);

  function handleUser(e){
    setUsername(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function handleLoginBtn(e) {
    e.preventDefault();
    handleLogin();
  }

  function handleRegisterBtn(e) {
    e.preventDefault();
    handleRegister();
  }

  const handleSubmitOfLog = (e) => {
    e.preventDefault();
    const token = {
      email,
      password,
    };
    setRedirectToRecipes(true);
  };

  // const handleSubmitOfReg = (e) => {
  //   e.preventDefault();
  //   const token = {
  //     name: username,
  //     email,
  //     password,
  //   };
  //   setRedirectToRecipes(true);
  // };

    function handleSubmitOfReg(e) {
      e.preventDefault();
      const token = {
          name: username,
          email,
          password,
      };

      fetch('https://project-recipe.onrender.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(token),
      })
      .then(response => {
          if (response.ok) {
              navigate('/landingpage');
          } else {
              throw new Error('Registration failed');
          }
      })
      .catch(error => {
          console.error(error);
          // handle the error
      });
  };

  function handleRegister() {
    const registerToken = {
      name: username,
      email,
      password,
    };

    // Fetch from API
  //   fetch('https://project-recipe.onrender.com/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(registerToken),
  //   }).then(() => {
  //     setRedirectToRecipes(true);
  //   });
  }

  function handleLogin() {
    const loginToken = {
      email,
      password,
    };
    fetch('https://project-recipe.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginToken),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to login');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setRedirectToRecipes(true);
    })
    .catch((error) => {
      console.error(error);
      // handle the error
    });
  }



  return (
    <div>
       <div className="split-landing">
    {/* Left section */}
    <div className="left-landing">
        {/* content for left section */}
        <div className="landing">
          <div className="landing-content">
            <h3>Welcome to </h3>
            <h1>Tasty Trail</h1>
            <h2>The recipe app that makes every meal a success...</h2>
          </div>
        </div>
        <button className="landing-p-button">Create Account</button>

    </div>

    {/* Right section */}
    <div className="right-landing">
        {/* content for right section */}
        <div className="landing-container">
          {/* {showingonLog && <useNavigate to="/recipes"/>} */}
      <div className="login-container">
        <input id="item-1" type="radio" name="item" className="sign-in" defaultChecked />
        <label htmlFor="item-1" className="item">Sign In</label>
        <input id="item-2" type="radio" name="item" className="sign-up" />
        <label htmlFor="item-2" className="item">Sign Up</label>
        {/* Login Part */}
        <div className="login-form">
          <div className="sign-in-htm">

            <form onSubmit={handleSubmitOfLog}>
              <div className="group">
                <input
                  placeholder="Email"
                  type="text"
                  className="login-n-input"
                  value={email}
                  onChange={handleEmail}
                  />
              </div>
              <div className="group">
                <input
                    placeholder="Password"
                    id="pass"
                    type="password"
                    className="login-e-input"
                    data-type="password"
                    value={password}
                    onChange={handlePassword}
                    />
              </div>
              <div className="group">
                <input
                    type="submit"
                    className="button"
                    value="Sign In"
                    onClick={handleLoginClick}
                    />
              </div>

            </form>
            <div className="hr"></div>
            <div className="l-footer">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          {/* Sign Up Part */}
          <div className="sign-up-htm">
            <form onSubmit={handleSubmitOfReg}>
              <div className="group">
                <input
                  placeholder="Username"
                  id="user"
                  type="text"
                  className="input"
                  value={username}
                  onChange={handleUser}
                  />
              </div>
              <div className="group">
                <input
                  placeholder="Email address"
                  id="email"
                  type="text"
                  className="input"
                  value={email}
                  onChange={handleEmail} />
              </div>
              <div className="group">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  className="input"
                  data-type="password"
                  value={password}
                  onChange={handlePassword} />
              </div>
              <div className="group">
                <input
                  placeholder="Confirm password"
                  id="confirm-password"
                  type="password"
                  className="input"
                  data-type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword} />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={handleSignUpClick}
                  />
              </div>
            </form>
            <div className="hr"></div>
            <div className="footer">
              <label htmlFor="item-1" className="item-2">Already have an account?</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>
    </div>


  )};


export default LandingPage;
