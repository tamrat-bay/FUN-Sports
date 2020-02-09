import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap';


export default class DropdownDeleteUpdate extends Component {
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <i className="fa fa-ellipsis-h"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item  onClick={this.props.updateHandler} >Update</Dropdown.Item>
              <Dropdown.Item  onClick={this.props.deleteHandler} >Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )
    }
}
