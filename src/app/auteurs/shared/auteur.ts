
export class Auteur {

id : number;
nom : string;
prenom : string;
auteur_image : string ;

constructor(id: number = 0 , nom : string ="?", prenom :string ="?", auteur_image ="?"){
    this.id= id;
    this.nom= nom;
    this.prenom = prenom;
    this.auteur_image;
   

}
}
