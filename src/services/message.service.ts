import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from '../models/message';
import { Video } from '../models/video';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';
import * as myGlobals from '../app/globals'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {
	constructor(private http: Http, private socket: Socket) {}

	// Fetches the top 10 tv shows from TheMovieAPI
	// getMessages(): Promise<Message[]> {
	// 	const url = `http://localhost:5000/api/message`;
	//     return this.http.get(url, {
	//         // params: { api_key: myGlobals.api_key }
	//     })
	//     .toPromise()
	//     .then(
	//     	function(response) {
 //  				return response.json() as Message[];
 //  			},
	//         //Error fallback function
	//         function(error) {
	//           return null;
	//         }
 //        )
	// }

	getMessage() {
        return this.socket
            .fromEvent<any>("msg")
            .map(data => data);
    }

    sendMessage(msg: string) {
    	var message = new Message();
    	message.msg = msg
        this.socket
            .emit("newmsg", msg);
    }


}