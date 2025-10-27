## Microfrontend Platform (MFP)

A modular React-based microfrontend architecture designed to scale large web applications across independent deployable units. Each part of the system—marketing, dashboard, and authentication—is isolated yet integrated through Webpack Module Federation.
This repository demonstrates a practical, production-ready approach to microfrontends.

### Description

The MFP project illustrates how to build and orchestrate multiple React microfrontends into a single cohesive experience. Each sub-application can be developed, deployed, and versioned independently, allowing teams to iterate without affecting others.

The root container manages global routing and lazy loading of federated modules. It uses shared dependencies, custom Webpack configuration, and federated React components to deliver a seamless UX.

Key apps include:

- container: orchestrates and routes between microfrontends
- marketing: handles public pages (landing, pricing)
- dashboard: user-protected section
- auth: authentication flow with sign-in and sign-up

Interesting Techniques

- Webpack Module Federation: dynamically loads remote React components at runtime without rebuilding.

- React.lazy and Suspense: implements on-demand loading for remote modules, improving startup performance.

- Custom Webpack configuration: in config/webpack.\*.js, the project fine-tunes builds for both local development and production.

- Scoped shared dependencies: ensures consistent React versions across microfrontends to avoid runtime conflicts.

- Intersection Observer API : used for lazy-loading visual sections and analytics triggers (like in src/components/ of one or more subprojects (e.g., marketing or dashboard) where elements are conditionally loaded or animated as they enter view).

- Containerized routing: centralizes navigation logic using React Router
  with microfrontends as route-based entries.

#### Notable Libraries and Technologies

- Webpack 5 Module Federation Plugin: enables runtime module sharing across independently deployed apps.

- History: for custom routing synchronization across microfrontends.

- Concurrently: runs multiple dev servers for local microfrontend debugging (ports 8080, 8081, 8082 and 8083).

- HtmlWebpackPlugin: injects script bundles dynamically into each host app.

### Project Structure

```bash
mfp-example/
├── container/
│   ├── config/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── bootstrap.js
│   │   └── index.js
│   ├── package.json
│   └── webpack configs
├── marketing/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── bootstrap.js
│   │   └── index.js
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── bootstrap.js
│   │   └── index.js
├── auth/
│   ├── src/
│   │   ├── components/
│   │   ├── Signin.js
│   │   └── Signup.js
└── README.md

```

#### Directory Highlights

- container/config: Webpack configurations (webpack.common.js, webpack.dev.js, webpack.prod.js) defining federation setups and optimizations.

- src/components: houses isolated UI components per microfrontend.

### How to run it

Go to the desired microfrontend, for example `container`:

```bash
cd packages/container
npm i
npm run start
```
