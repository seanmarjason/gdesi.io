import './App.css';
import { Header } from '../components/Header/Header';
import { ComingSoon } from '../components/ComingSoon/ComingSoon';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />
        <ComingSoon />
      </div>
    </div>
  );
}

export default App;
