import React, { Component } from 'react';

export default class MainPost extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='mainPost'>
                <div>{this.props.postText}</div>
                <div><a href={this.props.postLink}>{this.props.postLinkLabel}</a></div>
                <div className='postDate'>{this.props.postDate}</div>
            </div>
        );
    }
}