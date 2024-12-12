//Fonction qui va se charger de généerer le formulaire 
//lorsqu'on va cliquer sur le bouton add contact
function displayForm(){
    var main_div=document.createElement('div');
    main_div.id='main';
    var bouton=document.createElement('button');
    bouton.type ='submit';
    var close = document.createElement('button');
    close.id='close';
    var mod_but = document.createElement('button');
    mod_but.className='modified';
    mod_but.textContent = 'Modifier';
    var del_but = document.createElement('button');
    del_but.className='delete';
    del_but.textContent = 'Effacer';
    var formular=document.createElement('form');
    formular.id = 'monFormulaire';
    var label_text = [
        document.createTextNode('Username'),
        document.createTextNode('Email'),
        document.createTextNode('Téléphone'),
        document.createTextNode('Catégorie'),
        document.createTextNode('Ville de résidence'),
        document.createTextNode('Submitt'),
        document.createTextNode('+')
    ]
    var input_table = [
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input')
    ]
    //Username input
    input_table[0].type='text';
    input_table[0].placeholder="Enter your name";
    input_table[0].size='50';
    input_table[0].id= 'Username';
    //Emain input
    input_table[1].type='email';
    input_table[1].placeholder="Enter your email address";
    input_table[1].size='50';
    input_table[1].id= 'Email';
    //Telephone input
    input_table[2].type='text';
    input_table[2].placeholder="Your Phone number";
    input_table[2].size='50';
    input_table[2].id= 'Telephone';
    //Categorie input
    input_table[3].type='text';
    input_table[3].placeholder="Your categorie";
    input_table[3].size='50';
    input_table[3].id= 'categorie';
    //Ville residence input
    input_table[4].type='text';
    input_table[4].placeholder="Your city";
    input_table[4].size='50';
    input_table[4].id= 'city';
    close.appendChild(label_text[6]);
    formular.appendChild(close);
    var label;
    for(var i=0, c=label_text.length; i<c-2;i++){
        label = document.createElement('label');
        label.appendChild(label_text[i]);
        formular.appendChild(label);
        formular.appendChild(input_table[i]);
    }
    bouton.classList.toggle('submitt')
    bouton.appendChild(label_text[5]);
    formular.appendChild(bouton);
    main_div.appendChild(formular);
    document.body.appendChild(main_div);
   
//Récupération des données saisies
    const donnees=[];
    const formul = document.querySelector('#main');
    formul.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById('Username').value;
        const contact = document.getElementById('Telephone').value;
        const labels = document.getElementById('categorie').value;
        const city = document.getElementById('city').value;
        donnees.push(name);
        donnees.push(contact);
        donnees.push(labels);
        donnees.push(city);   
    });
// gestion de l'événèment fermeture du formulaire
    close.addEventListener("click", function(event){
        event.preventDefault();
        //Ajout des informations du formulaire dans le tableau
        var table = document.querySelector('.list-contact');
        var newLine = document.createElement('tr');
        for (var i = 0, l=donnees.length; i<l; i++){
            var item = document.createElement('td');
            item.textContent = donnees[i];
            newLine.appendChild(item);
        }
        //Ajout des boutons de configuration
        var item_button = document.createElement('td');
        var button_options = document.createElement('ul');
        var item1 = document.createElement('li');
        item1.appendChild(mod_but);
        button_options.appendChild(item1);
        var item2 = document.createElement('li');
        item2.appendChild(del_but);
        button_options.appendChild(item2);
        item_button.appendChild(button_options);
        newLine.appendChild(item_button);
        table.appendChild(newLine);
        document.body.appendChild(table);
        remform = document.querySelector('#main');
        remform.remove();
        const effacer = [...document.querySelectorAll('.delete')];
        effacer.forEach((element)=>{
            element.addEventListener("click", function(event){
                console.log("delete");
                const row_delete=event.target.closest("tr");
                row_delete.remove();
            });
        });
        var modifier = [...document.querySelectorAll('.modified')];
        console.log("longueur du tableau : "+modifier.length);
        modifier.forEach((element) => {
            element.addEventListener("click", function(event){
                var row_modified = event.target.closest("tr");
                console.log("row modfied : "+row_modified);
                var old_values = Array.from(row_modified.children);
                console.log("un bouton modifié vient d'être cliqué");
                /*for (var i=0; i<4; i++){
                    console.log("old values "+ i + " : "+old_values[i].textContent);
                }*/
                modified_form(donnees[0], donnees[1], donnees[2], donnees[3], old_values);
            });
            /**/
        });
    });
    
}
// gestion de l'affichage du formulaire pour la saisie d'informations
const bouton = document.querySelector('.add');
bouton.addEventListener("click", ()=>{
    displayForm();
});

function modified_form(name, telephone, categorie, ville, tableau){
    /*const old_form = document.getElementById(id);*/
    //création du formulaire de modification
    var formular=document.createElement('form');
    formular.id = 'newForm';
    var newDiv=document.createElement('div');
    newDiv.id='modDiv';
    var save=document.createElement('button');
    save.type ='save';
    //définitioin des label
    var label_text = [
        document.createTextNode('Username'),
        document.createTextNode('Téléphone'),
        document.createTextNode('Catégorie'),
        document.createTextNode('Ville de résidence'),
        document.createTextNode('save'),
    ]
    //création des label
    var input_table = [
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input')
    ]
    //Username input
    input_table[0].type='text';
    input_table[0].value=name;
    input_table[0].size='50';
    input_table[0].id= 'Username';
    //Telephone input
    input_table[1].type='text';
    input_table[1].value=telephone;
    input_table[1].size='50';
    input_table[1].id= 'Telephone';
    //Categorie input
    input_table[2].type='text';
    input_table[2].value=categorie;
    input_table[2].size='50';
    input_table[2].id= 'categorie';
    //Ville residence input
    input_table[3].type='text';
    input_table[3].value=ville;
    input_table[3].size='50';
    input_table[3].id= 'city';
    var label;
    for(var i=0, c=label_text.length; i<c-1;i++){
        label = document.createElement('label');
        label.appendChild(label_text[i]);
        formular.appendChild(label);
        formular.appendChild(input_table[i]);
    }
    save.classList.toggle('submitt')
    save.appendChild(label_text[4]);
    formular.appendChild(save);
    newDiv.appendChild(formular);
    document.body.appendChild(newDiv);
    var new_donnees = [];
    //Sauvegarde des données qui ont été modifiées
    const save_but = document.querySelector('.submitt');
    save_but.addEventListener("click", function(event){
        event.preventDefault();
        const newname = document.getElementById('Username').value;
        const newcontact = document.getElementById('Telephone').value;
        const newlabels = document.getElementById('categorie').value;
        const newcity = document.getElementById('city').value;
        new_donnees.push(newname);
        new_donnees.push(newcontact);
        new_donnees.push(newlabels);
        new_donnees.push(newcity);  
        console.log("nouvelles donnees : "+new_donnees);
        /*var newInput = [...document.querySelectorAll('input')];
        console.log("new imput : "+newInput);*/
        /*for (var i=0, l=donnees.length;i<l;i++){
            newInput.forEach((element) => {
                element.textContent = donnees[i];
                console.log("element : "+element.textContent);
            });
        }*/
        for (var i=0, l=tableau.length;i<l-1;i++){
            tableau[i].textContent = new_donnees[i];
        }
        var mod_form = document.querySelector('#newForm');
        mod_form.remove();
        console.log("terminé");

    });
}







