import { Injectable } from '@angular/core';
import { Trainingschedule } from './trainingschedule.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainingscheduleService {

  formData : Trainingschedule;
  list : Trainingschedule[];
  readonly apiurl="http://localhost:16751/api"

  constructor(private http: HttpClient) { }

  postTrainingSchedule(formData : Trainingschedule){
    return this.http.post(this.apiurl+'/TrainingSchedule',formData);
  }
}
