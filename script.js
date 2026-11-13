
    let pacientes = [
    {id: 1, nome: 'Luna', tutor:'Isabelle Avellino'},
    {id: 2, nome: 'Panqueca', tutor:'Matheus Otávio'},    
    {id: 3, nome: 'Amora', tutor:'Maria Paula'},
    {id: 4, nome: 'Ameixa', tutor:'Paulo Manini'},
];

let id = 5;
let botao = document.getElementById('btnCadastrar');

botao.addEventListener('click', function(){
    let nome = $('#txtNome').val().trim();
    let tutor = $('#txtTutor').val().trim()

    //valida se todos os campos foram preenchidos
    if(nome === "" || tutor === ""){
        alert("Todos os campos devem ser preenchidos!");
    }
    else{
    //adiciona o objeto ao array após confirmar que os campos foram preenchidos
        pacientes.push({id, nome, tutor});
        id++;

    //Exibe as propriedades do array na página HTML
        renderizarPacientes();

    //Limpa os campos
    $('#txtNome').val("");
    $('#txtTutor').val("");
    }
})

let lista = document.getElementsByTagName('section');

//Função renderizarPacientes
function renderizarPacientes(){

    lista[0].innerHTML = "";

        for(let i in pacientes){
            let item = document.createElement('article');

            let numAnimal = document.createElement('p');
            numAnimal.textContent = pacientes[i].id;

            let nomeAnimal = document.createElement('h3');
            nomeAnimal.textContent = 'Pet: ' + pacientes[i].nome;

            let nomeTutor = document.createElement('p');
            nomeTutor.textContent = 'Tutor: ' + pacientes[i].tutor;

            let btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.classList.add('btn-estilo')

            item.appendChild(numAnimal);
            item.appendChild(nomeAnimal);
            item.appendChild(nomeTutor);
            item.appendChild(btnRemover);
            lista[0].appendChild(item);

        //botão remover
        btnRemover.addEventListener('click', function(){
            pacientes.splice(i, 1); 
            item.remove();
        });
    }
}
