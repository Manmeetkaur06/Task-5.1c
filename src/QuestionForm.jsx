// src/QuestionForm.js
import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import './QuestionForm.css'; // Import CSS file

const QuestionForm = () => {
  return (
    <Form className="question-form">
      <Header as="h4" className="form-header">
        What do you want to ask or share
      </Header>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Start your question with how, what, why, etc." />
      </Form.Field>
      <Form.Field>
        <label>Describe your problem</label>
        <Form.TextArea placeholder="Describe your problem in detail..." />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />
      </Form.Field>
      <Form.Button primary>Post</Form.Button>
    </Form>
  );
};

export default QuestionForm;
