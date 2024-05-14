import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {
  @Input() public error: string = '';
  @Input() public isModalOpen: boolean = true;

  public closeModal() {
    this.isModalOpen = false;
  }
}
