// Criaremos na aula hj um projeto simplificado com algumas
//  funções que um sistema petshop também posssui.Ou seja,
//  teremos que criar animais, cadastrar animais
//  (validar os dados antes de cadastrar), vacinar animais
//  listar os pets, contar qntos estao vacinados(geralmente
//     ocorre para disparar email de campanha de vacina
//     para os qe ainda nao foram)
//criando array de objetos:

let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    },{
        nome: 'Rama',
        nomeDono: 'Aliete',
        idade: 4,
        tipo: 'cachorro',
        raca: 'Border colcer',
        peso: 40,
        genero: 'Fêmea',
        cor: 'malhado',
        vacinado: true 
    },{
        nome: 'Dandara',
      nomeDono: 'Evelin',
      idade: 5,
      tipo: 'cachorro',
      raca: 'Pastor Alemão',
      peso: 40,
      genero: 'Fêmea',
      cor: 'preto',
      vacinado: true
    }
  ]
  //criar uma função para listar todos os objrtos que 
  //temos dentro do array acima

  //lista o nome de todos os animais contidos
//   let listarPets= () =>{
//     pets.forEach(element => {
//         console.log(element.nome)
//     });
// }

// listarPets()

const listarPets = () => 
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 
}


//Criar função para cadastrr pets dentro de nossa lista
//depets... essa funcção deverá receber um paramento,
//recomendável que o parâmentro seja um objeto com as
//mesmas propriedades dos outros bjetos dentdo do array pets

function validaDados (objetoPet){
    return (objetoPet.nome &&
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado
        )
}

function cadastrar (arrayPets, objetoPet){
    if(typeof objetoPet =='object'){

    
    if (validaDados(objetoPet)){
    return arrayPets.push(objetoPet)}
    else{
    console.log('O objeto não tem todas as propriedades necessárias')
}}


let novoPet = { nome: 'Pitoco',
nomDono: 'Dudinha',
idade: 5,
tipo: 'cachorro',
raca: 'poudle',
peso: 20,
genero: 'macho',
cor: 'branco',
vacinado: true}



cadastrar(pets,novoPet)

listarPets()

//criar a função validaDados para validar se o objeto 
//passado para a função cadastrarPet, possui as
//propriedades necessárias ereturn true, se nao return false
//obs:utilizar operadores lgicos

function validaDados (objetoPet){
    return (objetoPet.nome &&
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado
        )
}
//a´licar validacao para verificar se o onjeto novo
//poaaui rodas a sproriedades, se não retornar
//insira um objeto valido

// verificar se o paramaetro passado no segund paramaetro
// da função cadastrar eh um objeto
