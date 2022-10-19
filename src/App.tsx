import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState("")
  const [list, setList ] = useState(["Diego", "Rodz", "Mayk"]);
  
  function addToList(){
    setList(state => [...state, newItem]);
  }
  return (
    <div >
      <input placeholder="Adicione novo item" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" />
      <h1 className="test">Hello world</h1>
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
