
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './Redux/state'
import { addMessage } from './Redux/state'

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} addMessage={addMessage} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}


