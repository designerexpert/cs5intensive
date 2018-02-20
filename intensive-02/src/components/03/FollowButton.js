import React, { Component } from 'react';

export default class FollowButton extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }
    componentDidMount() {
    }

    changeClicked = () => {
        const oldClicked = this.state.clicked;
        this.setState({ clicked: !oldClicked });
    }

    render() {
        return (
            <div
                className={!this.state.clicked ? 'followButton' : 'followButton followButton--clicked'}
                onClick={this.changeClicked}
            >
                {!this.state.clicked ? 'Follow' : 'Following'}
            </div>
        );
    }
}