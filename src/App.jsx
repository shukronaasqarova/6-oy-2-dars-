import react from 'react'
import './App.css'
import Card from './assets/components/Card'
import data from './assets/data.json'
function App() {
console.log(data);
  return (
          <div className='countainer'>
        {
        data.length && data.map((element,index) => {
          return <Card key = {index} data = {element}></Card>
         
          })
        }
      </div>
      )
}

export default App