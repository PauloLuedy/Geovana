let dadosDoCard = [
    {id: 1, icone:'./imgs/438.jpg', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
    
    {id: 2, icone:'./assests/icone.png', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
    
    {id: 3, icone:'./assests/icone.png', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
    
    {id: 4, icone:'./assests/icone.png', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
    
    {id: 5, icone:'./assests/icone.png', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
    
    {id: 6, icone:'./assests/icone.png', title:'Foda', descricao:'faculdade de alguma coisa e taus'},
]

dadosDoCard.map(function(item,index){
    let cardDados =document.querySelector('.card .card-body').cloneNode(true);
  
 
    cardDados.querySelector('.card-subtitle ').innerHTML =item.title;
    cardDados.querySelector('.card-text').innerHTML =item.descricao;

})