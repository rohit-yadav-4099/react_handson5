
import './App.css';
import HOC from './Component/Hoc';
import HOCCall, { HOCBlue, HOCGreen } from './Component/HocCall';
import PureCompo from './Component/PureCompo';

function App() {
  return (
    <div className="App">
     <HOC></HOC>
     <HOCCall value = {HOC}></HOCCall>
     <HOCBlue value = {HOC}></HOCBlue>
     <HOCGreen value = {HOC}></HOCGreen>
     <PureCompo></PureCompo>
    </div>
  );
}

export default App;
