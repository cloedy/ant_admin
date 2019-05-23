import React, {Component} from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/login">
          login
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/logout">
          logout
        </a>
      </Menu.Item>
    </Menu>
);

class LoginStatus extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }

  componentDidMount() {
    this.setState({
      log: setInterval(() => console.info((new Date()).toLocaleDateString()), 1000)
    })
  }

  change = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  };


  render() {

    return (
        <div style={{float: 'right'}}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>

          <Button type={"default"} onClick={this.change}>change</Button>

        </div>
    );
  }
}

export default LoginStatus;