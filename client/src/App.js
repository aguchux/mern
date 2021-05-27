import { useState, useEffect, useContext } from 'react'
import { storage } from './stores/Storage'

function App() {

  const { state, dispatch } = useContext(storage);

  const initialState = null
  const [data, setData] = useState(initialState);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);

  return (
    <div>
      <h1>{!data ? "Loading..." : data}</h1>
      <h1>{state.name}</h1>
      <input type="text" onChange={e=>dispatch({type:'change_name',payload: e.currentTarget.value})}/>
      </div>
  );

}

export default App;
