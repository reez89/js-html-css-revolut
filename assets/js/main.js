var mainFunzionalita = $('a.funzionalta');
var funzionalitaList = $(' a.funzionalta > ul');
mainFunzionalita.mouseenter(function () { 
funzionalitaList.show();
console.log();
});

mainFunzionalita.mouseleave(function () { 
    funzionalitaList.hide();
 })

