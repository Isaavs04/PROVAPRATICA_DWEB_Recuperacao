# PROVAPR-TICA_DWEB_Recuperacao
Recuperação da prova prática de desencolvimento web, site clínica veterinária
Contexto
Uma clínica veterinária precisa de uma página simples para controlar os animais atendidos. Você deve desenvolver uma aplicação web dinâmica que permita cadastrar, listar e remover pacientes, sem recarregar a página.
1 Estrutura de dados (2 pts)
Crie um array chamado pacientes com no mínimo 4 objetos inseridos. Cada objeto deve conter:
id – número único;
nome – texto;
tutor – texto.
2 Formulário de cadastro (2 pts)
Inclua na página dois campos <input type="text">: nome do animal e tutor. Adicione também um button que, ao ser clicado:
valide os campos: nenhum pode estar vazio, ignorando espaços em branco (trim());
se a validação falhar, informe o erro ao usuário (por exemplo, com alert()) e não cadastre o paciente;
se for válido, crie o objeto com um id único, adicione-o ao array, limpe os campos e atualize a lista na tela.
3 Listagem dinâmica (3 pts)
Crie uma função “renderizarPacientes” que percorra o array e gere, via DOM, um cartão para cada paciente contendo o nome do animal e o tutor. A função deve ser chamada ao carregar a página e sempre que o array for alterado (cadastro ou remoção).
4 Interações nos cartões (2 pts)
Cada cartão deve ter um botão:
Remover: exclui o paciente do array e atualiza a tela. Dica: Utilize splice.
5 Organização e estilo (1 pt)
Código separado em arquivos: index.html, style.css e script.js.
Layout limpo e legível, com uso de classes CSS e identação adequada do código.
Usabilidade: interface intuitiva, com rótulos claros nos campos e botões e mensagens de feedback ao usuário.
Entrega
Compacte a pasta do projeto e envie pelo formulário disponível no final da página anterior com o nome grupo_num_prova.zip.
