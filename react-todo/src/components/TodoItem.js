import ListGroup from "react-bootstrap/ListGroup"
const TodoItem = (props) => {
    return(
        <ListGroup.Item>
            {props.todo.text}
        </ListGroup.Item>
    )
} 
export default TodoItem
