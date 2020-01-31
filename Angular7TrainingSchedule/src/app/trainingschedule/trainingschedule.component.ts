import { Component, OnInit } from '@angular/core';
import { TrainingscheduleService } from '../shared/trainingschedule.service';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainingschedule',
  templateUrl: './trainingschedule.component.html',
  styleUrls: ['./trainingschedule.component.css']
})
export class TrainingscheduleComponent implements OnInit {

  constructor(private service: TrainingscheduleService,
    private toastr : ToastrService) { }
    public StartDate: string;

  ngOnInit() {
    this.resetForm();
  }

  resetForm (form? : NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formData= {
      TRAINING_ID: null,
      TRAINING_NAME: '',
      START_DATE: '',
      END_DATE: ''
  }
  }
  onSubmit(form:NgForm){
    this.insertRecord(form);
  }
  insertRecord(form : NgForm){
    this.service.postTrainingSchedule(form.value).subscribe(res=>{
      this.toastr.success('Inserted Successfully','Trianing Registered')
      this.resetForm(form)
    })
  }

}
