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
            <div className='comment'>
                <div>{`Username: ${this.props.username}`}</div>
                <div>{`Comment: ${this.props.text}`}</div>
            </div>
        );
    }
}