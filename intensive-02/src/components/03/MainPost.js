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
            <div className='greeting'>{'this.props.post'}</div>
        );
    }
}