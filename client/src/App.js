import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <Main/>
        </div>
    </div>
  );
}

export default App;
