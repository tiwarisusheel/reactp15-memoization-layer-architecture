import Home from "./components/Home"
import About from "./components/About"
import { useCallback, useMemo, useState } from "react";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Info from "./components/Info";

const App = () => {
  console.log("App rendering");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({name:"susheel", id:21});

  const calculations = useMemo(()=>{
    console.log("Calculations are running....")
    let sum = 0;

    for( let i =0; i < 1000000; i++ ){
         sum += i;
    }
    return sum;
  }, [users])

  //const greet =10; Primitive Data Type and below function is reference type
  const greet = useCallback(()=>{
    console.log("Hey good evening...")
  }, [])

  return (
    <div>
      <h1>Memoization</h1>
      <p>Count: {count}</p>
      <p>Name: {users.name} </p>
      <h2>My Calculation is: {calculations}</h2>
      <button onClick={()=>setUsers({...users, name:"susheel tiwari"})}>Change Name</button>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      {/* <Home /> */}
      {/* <About users={users}/>
      <Contact users={users} /> */}
      <Services greet={greet} />
      <Info greet={greet}/>
    </div>

  )
}

export default App