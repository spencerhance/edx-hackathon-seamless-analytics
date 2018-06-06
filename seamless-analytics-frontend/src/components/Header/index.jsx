import React from "react";
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
          <img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png" />
        </Menu.Item>

        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          Seamless Analytics
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
