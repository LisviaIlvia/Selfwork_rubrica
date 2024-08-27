
// Menu
let mostraContatti = document.querySelector('.show');
let inserisciContatti = document.querySelector('.add');
let cancellaContatto = document.querySelector('.delete');
let modificaContatto = document.querySelector('.edit');

// Wrapper dei contatti
let contattiWrapper = document.querySelector('#contattiWrapper');
let funzionalitaWrapper = document.querySelector('#funzionalitaWrapper');

let check = false;

let rubrica = {

    lista_contatti: [
        { nome: 'Silvia', telefono: 3333333 },
        { nome: 'Giuliano', telefono: 345678 },
        { nome: 'Dora', telefono: 3456789 },
    ],

    mostraContatti: function () {

        contattiWrapper.innerHTML = '';

        this.lista_contatti.forEach((contatto) => {

            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <p class="mb-0">${contatto.nome}</p>
                <p class="mb-0">${contatto.telefono}</p> 
            `;
            contattiWrapper.appendChild(div);
        });
    },


    aggiungiContatto: function (nuovoNome, nuovoTelefono) {

        nuovoNome = nuovoNome.trim();
        nuovoTelefono = nuovoTelefono.trim();

        if (nuovoNome && nuovoTelefono) {
            this.lista_contatti.push({ nome: nuovoNome, telefono: nuovoTelefono })
            this.mostraContatti();

            document.querySelector('#nomeInput').value = '';
            document.querySelector('#telefonoInput').value = '';


            if (check == false) {
                check = true;
                mostraContatti.innerHTML = `<i class="fa-solid fa-eye-slash mb-3"></i> Nascondi Contatti`;
            }
        } else {
            alert('Inserisci nome e numero di telefono per aggiungere un nuovo contatto!')
        }
    },

    eliminaContatto: function (nomeDaRimuovere) {

        nomeDaRimuovere = nomeDaRimuovere.trim();

        let nomi = this.lista_contatti.map((contatto) => contatto.nome);
        let index = nomi.indexOf(nomeDaRimuovere);

        if (index >= 0) {

            this.lista_contatti.splice(index, 1);
            this.mostraContatti();

            document.querySelector('#nomeInput').value = '';

            if (check == false) {
                check = true;
                mostraContatti.innerHTML = `<i class="fa-solid fa-eye-slash mb-3"></i> Nascondi Contatti`;
            }
        } else {
            alert('Inserisci un nome presente in rubrica per eliminare il contatto!')
        }
    },

    modificaContatto: function (nome, nuovoNome, nuovoTelefono) {
        nome = nome.trim();
        nuovoNome = nuovoNome.trim();
        nuovoTelefono = nuovoTelefono.trim();

        let contatto = this.lista_contatti.find((contatto) => contatto.nome === nome);

        if (contatto) {
            if (nuovoNome) {
                contatto.nome = nuovoNome;
            }
            if (nuovoTelefono) {
                contatto.telefono = nuovoTelefono;
            }
            this.mostraContatti();

            document.querySelector('#nomeInput').value = '';
            document.querySelector('#nuovoNomeInput').value = '';
            document.querySelector('#telefonoInput').value = '';

            if (check == false) {
                check = true;
                mostraContatti.innerHTML = `<i class="fa-solid fa-eye-slash mb-3"></i> Nascondi Contatti`;
            }
        } else {
            alert('Inserisci un nome presente in rubrica per modificare il contatto!')
        }
    }
};

// EventListner
mostraContatti.addEventListener('click', () => {

    if (check == false) {
        rubrica.mostraContatti();
        check = true;
        mostraContatti.innerHTML = `<i class="fa-solid fa-eye-slash mb-3"></i> Nascondi Contatti`;
    } else {
        contattiWrapper.innerHTML = '';
        check = false;
        mostraContatti.innerHTML = `<i class="fa-solid fa-eye mb-3"></i> Mostra Contatti`;
    }

});

inserisciContatti.addEventListener('click', () => {

    funzionalitaWrapper.innerHTML = '';
    let div = document.createElement('div');
    div.innerHTML = `         
                    <h6 class=" mb-3">Aggiungi Nuovo Contatto</h3>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <input id="nomeInput" type="text" class="form-control" placeholder="Nome">
                    </div>
                    <div class="input-group mb-3">
                        <input id="telefonoInput" type="number" class="form-control" placeholder="Telefono">
                    </div>
                </div>
                <div class="col-6 ">
                    <button id="inserisciContatti" class="btn btn-custom">Inserisci Contatto</button>          
`;
    funzionalitaWrapper.appendChild(div);

    document.querySelector('#inserisciContatti').addEventListener('click', () => {
        let nome = document.querySelector('#nomeInput').value;
        let telefono = document.querySelector('#telefonoInput').value;
        rubrica.aggiungiContatto(nome, telefono);
    });

});


cancellaContatto.addEventListener('click', () => {
    funzionalitaWrapper.innerHTML = '';
    let div = document.createElement('div');
    div.innerHTML = `         
                    <h6 class=" mb-3">Elimina Contatto</h3>
                </div>
                <div class="col-6">
                    <div class="input-group mb-3">
                        <input id="nomeInput" type="text" class="form-control" placeholder="Nome">
                    </div>
                </div>
                <div class="col-6 ">
                    <button id="deleteContatti" class="btn btn-custom">Elimina Contatto</button>          
`;
    funzionalitaWrapper.appendChild(div);

    document.querySelector('#deleteContatti').addEventListener('click', () => {
        let nome = document.querySelector('#nomeInput').value;
        rubrica.eliminaContatto(nome);

    });
})


modificaContatto.addEventListener('click', () => {
    funzionalitaWrapper.innerHTML = '';
    let div = document.createElement('div');
    div.innerHTML = `         
        <h6 class=" mb-3">Modifica Contatto</h6>
        <div class="col-6">
            <div class="input-group mb-3">
                <input id="nomeInput" type="text" class="form-control" placeholder="Nome attuale">
            </div>
            <div class="input-group mb-3">
                <input id="nuovoNomeInput" type="text" class="form-control" placeholder="Nuovo Nome">
            </div>
            <div class="input-group mb-3">
                <input id="telefonoInput" type="number" class="form-control" placeholder="Nuovo Telefono">
            </div>
        </div>
        <div class="col-6 ">
            <button id="modificaContatti" class="btn btn-custom">Modifica Contatto</button>          
        </div>
    `;
    funzionalitaWrapper.appendChild(div);

    document.querySelector('#modificaContatti').addEventListener('click', () => {
        let nome = document.querySelector('#nomeInput').value;
        let nuovoNome = document.querySelector('#nuovoNomeInput').value;
        let nuovoTelefono = document.querySelector('#telefonoInput').value;
        rubrica.modificaContatto(nome, nuovoNome, nuovoTelefono);
    });
});


