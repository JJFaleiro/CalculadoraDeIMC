// OBJECT LITERAL (Objeto Literal) ATENÇÃO!!!
//O EXPORT serve para exportar este código para qualquer outro arquivo que for necessário
export const Modal = {
  //Transformei as variáveis da aplicação em propriedade de uma variável do tipo object para tornar o código mais legivel É UMA BOA PRÁTICA
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  // Forma mais atual do JS ES6 (Funções abreviadas) - Short hand de função - veja a forma normal abaixo
  //Armazenei as funções também dentro de uma variável do tipo objeto como propriedades
  open() {
    //console.log('open')
    Modal.wrapper.classList.add('open')
  },
  close() {
    //console.log('close')
    Modal.wrapper.classList.remove('open')
  }
}

//Modal.close() //Teste

/* Forma antiga
const Modal = {
  open: function() {},
  close: function() {}
}*/

Modal.buttonClose.onclick = () => Modal.close() //modalWrapper.classList.remove('open') //Quando uma arrow fuction possui uma linha só de código ela pode ser escrita desta forma sem chaves

window.addEventListener('keydown', handleKeydown)

function handleKeydown(e) {
  //console.log(e.key) //Para descobrir o nome da tecla que está sendo pressionada
  if (e.key === 'Escape') {
    //console.log('cliquei no esc') //Testando a funcionalidade
    Modal.close() //Fechar o modal quando clicar no esc
  }
}
