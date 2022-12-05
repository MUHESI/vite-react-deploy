import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {getAPI} from './utils/Fetchdata'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

const getItems  = async ()=>{
  try {
 const {data} = await getAPI('traveler/all-items/ACTIVE',)
    if(data.data.success){
      return setItems(data.data.results.travelers)
    }
  
  } catch (error) {
    console.log('error', error) 
  }
}
  useEffect(() => {
 getItems();
  }, []);

  return (
    <div className="App">   
      <h1>Dates from DB </h1>
      {items.length > 0 && items?.map((i)=><p>
        {i.createdAt} 
      </p>)}
    </div>
  )
}

export default App
