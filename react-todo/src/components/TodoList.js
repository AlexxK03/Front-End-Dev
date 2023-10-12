import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";

const TodoList = () => {
  let intialList = [
    { id: 1, text: "Clean Room", done: true },
    { id: 2, text: "Buy Toilet Paper", done: false },
    { id: 3, text: "Walk Dog", done: false },
  ];

  let localList = JSON.parse(localStorage.getItem("todos"));

  if (localList) {
    intialList = localList;
  }
  // console.log(localList)

  const [list, setList] = useState(intialList);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);
  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };
  const addTodoItem = () => {
    let lastItem = list[list.length - 1];
    let id = 1;
    if (lastItem) {
      id = lastItem.id + 1;
    }

    let newTodo = {
      id: id,
      text: textInput,
      done: false,
    };

    setList((prevList) => [...prevList, newTodo]);
    setTextInput("");
  };

  const markAsDone = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.done = true;
      }
      return item;
    });
    setList(newList);
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleKeyUp = (e) => {
    if(e.key === 'Enter'){
      addTodoItem()
    }
  }

  let todoItems = list.map((item) => {
    return (
      <TodoItem
        key={item.id}
        todo={item}
        markAsDone={markAsDone}
        removeItem={removeItem}
      />
    );
  });

  return (
    <Card>
      <Card.Header>To do List {localStorage.getItem("name")}</Card.Header>
      <Card.Body>
        <ListGroup>{todoItems}</ListGroup>
      </Card.Body>
      <Card.Footer>
        <input type="text" onChange={handleTextInput} value={textInput} onKeyUp={handleKeyUp} />
        <Button variant="primary" className="float-end" onClick={addTodoItem}>
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default TodoList;
