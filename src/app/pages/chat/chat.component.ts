import { Component } from '@angular/core';
import { ChatInsightsComponent } from '../../components/chat-insights/chat-insights.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { InterrogationComponent } from '../../icons/interrogation/interrogation.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    InterrogationComponent,
    ChatInsightsComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  
}
