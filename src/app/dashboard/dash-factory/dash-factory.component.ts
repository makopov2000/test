import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dash-factory',
  templateUrl: './dash-factory.component.html',
  styleUrls: ['./dash-factory.component.css']
})
export class DashFactoryComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private rxFb: RxFormBuilder) { }

  ngOnInit() {
  }

}
