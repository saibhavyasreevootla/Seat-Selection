import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count : number=0;
  form : FormGroup;
  seatIdA: Array<any>=[
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: '9', value: '9' },
    { name: '10', value: '10' }
  ];
  seatIdB: Array<any>=[
    { name: '11', value: '11' },
    { name: '12', value: '12' },
    { name: '13', value: '13' },
    { name: '14', value: '14' },
    { name: '15', value: '15' },
    { name: '16', value: '16' },
    { name: '17', value: '17' },
    { name: '18', value: '18' },
    { name: '19', value: '19' },
    { name: '20', value: '20' }
  ];
  seatIdC: Array<any>=[
    { name: '21', value: '21' },
    { name: '22', value: '22' },
    { name: '23', value: '23' },
    { name: '24', value: '24' },
    { name: '25', value: '25' },
    { name: '26', value: '26' },
    { name: '27', value: '27' },
    { name: '28', value: '28' },
    { name: '29', value: '29' },
    { name: '30', value: '30' }
  ];
  seatIdD: Array<any>=[
    { name: '41', value: '41' },
    { name: '42', value: '42' },
    { name: '43', value: '43' },
    { name: '44', value: '44' },
    { name: '45', value: '45' },
    { name: '46', value: '46' },
    { name: '47', value: '47' },
    { name: '48', value: '48' },
    { name: '49', value: '49' },
    { name: '50', value: '50' }
  ];
  seatIdE: Array<any>=[
    { name: '51', value: '51' },
    { name: '52', value: '52' },
    { name: '53', value: '53' },
    { name: '54', value: '54' },
    { name: '55', value: '55' },
    { name: '56', value: '56' },
    { name: '57', value: '57' },
    { name: '58', value: '58' },
    { name: '59', value: '59' },
    { name: '60', value: '60' }
  ];


  data: any;
  constructor(fb: FormBuilder){
    this.form=fb.group({
      selectedSeats: new FormArray([])
    });
  }

  onCheckBoxChange(event: any){
    const selectedSeats=(this.form.controls ['selectedSeats'] as FormArray);
    if(event.target.checked){
      selectedSeats.push(new FormControl(event.target.value));
      this.count=this.count+1;
    }else{
      const index=selectedSeats.controls
      .findIndex(x=>x.value===event.target.value);
      selectedSeats.removeAt(index);
      this.count=this.count-1;
    }
  }
  submit(){
    console.log(this.form.value);
  }
  title = 'my-app';
 
}


