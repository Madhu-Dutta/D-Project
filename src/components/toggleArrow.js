import React, { Component } from 'react';
import arrows from '../style/images/arrowRightLogo.JPG';

export default class ToggleArrow extends Component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };
    render() {
        return (
            <div>
                {this.state.on && this.props.children}
                <img src={arrows} onClick={this.toggle} alt="link to page" />
            </div>
        )
    }
}
