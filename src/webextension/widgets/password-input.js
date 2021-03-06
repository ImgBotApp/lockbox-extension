/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import ButtonStack from "./button-stack.js";

import styles from "./input.css";

export default class PasswordInput extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      monospace: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      monospace: true,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  showPassword(show) {
    if (show) {
      this.stackElement.selectedIndex = 1;
      this.setState({showPassword: true});
    } else {
      this.stackElement.selectedIndex = 0;
      this.setState({showPassword: false});
    }
  }

  focus() {
    this.inputElement.focus();
  }

  render() {
    const {className, monospace, ...props} = this.props;
    const finalClassName = `${styles.inputWrapper} ${className}`.trimRight();
    return (
      <div className={finalClassName}>
        <input className={monospace ? styles.monospace : ""}
               type={this.state.showPassword ? "text" : "password"}
               ref={(element) => this.inputElement = element} {...props}/>
        <ButtonStack ref={(element) => this.stackElement = element}>
          <Localized id="password-input-show">
            <button type="button"
                    onClick={() => this.showPassword(true)}>sHOw</button>
          </Localized>
          <Localized id="password-input-hide">
            <button type="button"
                    onClick={() => this.showPassword(false)}>hIDe</button>
          </Localized>
        </ButtonStack>
      </div>
    );
  }
}
