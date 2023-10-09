import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {

  let intialList = [
    { id: 1, text: "Clean Room", done: true },
    { id: 2, text: "Buy Toilet Paper", done: false },
    { id: 3, text: "Walk Dog", done: false },
    { id: 4, text: "Call Revenue", done: false },
    { id: 5, text: "Book Haircut", done: false },
  ];

  const [list, setList] = useState(intialList);
  const [textInput,setTextInput] = useState('')
  const handleTextInput = (e) =>{
    setTextInput(e.target.value)
  }

  let todoItems = list.map((item) => {
    return <TodoItem key={item.id} todo={item} />;
  });

  return (
    <Card>
      <Card.Header>TodoList</Card.Header>
      <Card.Body>
        <ListGroup>
         {todoItems}
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <input type="text" onChange={handleTextInput} value={textInput}/>
        <Button variant="primary" className="float-end">
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default TodoList;
