import './App.css';
import React ,{ useState }from 'react'


function App() {


const [Value1,setValue1]=useState(0)
const [Value2,setValue2]=useState(0)
const [Answer,setAnswer]=useState(0)


const handleAdd = (e) => {
    e.preventDefault();
    setAnswer(Number(Value1) + Number(Value2));

  
  // function handleAdd(value1,value2) {
  //    let answer = (value1 + value2)
  //     }
    }
  return (
   <>
   <form onSubmit={handleAdd}>
    <label>
      First Value
      <input type="number"  value={Value1} onChange={(e) => setValue1(e.target.value)} />
    </label>
    <label>
     Second value
      <input type="number"  value={Value2}  onChange={(e) => setValue2(e.target.value)} />
    </label>
   
    <button type="submit">Add Values</button>
  </form>

<p>The answer is {Answer} </p>
</>
  );
}

export default App;
