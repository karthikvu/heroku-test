import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    async function api (){
      const { data } = await axios.get("/api/data")
      console.log(data)
      setState(data)
    }
    api()
  }, [])

  return (
    <div>
        <div>test app 123</div>
        <pre>{JSON.stringify(state, 4, 4)}</pre>
    </div>
  );
}

export default App;
