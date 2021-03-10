const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Amelia', userImg: 'https://i.pinimg.com/originals/fc/44/b8/fc44b868b3243324395d0f54cc65b4eb.jpg' },
		{ id: 2, name: 'Simon', userImg: 'http://rasfokus.ru/images/photos/medium/04186be764b3b72ead2c15412f14bf08.jpg' },
		{ id: 3, name: 'Lucas', userImg: 'https://images.wallpaperscraft.ru/image/kot_makro_usy_meh_morda_72668_1280x720.jpg' },
		{ id: 4, name: 'Baam', userImg: 'https://cdn-nus-1.pinme.ru/photo/e9/16/e916eed607abe51186858b1925347d63.jpg' },
		{ id: 5, name: 'Sergey', userImg: 'https://besthqwallpapers.com/Uploads/15-9-2018/65898/thumb-american-bobtail-close-up-pets-domestic-cat-cute-animals.jpg' },
		{ id: 6, name: 'Anna', userImg: 'https://img2.goodfon.com/wallpaper/nbig/e/46/kot-koshka-morda-nos-glaza.jpg' },
	],
	messagesData: [
		{ id: 1, message: 'Hello, Bro!' },
		{ id: 2, message: 'I would love to get to know you much better' },
		{ id: 3, message: 'I want you to know that I am very interested in you' },
		{ id: 4, message: 'How are you?' },
		{ id: 5, message: 'What are you up to?' },
		{ id: 6, message: 'I see infidelity as a total betrayal.' },
	],
	newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 7,
				message: state.newMessageText,
			}
			state.messagesData.push(newMessage)
			state.newMessageText = ''
			return state
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state
		default:
			return state
	}
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text
})

export default dialogsReducer