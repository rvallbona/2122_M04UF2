import React from 'react';
import './App.css';
import Title from './Title';
import Form from './Form';
import List from './List';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: []			
		};
	}
	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});
	}
	render ()
	{
	  return (
	    <div className="App">
		<Title />
		<Form addTask={this.addTask} />
		<List  tasks={this.state.tasks} />
	    </div>
	  );
	}
}

export default App;
