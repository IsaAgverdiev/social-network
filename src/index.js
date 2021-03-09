
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './Redux/state'


let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
				addPost={addPost}
				addMessage={addMessage}
				updateNewPostText={updateNewPostText}
				updateNewMessageText={updateNewMessageText} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


