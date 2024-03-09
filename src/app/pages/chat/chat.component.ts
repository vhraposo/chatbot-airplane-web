import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { ChatInsightsComponent } from '../../components/chat-insights/chat-insights.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { InterrogationComponent } from '../../icons/interrogation/interrogation.component';
import { MessageService } from '../../services/message.service';
import { Message } from '../../types/message.type';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ArrowLeftComponent,
    InterrogationComponent,
    ChatInsightsComponent,
    ChatDialogComponent
  ],
  providers: [
    MessageService
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages: Message[] = JSON.parse(localStorage.getItem('messages') ?? "[]")

  constructor(private service: MessageService) {}

  updateLocalStorage(){
    localStorage.setItem('messages', JSON.stringify(this.messages))
  }

  sendSuggestedQuestion(question: string){
    this.messages.push({
      type: 'request',
      message: question
    })
  this.updateLocalStorage() 
  this.sendMessage(question) 

  }
  sendMessage(message: string){
    this.service.sendData(message).subscribe({
      next: (body) => {
        this.messages.push({
          type: 'response',
          message: body.response
        })
      this.updateLocalStorage() 
      }
    })
  }
}
