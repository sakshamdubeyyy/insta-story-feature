// components/Stories.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Stories from './Stories';
import StoriesData from '../StoriesData';

jest.mock('../StoriesData', () => [
  { id: 1, first_name: 'John', last_name: 'Doe', avatar: 'https://example.com/avatar1.jpg', image: 'https://example.com/story1.jpg' },
  { id: 2, first_name: 'Jane', last_name: 'Doe', avatar: 'https://example.com/avatar2.jpg', image: 'https://example.com/story2.jpg' },
]);

describe('Stories', () => {
  it('should display the list of stories', () => {
    render(<Stories />);
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
    expect(screen.getByText('JohnDoe')).toBeInTheDocument();
    expect(screen.getByText('JaneDoe')).toBeInTheDocument();
  });

  it('should open the story viewer when a story is clicked', () => {
    render(<Stories />);
    fireEvent.click(screen.getAllByAltText('avatar')[0]);
    expect(screen.getByAltText('story')).toBeInTheDocument();
  });

  it('should display the correct story when a story is clicked', () => {
    render(<Stories />);
    fireEvent.click(screen.getAllByAltText('avatar')[0]);
    expect(screen.getByAltText('story').src).toBe(StoriesData[0].image);
  });
});
