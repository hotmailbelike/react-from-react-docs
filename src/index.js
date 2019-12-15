import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*** Introducing JSX  ***/

/*
//Embedding Expressions in JSX 1

const name = 'Fish Eater';
const element = <h1>Hello, {name}</h1>;
*/

/*
//Embedding Expressions in JSX 2


const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;
*/

/*
JSX is an Expression Too


const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const element = <h1>{getGreeting(user)}</h1>;

function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;
}
*/

/* 
//Specifying Attributes with JSX 1

const element = <div tabIndex='0'></div>;
*/

/* 
//Specifying Attributes with JSX 2

const user = {
	firstName: 'Harper',
	lastName: 'Perez',
	avatarUrl: 'https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394-450x450.jpg'
};

const element = <img src={user.avatarUrl}></img>; */
/* 
// Specifying Children with JSX

const user = {
	firstName: 'Harper',
	lastName: 'Perez',
	avatarUrl: 'https://www.doesport.co.uk/wp-content/uploads/2017/11/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394-450x450.jpg'
};

/*
// If a tag is empty, you may close it immediately with />, like XML:

const element = <img src={user.avatarUrl} />;
*/

/*
// JSX tags may contain children:

const element = (
	<div>
		<h1>Hello!</h1>
		<h2>Good to see you here.</h2>
	</div>
);
*/

/* 
// JSX Prevents Injection Attacks

// It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;

// This is safe:

const element = <h1>{title}</h1>;

// By default, React DOM escapes any values embedded in JSX before rendering them.Thus it ensures that you can never inject anything that’s not explicitly written in your application.Everything is converted to a string before being rendered.This helps prevent XSS(cross - site - scripting) attacks.
 */

// JSX Represents Objects

// Babel compiles JSX down to React.createElement() calls.

// These two examples are identical:

//This block of code:
/*
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
*/
//is same to this block of code:
/*
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
*/

// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// Note: this structure is simplified
const element = {
	type: 'h1',
	props: {
		className: 'greeting',
		children: 'Hello, world!'
	}
};
// These objects are called “React elements”.You can think of them as descriptions of what you want to see on the screen.React reads these objects and uses them to construct the DOM and keep it up to date.

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
