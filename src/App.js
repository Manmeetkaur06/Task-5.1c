/// src/App.js
import React from 'react';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import PostPage from './PostPage'; // Import the main PostPage component

// Main App component rendering the PostPage
function App() {
  return (
    <div className="App">
      <PostPage />
    </div>
  );
}

export default App;
