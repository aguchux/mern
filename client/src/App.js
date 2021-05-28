import { useState, useEffect, useContext } from 'react'
import { storage } from './stores/Storage'
import axios from 'axios'

function App() {

  const { state } = useContext(storage);

  const initialState =  null
  const [data, setData] = useState(initialState);
  useEffect(() => {
    axios.get("/api/list")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, []);

  return (
    <div>
      <h1>{!data ? "Loading..." : "Loaded:"}</h1>
      <h1>{state.name}</h1>
      {
        data.map((api)=>{
          return(
            <div>{api.api}<hr/>{api.endpoint}</div>
          )
        })
      }
      </div>
  );

}

export default App;
