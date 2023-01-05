//Aqui estamos importando de outro arquivo o MODAL - O FROM deve ser utilizado para encontrar em qual arquivo está este atributo
// As chaves são por conta da questão de ser uma variável sendo importada
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js' //Para importar mais de uma função
//import "./alert-error.js" se fizermos o import assim iremos executar o código deste arquivo automaticamente (e não é isso que queremos tende a acontecer um evento)

// Variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

//Variáveis === substituidas por propriedades de um objeto com objetivo de ser mais legivel - É UMA BOA PRÁTICA
// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

// 3 maneiras de criar e atribuir função a um evento
//form.onsubmit = () => {} //Arrow function
/*NAMED
form.onsubmit = handleSubmit 
function handleSubmit() {}
*/
form.onsubmit = function (event) {
  event.preventDefault() //Evite o padrão ou seja (evitar carregar o formulário e carregar a página)
  //event como parametro seleciona todos os default (Ou seja padrães do onsubmit)
  //Aqui não precisamos fazer DOM com o botão pois por padrão um botão dentro do formulário faz o submit - Ou seja está função está selecionando o form (formulario) que ao clicarmos no botão fara o onsubmit (ou seja fazer o submit - enviar)
  //console.log('entrei na função') //Vai aparecer rápido e sumir - pois o padrão (default) de um formulario ao acontecer um submit é RECARREGAR A PÁGINA
  //console.log(event) //Para verificar os padrões do submit
  const weight = Number(inputWeight.value) //value (valor) é pq é um input
  const height = Number(inputHeight.value)

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) //A lógica aqui é se um ou o outro forem verdadeiros (vai retornar true) - quer dizer que um deles não é um numero portanto quero fazer algo apartir disto ()

  if (weightOrHeightIsNotANumber) {
    //Ou seja retornando true (abre o alerta de erro)
    AlertError.open()
    return
  }

  AlertError.close() //Ao retornar false (vai entrar neste código e irá fechar o alerta de erro)

  const result = calculateIMC(weight, height)

  displayResultMessage(result)

  //console.log(weight, height) //Testar as variaveis para ver seus valor inseridos (entrada) nos inputs e ver eles sendo impressos (saídas) no console
  //console.log(message)
} //anonymous

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  //ATENÇÃO PARA UTILIZAR O OBJECT TEM QUE SER DA FORMA ABAIXO
  Modal.message.innerText = message
  // modalWrapper.classList.add('open')
  Modal.open()
}

//Função para verificar se é ou não um número
//Para ser um número está função tem que retornar FALSE
//A função isNaN (É uma função que verifica se o valor inserido é um número - pórem ele tem um erro - caso não seja introduzido nada  ele retorna falso - e se retorna false na teória quer dizer que É UM NÚMERO)
//Para corrigir este erro colocamos o value == ""
// || (ou) ==> Para que está lógica retorne um valor que defina que o valor inserido é um NUMERO as duas tem que ser false (pois sendo falso este argumento que dizer que é número)
//A lógica é a seguinte se qualquer dos argumento forem verdadeiros por ser ||(ou) ele irá retornar que é true(ou seja verdadeiro constatando que o valor é verdadeiro sendo assim não é um numero)
//Então se os dois forem falsos (isso quer dizer que o valor inserido é um número)
