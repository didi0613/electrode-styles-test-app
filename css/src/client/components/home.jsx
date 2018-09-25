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
import "../styles/custom.css";

//

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          CSS3 Transition examples (on <kbd>:hover</kbd>)
        </h1>
        <div className="wrap">
          <div className="box">
            <h2>Text-shadow</h2>
          </div>
          <div className="box">
            <div className="one">
              <kbd>border-color, border-radius, background-color</kbd>
            </div>
          </div>
          <div className="box">
            <div className="two">
              <kbd>border-style, background-color</kbd>
            </div>
          </div>
          <div className="box">
            <div className="three">
              <kbd>outline-color, outline-offset</kbd>
            </div>
          </div>
          <div className="box">
            <div className="four">
              <kbd>width, height, box-shadow</kbd>
            </div>
          </div>
          <div className="box">
            <div className="six">
              <kbd>background-position</kbd>
            </div>
          </div>
          <div className="box">
            <div className="seven">
              <kbd>background-size</kbd>
            </div>
          </div>
        </div>
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
