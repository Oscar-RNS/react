import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function InputForm({tasks, addTask} : any) {

  const [inputTask, inputNameTask] = useState('');

  const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputNameTask(e.target.value)
  }

  const registerTask = (e: React.FormEvent)  => {
    e.preventDefault();
    addTask(
      [
        ...tasks, 
        {
          id : 3,
          name : inputTask
        }
      ]      
   )
  }

  return (
    <>
     <Form action="" onSubmit={registerTask}>
      <Row>     
        <Col xs={10}>
         <h5>Escribe una tarea</h5>         
         <Form.Control type="text" value={inputTask} onChange={handleAddTask} className='border-secondary' />         
        </Col>
        <Col xs={2} className='mt-2'><Button className='mt-4 position-absolute' type='submit'>+</Button></Col>              
      </Row>   
     </Form>         
    </>
  )
}

export default InputForm
