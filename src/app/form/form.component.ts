import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: MessageService) { }

  ngOnInit() { }

  submit(form) {
    this.service.addMessage(form.value.message);
    form.reset();
  }

}
