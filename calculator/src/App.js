
import './App.css';

function App() {

  return (
    <div className="App">
      <button className = "AC">AC</button>
      <button className = "op" style = {
        {
          position: "absolute",
          top : "90px",
          left : "178px"
        }
      }>/</button>
      <button className = "op" style = {{
        position : "absolute",
        top : "90px",
        left : "262px"
      }}>X</button>
      <button className = "op" style = {{
        position: "absolute",
        top : "163px",
        left : "262px"
      }}>-</button>
      <button className = "op" style = {{
        position : "absolute",
        top : "236px",
        left : "262px"
      }}>+</button>
      <button className = "eq">=</button>
    </div>
  );
}

export default App;
