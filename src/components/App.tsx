import { Logo } from './Logo';
import { Demo } from './Demo'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>customer.io + React</h1>
        <p style={{width: '75%'}}>The following demonstrates a <code>&lt;TrackableButton /&gt;</code> React binding that makes incorporating <code>analytics.track()</code> into existing React UIs simple.</p>
        <Demo />
        <p>
          <a
            className="App-link"
            href="https://github.com/customerio/cdp-analytics-js/tree/main/packages/browser#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Package
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.customer.io/docs/cdp/sources/connections/javascript/js-source/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Data Pipeline Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
