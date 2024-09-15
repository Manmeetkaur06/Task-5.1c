// src/ArticleForm.js
import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import './ArticleForm.css'; // Import CSS file

const ArticleForm = () => {
  return (
    <Form className="article-form">
      <Header as="h4" className="form-header">
        What do you want to ask or share
      </Header>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Enter a descriptive title" />
      </Form.Field>
      <Form.Field>
        <label>Abstract</label>
        <Form.TextArea placeholder="Enter a 1-paragraph abstract" />
      </Form.Field>
      <Form.Field>
        <label>Article Text</label>
        <Form.TextArea placeholder="Write your article text here..." />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" />
      </Form.Field>
      <Form.Button primary>Post</Form.Button>
    </Form>
  );
};

export default ArticleForm;
