import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userResults$ = this.restApiService.getUser();
  selectedAnchor = '';
  selectedLabel = '';
  activeState = '';

  constructor(private restApiService: RestApiService, private datePipe: DatePipe) { }



  onHover(selectedLabel: string, selectorProperty: string, state: string ,isItDateFormat?: boolean) {
    this.setStateAsActive(state);
    this.selectedLabel = selectedLabel;
    if (isItDateFormat) {
      this.selectedAnchor = this.datePipe.transform(selectorProperty, 'dd/MM/yyyy')
    } else {
      this.selectedAnchor = selectorProperty;
    }

  }

  setStateAsActive(state) {
    this.activeState = state;
  }

  ngOnInit(): void {
  }

}
