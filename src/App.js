import './App.css';
import TODOS from './component/TODOS';

function App() {
  return (
   <div className='container'>
    <h1 style={{color:'red'}}>TODO</h1>
    <h1 style={{color:'yellow'}}>LIST</h1>
    
     <TODOS></TODOS>
   </div>
  );
}

export default App;
