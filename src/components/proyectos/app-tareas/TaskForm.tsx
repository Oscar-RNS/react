import { Card, ListGroup } from 'react-bootstrap'
import InputForm from './InputTaskForm'
import ListTaskForm from './ListTaskForm'
import { useState } from 'react'

function TaskForm() {
  
  const [tasks, addTask] = useState(
      [  
      {
        id : crypto.randomUUID(),
        name: 'Prueba 1'
      },
      {
        id : crypto.randomUUID(),
        name: 'Prueba 2'
      }
    ]
  );
   

  console.log(tasks);

  return (    
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <Card style={{width: '30rem'}}>
      <Card.Header>Listado de Tareas</Card.Header>
      <Card.Body>             
         <InputForm tasks={tasks} addTask={addTask}/>     
         <ListGroup variant="flush" className='mt-2'>   
           <ListTaskForm tasks={tasks} />   
         </ListGroup> 
      </Card.Body>
     </Card>
     </div>
  )
}

export default TaskForm
