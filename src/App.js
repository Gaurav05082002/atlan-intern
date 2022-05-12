import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Editor from './components/editor/Editor';
function App() {
  return (
    <div className="App">
    
      <Nav/>
      <Nav2/>
      <Editor/>
    </div>
  );
}

export default App;
