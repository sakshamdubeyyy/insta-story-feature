// components/Stories.js
"use client";
import React, { useState } from 'react';
import StoriesData from "../StoriesData";
import { Story } from '../Story/Story';
import StoryViewer from '../StoriesViewer/StoriesViewer'

const Stories = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div className='flex space-x-2 overflow-x-scroll max-w-xl bg-white border border-gray-200 p-4 scroll-smooth scrollbar-hide'>
        {StoriesData.map((story, index) => (
          <div key={story.id} onClick={() => handleOpenViewer(index)}>
            <Story 
              img={story.avatar}
              username={story.first_name + story.last_name}
            />
          </div>
        ))}
      </div>
      {isViewerOpen && (
        <StoryViewer 
          stories={StoriesData} 
          currentIndex={currentIndex} 
          onClose={handleCloseViewer} 
        />
      )}
    </div>
  );
};

export default Stories;
