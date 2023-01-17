import { Component, OnInit } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { api1Call } from 'src/app/ApiCall/api1Call.client';
import { Scopes } from 'src/app/models/scopes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

  constructor(
    private api1call: api1Call,
  ) { }

  public identity: Observable<any> = this.api1call.getOidcData();

  ngOnInit(): void {
  }

}
