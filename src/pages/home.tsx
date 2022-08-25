import { useState } from "preact/hooks";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/icons/preact.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src="/icons/vite.svg" class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h2>Vite + Preact + Typescript + PWA + React-Router</h2>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <strong>✍ Home page:</strong> <code>src/pages/home.tsx</code>.
        </p>
        <p>
          <strong>🎨 Styles:</strong> <code>src/styles/global.css</code>.
        </p>
        <p>
          <strong>🌳 Router:</strong> <code>src/app.tsx</code>.
        </p>
        <p>
          <strong>🔎 SEO metatags:</strong> <code>index.html</code>.
        </p>
        <p>
          <strong>📖 Manifest:</strong> <code>manifest.json</code>.
        </p>
        <p>
          <strong>⭐ PWA config:</strong> <code>vite.config.ts</code>, <code>src/pwa/serviceWorker.tsx</code>.
        </p>
      </div>
      <a
        class="read-the-docs"
        href="https://github.com/pheralb/preact-pwa#readme"
        target="_blank"
      >
        📚 Documentation. 🚀 Created by pheralb.
      </a>
    </>
  );
};

export default Home;
