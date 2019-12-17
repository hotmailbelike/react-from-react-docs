import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

/**** Note: Not all comment block will run, some are just examples without any output ****/

/*** Components and Props ***/

/* 
// Function and Class Components

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

// You can also use an ES6 class to define a component:

class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
// The above two components are equivalent from React’s point of view.
 */
/* 
// Rendering a Component 1

// Previously, we only encountered React elements that represent DOM tags:

const element = <div />;
// However, elements can also represent user-defined components:

const element = <Welcome name='Sara' />;
 */
/* 
// Rendering a Component 2

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name='Sara' />;

function Tasks(props) {
	return <p>Incomplete: {props.task}</p>;
}

const e = <Tasks task='Clean dishes' />;

ReactDOM.render(e, document.getElementById('root'));
 */
/* 
//Composing Components
/* 
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function App() {
	return (
		<div>
			<Welcome name='Sara' />
			<Welcome name='Cahal' />
			<Welcome name='Edite' />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
 */
/* 
function List(props) {
	return <li>Must {props.task}</li>;
}

const App2 = () => {
	return (
		<ul>
			<List task='Clean dishes' />
			<List task='Eat fish' />
			<List task='Kill mosquitoes' />
		</ul>
	);
};

ReactDOM.render(<App2 />, document.getElementById('root'));
*/

/*  
//  Extracting Components

//Code below will be broken down to smaller components

/* 
function formatDate(date) {
	return date.toLocaleDateString();
}

function Comment(props) {
	return (
		<div className='Comment'>
			<div className='UserInfo'>
				<img className='Avatar' src={props.author.avatarUrl} alt={props.author.name} />
				<div className='UserInfo-name'>{props.author.name}</div>
			</div>
			<div className='Comment-text'>{props.text}</div>
			<div className='Comment-date'>{formatDate(props.date)}</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'https://placekitten.com/g/64/64'
	}
};
ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />, document.getElementById('root'));
 */

//broken down code:
/*
function formatDate(date) {
	return date.toLocaleDateString();
}

function Avatar(props) {
	return <img className='Avatar' src={props.avatar.avatarUrl} alt={props.avatar.name} />;
}

function UserInfo(props) {
	return (
		<div className='UserInfo'>
			<Avatar avatar={props.user} />
			<div className='UserInfo-name'>{props.user.name}</div>
		</div>
	);
}

function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo user={props.commentAuthor} />
			<div className='Comment-text'>{props.commentText}</div>
			<div className='Comment-date'>{formatDate(props.commentDate)}</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'https://placekitten.com/g/64/64'
	}
};

ReactDOM.render(<Comment commentDate={comment.date} commentText={comment.text} commentAuthor={comment.author} />, document.getElementById('root'));
*/
//
/* 
// Props are Read-Only

// Whether you declare a component as a function or a class, it must never modify its own props.Consider this sum function:

	function sum(a, b) {
	return a + b;
}

// Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

// In contrast, this function is impure because it changes its own input:

function withdraw(account, amount) {
	account.total -= amount;
}

// React is pretty flexible but it has a single strict rule:

// All React components must act like pure functions with respect to their props.

// Of course, application UIs are dynamic and change over time.In the next section, we will introduce a new concept of “state”.State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
