// components/StoryViewer.js
import React, { useState, useEffect } from 'react';

const StoryViewer = ({ stories, currentIndex, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 20);
    }, 1000);

    const timeout = setTimeout(() => {
      if (index < stories.length - 1) {
        setIndex(index + 1);
        setProgress(0);
      } else {
        onClose();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index]);

  const handleNextStory = () => {
    if (index < stories.length - 1) {
      setIndex(index + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrevStory = () => {
    if (index > 0) {
      setIndex(index - 1);
      setProgress(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-300">
          <div className="bg-blue-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
        <img src={stories[index].image} className="w-full h-96 object-cover" alt="story" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white">X</button>
        <button onClick={handlePrevStory} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">Prev</button>
        <button onClick={handleNextStory} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">Next</button>
      </div>
    </div>
  );
};

export default StoryViewer;
