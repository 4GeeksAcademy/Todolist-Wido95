import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setTodos ] = useState([]);

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
	}

	const addInputValue = (e) => {
		if (e.key === "Enter"){
			setTodos(todos.concat(inputValue));
			setInputValue("")
		}
	}

	return (
		<div className="container">
			<h1>My Todo</h1>
			<ul>
				<li><input type="text" placeholder="What do you need to do?" value={inputValue} onChange={handleInputValue} onKeyDown={addInputValue}></input></li>
				{todos.map((t, index) =>(
					<li>{t.toUpperCase()} <i className="fas fa-trash" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				))}
			</ul>
			<div className="taskTotal">{todos.length} tasks left</div>
		</div>
	);
};
export default Home;
