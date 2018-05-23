import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttons: []
		}
	}

	render() {
		return (
          <div>Hello</div>
          <Row buttons={this.state.buttons}/>

			)
	}
}

class Row extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
          {this.props.buttons.map((button) => {
          	return <Button />;
          })}
          <div>line></div>
			)
	}
}

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
          <div>Button</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))