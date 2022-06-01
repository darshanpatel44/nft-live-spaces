// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';

function App() {
  return (
    <div className="App py-4">
      <div className="container-sm">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
