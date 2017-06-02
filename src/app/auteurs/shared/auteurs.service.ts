
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Auteur } from '../shared/auteur';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceAuteurs {

 private _headers = new Headers({'Content-Type': 'application/json'});

 // private url: string = "http://localhost:8080/WebServicePr/services/rest/auteurs"; 
 
  private url: string = "http://localhost:8080/WebServicePr/services/rest/auteurs";

constructor(private _http: Http) { }

getlesAuteurs(){

        return this._http.get('http://localhost:8080/WebServicePr/services/rest/auteurs/all')
        .map(res => res.json())
       
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

  getAuteursByid(id){
    return this._http.get(this.getAuteursUrl(id))
      .map(res => res.json());
  }

  addAuteurs(a : Auteur){

    let urlWS :string = "http://localhost:8080/WebServicePr/services/rest/auteurs/"+ a.id;

       return this._http.post(urlWS, JSON.stringify(a),{headers: this._headers})
      .map(res => res.json())
      .catch(e => { return Observable.throw('error:' + e);}); 
  }

  updateAuteurs(a : Auteur){
  
   let urlWS :string = "http://localhost:8080/WebServicePr/services/rest/auteurs/"+ a.id;

  //  return this._http.put(this.getAuteursUrl(a.id), JSON.stringify(a),{headers: this._headers})
      return this._http.put(urlWS, JSON.stringify(a),{headers: this._headers})
      .map(res => res.json())
      .catch(e => { return Observable.throw('error:' + e);}); 
  }


  deleteAuteurs(id){
    return this._http.delete(`${this.url}/${id}`)
      .map(res => res.json())
     .catch(e => { return Observable.throw('error:' + e);}); 
  }



  private getAuteursUrl(id){
    return this.url +"/"+id;
    
  }



}

