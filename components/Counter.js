var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {},
		React.createElement('span', {}, 'Komponent ' + this.state.counter),	
		React.createElement('button', {onClick: this.increment}, '+'),
		React.createElement('button', {onClick: this.decrement}, '-')
        );
	},
	
	componentWillMount: function() {
		console.log('Komponent jest tworzony');
		},
	
		componentDidMount: function() {
		console.log('Po utworzeniu komponentu');
		},
	
		componentWillUpdate: function(nextProps, nextState) {
		console.log('Komponent zmienił stan: ' + nextState.counter);
		},
	
		componentDidUpdate: function(prevProps, prevState) {
		console.log('Poprzedni stan komponentu: ' + prevState.counter);
		}
});

var element = React.createElement('div', {},
    React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));