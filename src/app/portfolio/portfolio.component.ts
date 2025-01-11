import { Component } from '@angular/core';

interface IImages {
  name: string;
  path: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  images: IImages[] = [
    { name: 'cabin', path: '/images/cabin.png' },
    { name: 'cake', path: '/images/cake.png' },
    { name: 'circus', path: '/images/circus.png' },
    { name: 'cabin', path: '/images/cabin.png' },
    { name: 'cake', path: '/images/cake.png' },
    { name: 'circus', path: '/images/circus.png' },
  ];

  selectedImage: string = '';
  modalOpen: boolean = false;

  openModal(image: string): void {
    this.selectedImage = image;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
