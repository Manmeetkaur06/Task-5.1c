// src/PostPage.js
import React, { useState } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostPage.css'; // Import CSS file

const PostPage = () => {
  const [postType, setPostType] = useState('');

  return (
    <Segment padded className="post-page">
      <Header as="h3" attached="top">
        New Post
      </Header>
      <Segment attached className="post-content">
        <PostTypeSelector postType={postType} setPostType={setPostType} />
        {postType === 'question' && <QuestionForm />}
        {postType === 'article' && <ArticleForm />}
      </Segment>
    </Segment>
  );
};

export default PostPage;
