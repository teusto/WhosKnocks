import { createRoot } from "react-dom/client";
import App from "./App";

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== "DEVELOPMENT") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
enableMocking().then(() => {
  root.render(<App />);
});
