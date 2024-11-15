import { createRoot } from 'react-dom/client';
import App from './App';

// Start the MSW worker only in development
if (import.meta.env.MODE === 'DEVELOPMENT') {
    import('./mocks/browser').then(({ worker }) => worker.start());
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
