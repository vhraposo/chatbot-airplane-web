import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { ChatInsightsComponent } from '../../components/chat-insights/chat-insights.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { InterrogationComponent } from '../../icons/interrogation/interrogation.component';
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
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages: Message[] = []
  sendSuggestedQuestion(question: string){
    this.messages.push({
      type: 'request',
      message: question
    })
  }
}
