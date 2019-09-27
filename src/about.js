import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import Page from "./page";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";

export default class About extends Component {
  render() {
    return (
      <Page title="ABOUT" backgroundColor="#3c78d8">
        <p style={styles.contents}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed
          felis eget velit. Rhoncus mattis rhoncus urna neque. Ac turpis egestas
          maecenas pharetra convallis posuere morbi leo. Amet volutpat consequat
          mauris nunc congue nisi vitae suscipit tellus. Amet commodo nulla
          facilisi nullam vehicula ipsum a arcu. Pulvinar neque laoreet
          suspendisse interdum consectetur libero id. Tempor nec feugiat nisl
          pretium. Aliquet bibendum enim facilisis gravida neque convallis a
          cras. Nibh cras pulvinar mattis nunc. Eget dolor morbi non arcu risus
          quis. Luctus venenatis lectus magna fringilla urna. A iaculis at erat
          pellentesque adipiscing commodo elit at. Varius sit amet mattis
          vulputate enim nulla aliquet porttitor. Vel pharetra vel turpis nunc
          eget lorem. Habitant morbi tristique senectus et netus et malesuada
          fames. Dictumst quisque sagittis purus sit. Nunc lobortis mattis
          aliquam faucibus. Pellentesque habitant morbi tristique senectus et.
          Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.
        </p>
      </Page>
    );
  }
}

const styles = {
  contents: {
    fontSize: "25px"
  }
};
