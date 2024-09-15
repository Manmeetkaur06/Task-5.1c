// src/PostTypeSelector.js
import React from 'react';
import { Form } from 'semantic-ui-react';
import './PostTypeSelector.css'; // Import CSS file

const PostTypeSelector = ({ postType, setPostType }) => {
  return (
    <Form className="post-type-selector">
      <Form.Group inline>
        <label>Select Post Type:</label>
        <Form.Radio
          label="Question"
          value="question"
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
        />
        <Form.Radio
          label="Article"
          value="article"
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
        />
      </Form.Group>
    </Form>
  );
};

export default PostTypeSelector;
