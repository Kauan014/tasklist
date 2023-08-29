import { useEffect, useState } from "react";




function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({ id: '', texto: "" });

  function addTarefa() {
    if (tarefa.texto !== "")
      setListaTarefas([...listaTarefas, tarefa]);//ele impede q quebre o valor q foi colocado anteriormente e de continuidade na sua escrita */
  }

  function excluirTarefa(id) {
    const novaLista =  listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
    
  }
  useEffect(() => {
    setTarefa( {id:"" , texto:""} )
  }, [listaTarefas])
  return (
    <>
      <header>
        <h1>To-Do-list</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="digite sua tarefa"value={tarefa.texto} onChange={(e) => setTarefa( {id: Math.random(),texto:e.target.value} ) }></input>
        <button onClick={addTarefa}>adicionar</button>


      </div>
      <div>
        <ul>
          {listaTarefas.map((item, index) => (
            <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id)} >Excluir</button></li>
          ))}
        </ul>

      </div>
    </>


  )
}

export default App;
