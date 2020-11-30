var mainFunzionalita = $('div.funz');
var funzionalitaList = $('div.container-sottomenu');

mainFunzionalita.mouseenter(function () { 
funzionalitaList.show();
console.log(mainFunzionalita);
});

mainFunzionalita.mouseleave(function () { 
funzionalitaList.hide();
console.log(mainFunzionalita);
});
