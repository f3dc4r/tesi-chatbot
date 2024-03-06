import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../_components/header/header.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChatbotComponent,
    NgbToastModule,
    ClipboardModule
  ],
})
export class DashboardModule { }
