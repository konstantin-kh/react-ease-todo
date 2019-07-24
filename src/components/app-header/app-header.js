import React from 'react';
import './app-header.css'

const AppHeader = ({toDo, done}) => {
	return (
		<div className="app-header d-flex">
			<h1 className="h3">Todo List</h1>
			<h2 className="h5">{toDo} more to do, {done} done</h2>
		</div>
	)
}

export default AppHeader;