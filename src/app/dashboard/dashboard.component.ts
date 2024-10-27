import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { trigger, transition, style, animate} from '@angular/animations'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 0}),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('zoomInOut', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('500ms ease-out', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit{


  constructor(private apiService: ApiService){}
  data:any;
  ngOnInit(){
    this.apiService.getData().subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      },
      error => console.error('Error fetching data', error)
    );
  }

}




 