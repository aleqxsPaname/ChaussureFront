import { Http } from '@angular/http';
import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { ServiceAuteurs } from './shared/auteurs.service';
import { Auteur } from './shared/auteur';

@Component({
   selector: 'app-auteurs',
   templateUrl: './auteurs.component.html',
    styleUrls: ['./auteurs.component.css'],
   
})
export class AuteursComponent implements OnInit{ 
    private _http: Http;
    
    private auteurs: Auteur[] = [];

    constructor(private _auteursService: ServiceAuteurs) { }

    public ngOnInit(): void {
       
                       this._auteursService.getlesAuteurs()
                                      .subscribe(
                                          data => {
                                              this.auteurs = data;
                                          }
                                      );
                            }

     deleteAuteurs(id) {
                if (confirm("voulez-vous supprimer?")) {
                this._auteursService.deleteAuteurs(id).subscribe(
                                          data => {
                                              this.auteurs = data;
                                          }
                                      );
                            }
             }                      
    



}//dernier