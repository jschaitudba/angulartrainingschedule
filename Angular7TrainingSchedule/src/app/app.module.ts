import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from './app.component';
import { TrainingschedulesComponent } from './trainingschedules/trainingschedules.component';
import { TrainingscheduleComponent } from './trainingschedule/trainingschedule.component';
import { TrainingschedulelistComponent } from './trainingschedulelist/trainingschedulelist.component';
import { TrainingscheduleService } from './shared/trainingschedule.service';
import {NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //MatDatepickerModule, MatInputModule,MatNativeDateModule,
    TrainingschedulesComponent,
    TrainingscheduleComponent,
    TrainingschedulelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TrainingscheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  }
}
