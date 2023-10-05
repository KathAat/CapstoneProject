import { Component} from '@angular/core';
// Get JSON file, import from angular//
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {
    jsonData: any;
    title = 'Audit-Trail-Viewer';
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.http.get<any>('https://run.mocky.io/v3/0d105fe2-0e98-47a6-af35-161b5972035f').subscribe(data => {
        this.jsonData = data;
      });
    }  
  }
