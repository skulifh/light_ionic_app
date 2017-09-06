import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
//import { MessageDetailsPage } from '../message-details/message-details';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers: [MessageService]
})

// This component is used to display top 10 messages in a list, and make it possible to click individual tv show to see further details of that tv show
export class MessagesPage implements OnInit {
	messages: Message[];

	ngOnInit(): void {
  		this.messageService
	        .getMessage()
	        .subscribe(msg => {  
	        if (this.messages) {
	          	for (let mess of msg) {
	          		this.messages.push(mess);
	          	}
	        } else {
	        	this.messages = msg;
			}
        });
  	}

  	sendMsg(msg){
		this.messageService.sendMessage(msg);
	}

  	// This messages collection is displayed in the list of tv shows
  	msg: string;
	

	// This messages collection is used to store top 10 tv shows throughout the lifecycle of the app. This makes it unneccesary to constantly
	// get the top 10 tv shows from TheMovieDB again and again when the search is cleared.
	top10_messages: Message[];

	// Function that fetches the top 10 rated messages from TheMovieDB through Message service
	// getMessages(): void {
	// 	this.messageService.getMessages().then(messages => this.messages = this.top10_messages = messages);
	// }

	// Function that runs when an individual message is clicked on the Messages page
	// messageTapped(event, message) {
	// 	this.navCtrl.push(MessageDetailsPage, {
	// 		message: message
	// 	});
	// }

	// Injecting the NavController and the MovieService into this Messages component
	constructor(public navCtrl: NavController, private messageService: MessageService) {
	}

}
