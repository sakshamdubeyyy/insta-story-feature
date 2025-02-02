# insta-story-feature
This project implements an Instagram-like story feature using Next.js. The application allows users to view stories with a progress bar and navigate between them. A simple static HTTP API serves a hardcoded list of stories.

Vercel: https://insta-story-feature-khaki.vercel.app/

Table of Contents
Setup Instructions
Running the Application
Running the Tests
Design Choices
Assumptions
API Specification
Setup Instructions

Prerequisites
Node.js (version 14 or above)
npm (version 6 or above)
Installation
Clone the repository:

git clone https://github.com/your-username/insta-story-feature.git
cd insta-story-feature


Install dependencies:

npm install


Running the Application
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:3000.

Backend API
The application includes a simple static HTTP API to serve story data. The API endpoint is /api/stories.

Running the Tests
Run the tests using Jest:

npm test

This will execute all the test cases written for the components.

Design Choices
Performance
Client-Side Rendering (CSR): Given the dynamic nature of the stories and the need for smooth transitions and user interactions, CSR is used to provide a responsive and fast user experience.
State Management: React's useState and useEffect hooks manage the state of the current story and progress bar, ensuring efficient re-renders and updates.
Scalability
Component-Based Architecture: The application is divided into reusable components (Stories, Story, StoryViewer), making it easy to extend and maintain.
Static API Data: While the current implementation uses hardcoded data, it can easily be replaced with dynamic data fetching from a database or external API.
Assumptions
The stories are served from a static endpoint and do not require database interaction.
The transition time between stories is set to 5 seconds.
Basic styling is applied using Tailwind CSS for simplicity.
The application is optimized for desktop viewports.
API Specification
Endpoint: /api/stories
Returns a hardcoded list of stories in JSON format.

Response

[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "avatar": "https://example.com/avatar1.jpg",
    "image": "https://example.com/story1.jpg"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Doe",
    "avatar": "https://example.com/avatar2.jpg",
    "image": "https://example.com/story2.jpg"
  }
]


Directory Structure
insta-story-feature/
├── components/
│   ├── Stories.js
│   ├── Stories.test.js
│   ├── Story.js
│   ├── StoryViewer.js
│   ├── StoryViewer.test.js
│   └── StoriesData.js
├── pages/
│   ├── api/
│   │   └── stories.js
│   ├── _app.js
│   └── index.js
├── public/
│   ├── avatars/
│   └── stories/
├── .gitignore
├── README.md
├── jest.config.js
├── package.json
└── tailwind.config.js
