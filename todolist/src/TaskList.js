import React from 'react';
import TaskItem from './TaskItem';

import List from '@mui/material/List';

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.tasks
		};
	}

	render ()
	{
		let t = this.state.tasks;

		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<TaskItem task={t[i]} key={i} id_task={i}
				removeTask={this.props.removeTask} />);
		}

		return (
		<List>
			{tasks}
		</List>
		);
	}
}

export default TaskList;
