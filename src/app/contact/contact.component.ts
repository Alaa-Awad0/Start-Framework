import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IFields {
  label: string;
  value: string;
  isActive: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  fields:IFields[] = [
    { label: 'User Name', value: '', isActive: false  },
    { label: 'User Age', value: '', isActive: false  },
    { label: 'User Email', value: '', isActive: false  },
    { label: 'User Password', value: '', isActive: false  },
  ];

  onInput(index: number) {
  this.fields[index].isActive = true
}

}
