/*
 * This is a demo component the Eletrode app generator included
 * to show using Milligram CSS lib and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";
import { connect } from "react-redux";
import "../styles/index.styl";

//

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className={"login-box"}>
          <header className={"login-header"}>
            <svg className={"login-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
              <path d="M612 306.036C612 137.406 474.595 0 305.964 0S0 137.405 0 306.036c0 92.88 42.14 176.437 107.698 232.6.795.794 1.59 1.59 3.108 2.312C163.86 585.473 231.804 612 306.76 612c73.364 0 141.308-26.527 194.362-69.462 3.108-.795 5.493-3.108 7.01-5.493C571.453 480.088 612 398.122 612 306.035zm-583.883 0c0-153.018 124.9-277.92 277.92-277.92s277.918 124.902 277.918 277.92c0 74.955-29.635 142.826-78.063 192.845-7.806-36.718-31.225-99.168-103.072-139.717 16.408-20.31 25.732-46.838 25.732-74.955 0-67.15-54.644-121.793-121.793-121.793S184.965 217.06 184.965 284.208c0 28.117 10.12 53.85 25.732 74.955-72.497 40.55-95.916 103-102.928 139.718-49.223-49.222-79.653-117.89-79.653-192.844zM212.36 284.93c0-51.536 42.14-93.676 93.676-93.676s93.676 42.14 93.676 93.676-42.14 93.676-93.676 93.676-93.676-42.14-93.676-93.676zm-79.653 238.093c1.59-22.624 14.022-99.17 98.374-142.104 21.107 16.407 46.84 25.73 74.956 25.73 28.117 0 54.644-10.118 75.75-26.526 83.556 42.935 96.784 117.89 99.17 142.104-47.634 38.237-108.494 61.655-174.053 61.655-66.425.072-126.563-22.552-174.196-60.86z" />
            </svg>
            <h1>Log In</h1>
            <h2>
              Don't have an account?{" "}
              <a className={"login-sign"} href="#sign">
                Sign up
              </a>
            </h2>
          </header>
          <div className={"login-content"}>
            <input className={"login-mail"} type="mail" placeholder="E-mail Address" />
            <input className={"login-pass"} type="password" placeholder="Password" />
            <a className={"login-forgot"} href="#forgot">
              Forgot password?
            </a>
            <button className={"login-enter"}>Log in </button>
          </div>
        </section>

        <p>A test for stylus-relative-loader: a should be red while b should be green.</p>
         <p className={"a-color"}>a color</p>
         <p className={"b-color"}>b color</p>
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
