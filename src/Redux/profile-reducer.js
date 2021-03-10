const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postData: [
		{ id: 1, message: "Hi, how are you???", counterLike: '14', userName: 'Isak Avetor' },
		{ id: 2, message: 'It\'s my first post!', counterLike: '3', userName: 'Isak Avetor' },
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				message: state.newPostText,
				counterLike: 0,
				userName: 'Isak Avetor'
			}
			state.postData.push(newPost);
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})

export default profileReducer