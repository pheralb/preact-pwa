# ⚛️ Preact-PWA

> **pheralb/preact-pwa** is a boilerplate to build fast progressive web applications with Preact & Vitejs.

- 👀 [Demo - Cloudflare Pages (soon)](https://preact-pwa.pages.dev/).

## 🚀 Getting Started

You will need:

- [Nodejs +16](https://nodejs.org/es/).
- [Git](https://git-scm.com/downloads).

1. Run:

```bash
npx degit pheralb/preact-pwa my-preact-app
cd my-preact-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run your project:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

4. Access [127.0.0.1:5173](http://127.0.0.1:5173/) and happy coding 🥳.

[💡] Open **src/pages/home.tsx** and start editing your project.

## 📦 Installed

- ⚡️ [Vitejs](https://vitejs.dev/) - Next Generation Frontend Tooling.
- ⚛️ [Preact](https://preactjs.com/) - Fast 3kB alternative to React with the same modern API.
- 💙 [Typescript](https://github.com/microsoft/TypeScript) - A superset of JavaScript that compiles to clean JavaScript output.
- 🌳 [React-Router](https://reactrouter.com/en/main) - Declarative routing for React.
- 📲 [Vite-Plugin-PWA](https://vite-plugin-pwa.netlify.app/) - Zero-config and framework-agnostic PWA Plugin for Vite.
- 🔷 [Vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) - Support for TypeScript's path mapping in Vite.

## 📂 Directory structure

- Your fonts, images, icons... ->

```tree
├── public
│   └── icons
│   └── images
```

- Your Preact application... ->

```tree
├── src
│   └── pages       <- App pages.
│   └── pwa         <- Service Worker.
│   └── styles      <- CSS styles.
```

## 🌟 Deploy

> 🪧 Remember use Nodejs 16 to compile the project to production.

- Cloudflare Pages:

```
- Framework preset: Create React App
- Build command: npm run build
- Build output directory: dist
```

and create a environment variable with:

```
NODE_VERSION 16.16.0
```

- Netlify:

Create a file named `_redirects` in the root with the following
content:

```
/*    /index.html   200
```

- Vercel:

Create a file named `vercel.json` in the root with the following
content:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
