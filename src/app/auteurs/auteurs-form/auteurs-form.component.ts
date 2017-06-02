import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { Auteur } from './../shared/auteur';
import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ServiceAuteurs } from '../shared/auteurs.service';


@Component({
  selector: 'app-auteurs-form',
  templateUrl: './auteurs-form.component.html',
  styleUrls: ['./auteurs-form.component.css'],
  
})
export class AuteursFormComponent implements OnInit {


   form: FormGroup;
   title: string;
   auteurs: Auteur = new Auteur();
   constructor(
     formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private _auteursService: ServiceAuteurs,
     private router: Router
     )
     
     {

this.form = formBuilder.group({
      id: [''],
      nom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      prenom: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
       auteur_image: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
     
    });

     }
  ngOnInit(): void {

      var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Auteur' : 'New Auteur';

      if (!id)
        return;

      this._auteursService.getAuteursByid(id)
        .subscribe(
          auteurs => this.auteurs = auteurs,
          response => {
            if (response.status == 404) {
              this.router.navigate(['not-found']);
            }
          });
    });

  
  }

 save() {
       var result,
        auteurValue = this.form.value;
        console.log( auteurValue);
       

    if (auteurValue.id){
      result = this._auteursService.updateAuteurs(auteurValue);
    } else {
      result = this._auteursService.addAuteurs(auteurValue);
      
    }

    result.subscribe(data => this.router.navigate(['auteurs']));
  }

 


}//fin