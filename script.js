$(document).ready(function () {
    const pacientes = [
        {
            id: 0,
            nome: "Luna",
            tutor: "Isabelle"
        },
        {
            id: 1,
            nome: "Panqueca",
            tutor: "Matheus"
        },
        {
            id: 2,
            nome: "Amora",
            tutor: "Maria"
        },
        {
            id: 3,
            nome: "Ameixa",
            tutor: "Manini"
        }
    ]
    let id = 0;
    let lista = document.getElementById('lista');
    $('#btnCadastrar').click(function () {

        let nome = $('#txtNome').val();
        let tutor = $('#txtTutor').val();

        if (nome === "" && tutor === "") {
            alert('Valor inválido');
        } else {
            pacientes.push({ id, nome, tutor });
            let item = document.createElement('div');
        item.classList.add('card-estilo');
            let nmPet = document.createElement('p');
            nmPet.textContent = 'Nome do Pet: ' + $('#txtNome').val();
            let nmTutor = document.createElement('p');
            nmTutor.textContent = 'Nome do Tutor: ' + $('#txtTutor').val();
            id++;
            let btnRemover = document.createElement('button');
            btnRemover.classList.add('btn-estilo');
            btnRemover.textContent = "Remover";
            btnRemover.addEventListener('click', function () {item.remove();});
            item.appendChild(nmPet);
            item.appendChild(nmTutor);
            item.appendChild(btnRemover);
            lista.appendChild(item);
        }
        
        $('#txtNome').val("");
        $('#txtTutor').val("");
    })
})
/*let divLista = document.getElementById('lista');
    $('#btnCadastrar').click(function(){
        //Pegando valor dos inputs
        let nome = $('#txtNome').val();
        let tutor = $('#txtTutor').val();
        //Criando elementos
        let nmPet = document.createElement('p');
        nmPet.textContent =  $('#txtNome').val();
        let nmTutor = document.createElement('p');
        nmTutor.textContent = $('#txtTutor').val();
        let divPets = document.createElement('div');
        let btnRemover = document.createElement('button')
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add(btn-estilo);
        //Adicionando filhos
        divLista.appendChild(divPets);
        divPets.appendChild(nmPet);
        divPets.appendChild(nmTutor);
        divPets.appendChild(btnRemover);
    })*/