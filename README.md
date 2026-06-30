# Portfolio

The application is a description of who I am and what I do. The applications contains details of the projects I have worked on.The portfolio is under development.

# Technology Stack

The portfolio is built with React 19 and bundled with Vite. It is a fully static site — the build output is plain HTML, CSS, and JS with no backend or database. The application also uses styled-components for CSS-in-JS (only a few components use styled-components).

Requires Node.js 20 or higher.

## Setup the application locally for development environment

1. `npm i` in the root folder installs all the dependencies required to run the project.
2. Start the Vite development server by running `npm run dev`. It runs on port 3000.

## Run the production build

1. `npm run build` — bundles the app into the `dist/` folder.
2. `npm run preview` — serves the contents of `dist/` locally so you can check the production build.

## Deployment

The site is deployed to [Vercel](https://vercel.com/) as a static site (Hobby/free tier).

Deployment is handled through Vercel's GitHub integration: import the repository on Vercel, and it auto-detects the Vite framework preset (build command `npm run build`, output directory `dist`). Configuration lives in `vercel.json`, which sets the framework, build settings, and an SPA rewrite so that all routes fall back to `index.html`.

Once connected, every push to the production branch triggers a deploy, and pull requests get their own preview URLs. No environment variables are required.

## Note:

The message section is not implemented. The UI component has been implemented but there is no interaction with the backend.
