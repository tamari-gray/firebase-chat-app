import React, { Component } from 'react'
import firebase from "./Firestore"

export default class Messages extends Component {
	constructor(props){
		super(props)
		this.db = firebase.firestore();
		this.state = {
			isLoggedIn: false,
			newMessage: {
				user: this.props.user.displayName,
				text: ''
			},
			messages: [
			]
		}
	}


	componentDidMount(){
		const db = firebase.firestore();
		

		db.collection("messages")
    .onSnapshot((querySnapshot) => {
			const dbMessages = []
			querySnapshot.forEach((doc) => {
					dbMessages.push(doc.data());
			})

			dbMessages.sort((a,b) => a.id - b.id)
			
			this.setState({
				messages: dbMessages
			})
    })
	}


	updateInputValue = (e) => {
		const updatedMsg = {
			user: this.state.newMessage.user,
			text: e.target.value,
			id: this.state.messages.length
		}
		this.setState({
			newMessage: updatedMsg
		})
	}
	sendMessage = (e) => {
		const docId = this.state.newMessage.id.toString()

		this.db.collection('messages').doc(docId).set({
			user: this.state.newMessage.user,
			text: this.state.newMessage.text,
			id: this.state.newMessage.id
		})
	}
	render() {

		const messages = this.state.messages.map((message, index) => {
			return (
				<li key={message.id}> 
					<span style={{color:'gray', textAlign: 'start'}}>{message.user}: </span>  
					{message.text}
				</li>
			)
		})

		

		return (
			<>
				<div className="messages-box">
					<ul>
						{messages}
					</ul>
					
				</div>
				<div>
					<input type="text" placeholder="send a message" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
					<button onClick={this.sendMessage}>Send</button>
				</div>
				
			</>
		)
	}
}
