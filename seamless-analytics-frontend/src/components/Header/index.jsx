

import React from "react";
import logo from '../../seamless-analytics-logo.svg';
import { Menu, Header } from "semantic-ui-react";
// import "./Header.scss";

class HeaderComponent extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img height="32px" src={logo} alt="Logo" />
        </Menu.Item>

        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          @ edX
        </Menu.Item>

        {/* <Menu.Item
          name="testimonials"
          active={activeItem === "testimonials"}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default HeaderComponent;
