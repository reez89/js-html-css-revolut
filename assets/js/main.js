var mainFunzionalita = $('div.funz');
var funzionalitaList = $('div.container-sottomenu');

mainFunzionalita.mouseenter(function () { 
funzionalitaList.show();
console.log(mainFunzionalita);
    
});

funzionalitaList.mouseleave(function () { 
funzionalitaList.hide();

});
