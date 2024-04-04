import { ListGroup } from "react-bootstrap"

function ListTaskForm(props: any) {
  return ( 
    <>    
      {
        props.tasks.map((task : any) => (
          <ListGroup.Item key={task.id}>{task.name}</ListGroup.Item>
        ))
      }
    </>
  )
}

export default ListTaskForm
