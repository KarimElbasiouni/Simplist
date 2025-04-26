# Simplist

A minimalist, feature-rich task management application inspired by [Todoist](https://todoist.com/). This project was built with React.js as a learning journey to understand fundamental React concepts.

## Demo

- [View Live Demo](https://simplist.netlify.app)

## Technical Overview

### Core Technologies

- **Framework**: React 18.3.1 with JSX
- **Build Tool**: Vite 5.3.4
- **Routing**: React Router DOM 6.25.1
- **State Management**: React Hooks (useState, useEffect)
- **Date Handling**: date-fns 3.6.0
- **UI Components**: Custom components with react-icons 5.2.1
- **Unique IDs**: UUID 10.0.0

### Application Architecture

The application follows a component-based architecture with the following key features:

- **Local Storage Persistence**: All task and project data is saved to browser's localStorage
- **Responsive UI**: Custom CSS styling for a clean, adaptive interface
- **Client-side Routing**: Multiple views managed through React Router
- **Real-time Filtering**: Tasks filtered by date (today, this week) and projects

### Key Components

- **App.jsx**: Central state management for tasks and projects
- **Sidebar.jsx**: Navigation component with links to different views
- **TaskForm.jsx**: Reusable component for adding new tasks
- **ProjectForm.jsx**: Interface for creating new projects
- **Today.jsx, ThisWeek.jsx, Inbox.jsx**: Views for task organization
- **Project.jsx**: Project-specific task management

### Data Flow

- Tasks and projects are maintained in state at the App component level
- State is passed down to child components via props and React Router's context
- All data mutations happen through callback functions defined in App.jsx
- Changes to state trigger localStorage updates via useEffect hooks

### Features

- Create, read, and delete operations for tasks and projects
- Task categorization (Inbox, Today, This Week, Projects)
- Date-based task filtering using date-fns library
- Project-based task organization (up to 5 custom projects)
- Clean, minimalist UI inspired by Todoist

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to the project directory
cd simplist

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Development Notes

This project uses:
- ESLint for code quality
- Vite's Hot Module Replacement for fast development
- React Router for client-side navigation
- UUID for generating unique identifiers

## Credits

This project was created as a learning exercise and draws inspiration from Todoist's interface and functionality.

# Preview
- [Click here for a preview](https://simplist.netlify.app)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
