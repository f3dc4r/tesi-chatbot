import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  viewToast = false;

  domande = [
    "Quando devo cambiare l'olio?",
    "Come si controlla la pressione delle gomme?",
    "Come si cambia una ruota?",
    "Quando devo fare il tagliando?"
  ];

  constructor() { }

  ngOnInit(): void {

  }

  showToast() {
    this.viewToast = true;

    setTimeout(() => {
      this.viewToast = false;
    }, 3000);
  }
}
