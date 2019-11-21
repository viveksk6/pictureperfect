import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends Component {
  handleSubmit = event => {
    const data = new FormData(event.target);
    console.log(data);
  };

  render = () => {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl type="text" placeholder="Search" />
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </Form>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Hello Vivek</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default Navigation;
