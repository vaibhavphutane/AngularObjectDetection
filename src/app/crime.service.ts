import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimeService {

  files: any[];


  constructor(private http: HttpClient) { }

  postImageAPI(crimeSceneImage: File) {
   const fd = new FormData();
   fd.append('file', crimeSceneImage);
   return this.http.post('http://172.16.0.95:5000/upload_file', fd, {});
  }

  getImage(imageObj) {
   return this.http.get(imageObj.img, {responseType: 'blob'}).toPromise();
  }

  setFiles(urls: any[]) {
    this.files = [...urls];
  }

  get getFiles() {
    return this.files;
  }

  getFileBlob(img) {
    return this.http.get(img, {responseType: 'blob'});
  }
}
