import React from 'react';
import PostCreate from './PostCreate'
import PostList from './PostList'
export default () => {
    return <div>
        <div className="container">
            <h2>Create Post</h2>
            <PostCreate/>
            <hr/>
            <h1>Posts</h1>
            <PostList/>
        </div>
        
        </div>
};