import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResponseContentType} from '@angular/http';

@Injectable()
export class UploadFileService {
 
    constructor(private http: HttpClient) { }
    
    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
      const formdata: FormData = new FormData();
   
      formdata.append('file', file);
   
      const req = new HttpRequest('POST', '/post', formdata, {
        reportProgress: true,
        responseType: 'text'
      });
   
      return this.http.request(req);
    }
   
    getFiles(): Observable<any> {
      return this.http.get('/getallfiles');
    }

  
  
  
}
