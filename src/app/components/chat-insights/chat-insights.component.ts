import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';
import { HistoryComponent } from '../../icons/history/history.component';
import { InterrogationComponent } from '../../icons/interrogation/interrogation.component';

@Component({
  selector: 'chat-insights',
  standalone: true,
  imports: [
    CommonModule,
    InterrogationComponent,
    CuriosityComponent,
    HistoryComponent
  ],
  templateUrl: './chat-insights.component.html',
  styleUrl: './chat-insights.component.scss'
})
export class ChatInsightsComponent {
  insightTopics = [
   {
      title: "Dúvidas",
      icon: 'doubt',
      questions: [
        "Qual foi o primeiro avião a voar ?",
        "Qual o maior aeroporto do mundo ?"
      ]
    },
    {
      title: 'Curiosidades',
      icon: 'curiosity',
      questions: [
        "Quem era o Alberto Santos Dumont ?",
        "Quantas peças tem um avião ?",
      "Qual o maior avião do mundo  ?"
      ]
    },
    {
      title: 'História',
      icon: 'history',
      questions: [
        "Quando o avião foi criado ?",
        "Qual foi o primeiro avião comercial ?",
        "Para que o avião foi criado ?"
      ]
    },
  ]
}
