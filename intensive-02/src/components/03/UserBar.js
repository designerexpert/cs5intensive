import React, { Component } from 'react';
import FollowButton from './FollowButton';

export default class UserBar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='userBar'>
                <img src={this.props.userLogo} className='userLogo' />
                <div className='userNameSection'>
                    <a href={this.props.userLink}>{this.props.user}</a>
                    {this.props.tag}
                </div>
                <FollowButton />
            </div>
        );
    }
}