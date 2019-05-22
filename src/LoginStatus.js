import React, {Component} from 'react';
import {Button} from 'antd';


class LoginStatus extends Component {
    state = {
        isLogin: false
    };

    change = () => {
        this.setState( {
            isLogin: !this.state.isLogin
        });
    };
    render() {

        return (
            <div>
                {
                    this.state.isLogin ? <span><a>logged</a></span>
                    : <a href="#">login</a>
                }
                <Button type={"default"} onClick={this.change}>change</Button>

            </div>
        );
    }
}

export default LoginStatus;