// components/StoryViewer.test.js
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import StoryViewer from './StoryViewer';

const stories = [
  { id: 1, image: 'https://example.com/story1.jpg' },
  { id: 2, image: 'https://example.com/story2.jpg' },
];

describe('StoryViewer', () => {
  jest.useFakeTimers();

  it('should display the first story initially', () => {
    render(<StoryViewer stories={stories} currentIndex={0} onClose={jest.fn()} />);
    expect(screen.getByAltText('story').src).toBe(stories[0].image);
  });

  it('should display the next story after 5 seconds', () => {
    render(<StoryViewer stories={stories} currentIndex={0} onClose={jest.fn()} />);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(screen.getByAltText('story').src).toBe(stories[1].image);
  });

  it('should close the viewer when the close button is clicked', () => {
    const onClose = jest.fn();
    render(<StoryViewer stories={stories} currentIndex={0} onClose={onClose} />);
    fireEvent.click(screen.getByText('X'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should manually switch to the next story when the next button is clicked', () => {
    render(<StoryViewer stories={stories} currentIndex={0} onClose={jest.fn()} />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByAltText('story').src).toBe(stories[1].image);
  });

  it('should manually switch to the previous story when the prev button is clicked', () => {
    render(<StoryViewer stories={stories} currentIndex={1} onClose={jest.fn()} />);
    fireEvent.click(screen.getByText('Prev'));
    expect(screen.getByAltText('story').src).toBe(stories[0].image);
  });
});
