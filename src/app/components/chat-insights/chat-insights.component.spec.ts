import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInsightsComponent } from './chat-insights.component';

describe('ChatInsightsComponent', () => {
  let component: ChatInsightsComponent;
  let fixture: ComponentFixture<ChatInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
