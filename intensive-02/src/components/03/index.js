import React, { Component } from 'react';
import MainPost from './MainPost';
import SocialBar from './SocialBar';
import UserBar from './UserBar';
import './index.css'
import Comment from './Comment';

const comments = [
    {
        username: "twitch",
        text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
    },
    {
        username: "michaelmarzetta",
        text: "Omg that match was crazy"
    },
    {
        username: "themexican_leprechaun",
        text: "What a setup"
    },
    {
        username: "dennis_futbol",
        text: "It that injustice"
    },
    {
        username: "dennis_futbol",
        text: "Is"
    }
];

export default class ComponentName extends Component {
    constructor() {
        super();
        this.state = {
            children: [
                { name: 'one', age: 'two' },
                { name: 'a', age: 'three' }]
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='twitterPost'>
                <UserBar
                    user={'Lambda School'}
                    userLink={'https://twitter.com/LambdaSchool'}
                    userLogo={'https://pbs.twimg.com/profile_images/845313033572270081/7mXto357_400x400.jpg'}
                    tag='@LambdaSchool'
                />
                <MainPost
                    postText={`Announcing Lambda School Trials - the easiest way to try out the perfect software engineer. 
                    1. Describe your role
                    2. We'll arrange back-to-back interviews with ideal students
                    3. Select and try them out at a flat rate. No payroll or paperwork`}
                    postLink={'https://t.co/XDRB2SNHrW'}
                    postLinkLabel={'lambdaschool.com/trials'}
                    postDate='2:41 PM - 15 Feb 2018'
                />
                <SocialBar retweets={'10'} likes={'27'} followers={'Google, Apple, Slack'}/>
                <div className='commentsSection'>
                    {comments.map(item => {
                        return <Comment username={item.username} text={item.text} />
                    })}
                </div>
            </div>
        );
    }
}