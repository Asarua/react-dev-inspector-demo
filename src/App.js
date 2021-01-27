import logo from './logo.svg';
import { Inspector } from 'react-dev-inspector'
import './App.css';

function App() {
  return (
    <Inspector
      keys={['shift', 'c']}
    >
      <div>
        123456
      </div>
      <div>
        div
      </div>
    </Inspector>
  );
}

export default App;
