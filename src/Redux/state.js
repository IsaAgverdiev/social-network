let rerenderEntireTree = () => {
	console.log ('State changed')
}


let state = {
	profilePage: {
		postData: [
			{ id: 1, message: "Hi, how are you???", counterLike: '14', userName: 'Isak Avetor' },
			{ id: 2, message: 'It\'s my first post!', counterLike: '3', userName: 'Isak Avetor' },
		],
		newPostText: ''
	},
	dialogsPage: {
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
	},
}

export const addPost = () => {
	let newPost = {
		id: 3,
		message: state.profilePage.newPostText,
		counterLike: 0,
		userName: 'Isak Avetor'
	}
	state.profilePage.postData.push(newPost);
	state.profilePage.newPostText = ''
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state);
}


export const addMessage = () => {
	let newMessage = {
		id: 7,
		message: state.dialogsPage.newMessageText,
	}
	state.dialogsPage.messagesData.push(newMessage)
	state.dialogsPage.newMessageText = ''
	rerenderEntireTree(state);
}

export const updateNewMessageText = (NewText) => {
	state.dialogsPage.newMessageText = NewText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state