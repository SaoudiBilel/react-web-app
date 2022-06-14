import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="m-3">
      <Counter title="Profile" value={1} image = "images/profile.png"/>
      <Counter title="Panda" value={1} image = "images/panda.png"/>
    </div>
  );
}

export default App;
