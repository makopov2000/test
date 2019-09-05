import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export class Hero {
  public id1: string;
  public name: string;
  public power: string;
  public alterEgo?: string;
  public addresses?: Address[]



}

export class Address {
  public address1: string;
  public address2: string;
  public city: string;
  public state?: string

  }



@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent {
  @ViewChildren('formRow') row: ElementRef;

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model: Hero = {
    id1: '18',
    name: 'Dr IQ',
    power: 'Power',
    alterEgo: 'Chuck Overstreet',
    addresses: [{
      address1: '600 kenwood',
      address2: '',
      city: 'glendale',
      state: 'ca'
    },
      {
        address1: '527 kenwood',
        address2: '',
        city: 'burbank',
        state: 'ca'
      }
    ]
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('*** Submit Hero: ', this.model.addresses);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    console.log('*** Before [ush Hero: ', this.model.addresses);
    let row: Address = {
      address1: '',
      address2: '',
      city: '',
      state: ''
    }
    this.model.addresses.push(row);
    //this.row.first().nativeElement.focus();
    console.log('*** After push Hero: ', this.model.addresses);
  }

  //skyDog(): Hero {
  //  let myHero = new Hero(42, 'SkyDog',
  //    'Fetch any object at any distance',
  //    'Leslie Rollover');
  //  console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //  return myHero;
  //}

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}



