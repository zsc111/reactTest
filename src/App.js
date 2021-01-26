
import './App.css';
import { Route, Redirect, BrowserRouter,Switch } from "react-router-dom";
import One from './components/one'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <One />
        </>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
