import React, {useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Todolist from "./Todolist";

const App = () => {

    const [task, settask] = useState("");
    const [tasklist, settasklist] = useState([]);

    const taskadd = (event) => {
        settask(event.target.value);
    }

    const btnclick = () => {
        settasklist ( (oldtasklist) => {
            return [...oldtasklist, task];
            });
        settask(" ");
    }

    const deletetasks = (id) => {
        settasklist ((oldtasklist) => {
            return oldtasklist.filter((arrElem,index) => {
                return index !== id;
            })
        })
    }

    return (

    <>
    <div className="main_div">

    <div className="center_div">    
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type  = "text" 
        placeholder = "Add a new task"
        value = {task}
        onChange = {taskadd}
        />

        <Button className="newbtn" onClick = {btnclick}>
            <AddIcon/>
        </Button>

        <br/>

        <ol>
        
            {tasklist.map((taskval,index) => {
            return (
                <Todolist 
                    key = {index}
                    id = {index}
                    text = {taskval}
                    onDelete = {deletetasks}
                />
            );
            })
        }
        </ol>

                
        <br/>

    </div>
    </div>    
    </>

    );
}

export default App;