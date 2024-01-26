import React from 'react';
import './ApiPages.css'
const StoryDetails = ({ story }) => {
  return (
    <div className="story-details-card">
      <div className="story-content">
        <img src={story.urlToImage} alt={story.title} />
        <div className="text-content">
          
            <h1>{story.author}</h1>
          <h4>{story.title}</h4>
          <p>{story.content}</p>
          <p>{story.description}</p>
          <p>{story.publishedAt}</p>
        
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
