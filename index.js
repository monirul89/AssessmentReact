// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );


// or,

class HelloWorld extends React.Component {
	state = {
		text: 'Hello, world!'
	};

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<h1>{this.state.text}</h1>
		);
	}
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);