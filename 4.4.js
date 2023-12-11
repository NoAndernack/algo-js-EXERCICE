const learners = ['Andernack	Noé',
'baiwir	julien',
'Balhor	Otman',
'Blampain	Aurélien',
'Dehaut	Winona',
'Delfosse	Alexis',
'Dieu	Damien',
'Feys	Dylan',
'Firat	Ugur',
'Frédéric	Jérémy',
'Hardat	Mathias',
'Hecq	Maoro',
'Jardon	Robin',
'long	nicolas',
'Maloteaux	Stacy',
'Marique	Alice',
'Mathieu	Denis',
'Messina	Giuseppe',
'Petropoulos	Alexis',
'Rouelle	Cassidy',
'Sasmaz	Huseyin',
'Scozzari	Thomas',
'Seran	Marvin',
'Wechteti	Hanen',
'Yaher	Oksana',
'Zaninello	Joshua',];

function pickLearner(inputAr,n){
    if (n<=0 || n>inputAr.length){
        console.log('Valeur invalide pour n');
    }
    for (let i = inputAr.length - 1; i > 0; i--){
        const rand = Math.floor(Math.random()* (i+1));
        [inputAr[i], inputAr[rand]] = [inputAr[rand] , inputAr[i]];
    }
    return inputAr.slice (0,n);
}

const numberOfLearners = 26 ;
const selectedLearners = pickLearner(learners , numberOfLearners);
console.log(selectedLearners);