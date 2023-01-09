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
	const [textInput, setTextInput] = useState('');
	const textChangeHandler = (event) => {
		setTextInput(event.target.value)
	}
	const addTaskHandler = () => {
		setTasks([...tasks, textInput])
		setTextInput('')
	}
	const deleteTaskHandler = (index) => {
		console.log("delete "+index)
		const temp = [...tasks];
		temp.splice(index,1);
		setTasks([...temp]);
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
						<li className="list">{task}</li>
						<div>
							<button className="btn">Edit</button>
							<button className="btn" onClick={() => deleteTaskHandler(index)}>Delete</button>
						</div>
					</div>
				)
			})}
		</div>
	</div>
	);
}


export default App;
