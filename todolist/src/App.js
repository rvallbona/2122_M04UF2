import React from 'react';
import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks_id: [],
			tasks:[]
		};
	}

	componentWillMount(){
		fetch("http://172.16.178.252:3000/")
			.then(response => response.json())
			.then(data => this.setTasks(data));
	}

	setTasks = data => {
		console.log(data);
		for (let i = 0; i < data.length; i++){
			this.state.tasks.push(data[i].task);
			this.state.tasks_id.push(data[i]._id);
		}

		this.setState({
			tasks: this.state.tasks
		});
	};

	addTask = task => {

		 fetch("http://172.16.178.252:3030", {method:"POST", body: '{"task":"' +task+'", "remove":"false"}' })
		.then(response => response.json() )
		.then(data => {

		let id = data[0];

		this.state.tasks.push(task);
		this.state.tasks_id.push(id);

		this.setState({
			tasks: this.state.tasks
		});
		});
	}


	removeTask = (task, key, task_id) =>{
		this.state.tasks.splice(key, 1);
		this.setState({
			tasks:this.state.tasks
		});

		fetch("http://172.16.178.252:3030", {method:"post", body: '{"task_id":"' +task_id+'", "remove":"true"}' });
	}


	render(){
		return (
	<div className="App">
		<Title />
		<TaskForm addTask={this.addTask} />
		<TaskList 	tasks={this.state.tasks} 
					tasks_id={this.state.tasks_id}
					removeTask={this.removeTask}/>
	</div>
		);
  }
}

export default App;
