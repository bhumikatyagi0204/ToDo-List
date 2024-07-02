import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Todolist = (props) => {

    const[line, setline] = useState(false);

    const cutIt = () => {
        setline(line === true ? false : true);
    }

    const handleDelete = () => {
        props.onDelete(props.id);
        setline(false);
        };

    return (
        <div className="todo_style">
        <span onClick = {cutIt}  onDoubleClick = {handleDelete}>
            <DeleteIcon className="deleteIcon"/>
        </span>
            
        <li style={{textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
        
        </div>
    );
}

export default Todolist;
