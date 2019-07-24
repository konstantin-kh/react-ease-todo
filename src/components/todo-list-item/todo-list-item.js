import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component{

	constructor() {
		super();

		this.state = {
			done: false,
			important: false,
		}
		this.onLabelClick = () => {
			this.setState({
				done: true
			})
		}
		this.onMarkImportant = () => {
			this.setState({
				important: true
			})
		}
	}

	render() {
		const {label} = this.props;
		const {done, important} = this.state;
		const isActive = important ? 'todo-list-item-label text-primary font-weight-bold' : 'todo-list-item-label';
		
		let classList = done ? 'done todo-list-item d-flex justify-content-between' : 'todo-list-item d-flex justify-content-between';

		return (
			<div className={classList}>
				<span className={isActive}
					onClick={this.onLabelClick}>
					{label}
				</span>
				<div className="d-flex">
					<button type="button"
						className="btn btn-outline-danger btn-sm">
						<i className="fa fa-trash-o" />
					</button>
					<button type="button"
						className="btn btn-outline-success btn-sm"
						onClick={this.onMarkImportant}>
						<i className="fa fa-exclamation" />
					</button>
				</div>
			</div>
		)
	}
}