# Portfolio

The application is a description of who I am and what I do. The applications contains details of the projects I have worked on.The portfolio is under development.

# Technology Stack

The portfolio is built with React 19 and bundled with Vite. The production build is served by an Express 5 server. Since the content is very static, there's no database associated with it. The application also uses styled-components for CSS-in-JS (only a few components use styled-components).

Requires Node.js 20 or higher.

## Setup the application locally for development environment

1. `npm i` in the root folder installs all the dependencies required to run the project.
2. Start the Vite development server by running `npm run dev`. It runs on port 3000.

## Run the production build

To create and serve a production build:

1. `npm run build` — bundles the app into the `dist/` folder.
2. `npm run start` — starts the Express server, which serves the contents of `dist/` (defaults to port 3000, override with the `PORT` env var).

You can also preview the production build with Vite directly using `npm run preview`.

## Note:

The message section is not implemented. The UI component has been implemented but there is no interaction with the backend.
