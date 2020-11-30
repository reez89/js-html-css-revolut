var mainFunzionalita = $('div.funzionalita.funz__');
var funzionalitaList = $('div.container-sottomenu');
var abbonamenti = $('div.funzionalita.abb__');
var funzioneAbbonamenti = $('div.container-sottomenu-abbonamenti')


mainFunzionalita.mouseenter(function () { 
funzionalitaList.show();
funzioneAbbonamenti.hide();
console.log(mainFunzionalita);
    
});

funzionalitaList.mouseleave(function () { 
funzionalitaList.hide();

});

abbonamenti.mouseenter(function () {
funzionalitaList.hide();
funzioneAbbonamenti.show();
});

funzioneAbbonamenti.mouseleave(function () { 
funzioneAbbonamenti.hide();

});