import React, { Component } from 'react';
import Comment from './Comment';

export default class SocialBar extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='socialBar'>
                <div>{`${this.props.retweets} Retweets`}</div>
                <div>{" | "}</div>
                <div>{`${this.props.likes} Likes`}</div>
                <div>{`Followers: ${this.props.followers}`}</div>
            </div>
        );
    }
}