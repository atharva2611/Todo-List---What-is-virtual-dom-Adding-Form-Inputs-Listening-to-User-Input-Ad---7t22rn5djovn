import React, { useState } from "react";
import "./../styles/App.css";

// const List = ({task,index}) => {
// 	return (
// 		<div>
// 			<li className="list">{task}</li>
// 			<div>
// 				<button className="btn">Edit</button>
// 				<button className="btn" onClick={(event,index) => {deleteTaskHandler}}>Delete</button>
// 			</div>
// 		</div>
// 	)
// }

function App() {
	const [tasks, setTasks] = useState([])
	const [editTask, setEditTask] = useState([])
	const [textInput, setTextInput] = useState('');
	const textChangeHandler = (event) => {
		setTextInput(event.target.value)
	}
	const addTaskHandler = () => {
		setTasks([...tasks, textInput])
		setEditTask([...editTask,false])
		setTextInput('')
	}
	const deleteTaskHandler = (index) => {
		console.log("delete "+index)
		const temp = [...tasks];
		temp.splice(index,1);
		setTasks([...temp]);
	}
	const editTaskHandler = (index) => {
		const x = editTask[index];
		const temp = [...editTask];
		temp[index] = !x;
		setEditTask(temp)
	}
	const saveTaskHandler = (index) => {

		editTaskHandler(index)
	}
	const editChangeHandler = (event,index) => {
		const temp = [...tasks];
		temp[index] = event.target.value;
		setTasks(temp);
	}
	return (
	<div id="main">
		<h1>Todo</h1>
		<div>
			<textarea id="task" value={textInput} onChange={textChangeHandler}/><br />
			<button id="btn" disabled={textInput.length == 0} onClick={addTaskHandler}>Add Task</button><br />
		</div>
		<div>
			{tasks.map((task,index) => {
				return (
					// <List index={index} task={task} />
					<div key={index}>
						{!editTask[index] ? <li className="list">{task}</li> : <div><input value={task} onChange={(event) => editChangeHandler(event,index)}/><button id="save" onClick={() => saveTaskHandler(index)}>Save</button></div>}
						<div>
							<button id="edit" className="btn" onClick={() => editTaskHandler(index)}>Edit</button>
							<button id="delete" className="btn" onClick={() => deleteTaskHandler(index)}>Delete</button>
						</div>
					</div>
				)
			})}
		</div>
	</div>
	);
}


export default App;
