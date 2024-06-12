import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { AnalyticsProvider } from './lib/AnalyticsContext';

const rootEl = document.getElementById('root')
if(rootEl){
  const root = ReactDOM.createRoot(rootEl)

  root.render(
    <React.StrictMode>
      <AnalyticsProvider apiKey={'1fb796f0d949236a4a1f'}>
        <App />
      </AnalyticsProvider>
    </React.StrictMode>
  );
}