import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addApplicationUrl: string = this.config.API_ENDPOINT+'/applications/addApplication.php';
  allApplicationsUrl: string = this.config.API_ENDPOINT+'/applications/allApplications.php';

  addApplication(params) {
    return this.http.post(this.addApplicationUrl, params, { headers: this.config.headers() });
  }

  getAllApplications() {
    return this.http.get(this.allApplicationsUrl, { headers: this.config.headers() });
  }

}
