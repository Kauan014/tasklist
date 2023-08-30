import "./app.css";
import { useEffect, useState } from "react";
import Menu from "./components/menu";
import Rodape from "./components/rodape"

import Btn from "./components/btn"
import Boxdinamico from "./components/boxdinamica";
import Tarefa from "./components/tarefa";
import Barra from "./components/fotos.img/58497.png"

import Glob from "./components/fotos.img/3443429.png"



function App() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({ id: '', texto: "",status:"" });
  const [show, setShow] = useState( "none" );

  function addTarefa() {
    if (tarefa.texto !== "") {
      setListaTarefas([...listaTarefas, tarefa]);//ele impede q quebre o valor q foi colocado anteriormente e de continuidade na sua escrita */
      setShow( "none" );
    }
  }

  function excluirTarefa(id) {
    const novaLista =  listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
    
  }
  function statusTarefa( id,status ){
     const index= listaTarefas.findIndex (( tarefa) => tarefa.id === id )
     const novoStatus = status;
     listaTarefas[index].status = !status;
     setListaTarefas([...listaTarefas]);
    }  
  useEffect(() => {
    setTarefa( {id:"" , texto:"" , status:""} )
  }, [listaTarefas])
  return (
    <>
    
    <Menu texto ="To-do-list" imagem = {Barra}/>
   
      <div>
        <Boxdinamico exibir={show} acao={ (e) => setTarefa( {id: Math.random(),texto:e.target.value, status: false } ) } adicionar={addTarefa} valor={tarefa.texto} add={addTarefa} texto="adicionar"/>
      </div>
      <div className="tarefa">
        <ul>
          {listaTarefas.map((item, index) => (
            <Tarefa key={index} texto={item.texto} alterarStatus={ () => statusTarefa(item.id, item.status)} status={item.status} excluir={ () => excluirTarefa(item.id) } cor={item.status ? 'green' : 'yellow' } />
          ))
          }
        </ul>
      </div>
      <Btn acao={() => setShow( "block" )}/>
      <Rodape  globo= {Glob} ></Rodape>
    </>


  )

}

export default App;
