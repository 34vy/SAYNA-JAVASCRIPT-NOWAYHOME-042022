//Un effet hover lorsque la souris survole l'élément: inversion des couleurs du bouton(fond+texte)
//Effet de surbrillance autour du bouton et texte avec des traits plus épais.
let btninverse = document.getElementsByClassName('btninverse');
console.log(btninverse);

for (let i = 0; i < btninverse.length; i++) {
    btninverse[i].addEventListener('mouseover', () => {
        btninverse[i].Style.backgroundColor = '#b11313';
        btninverse[i].Style.color = '#FFF';
        btninverse[i].Style.fontWeight = 'bold';
        btninverse[i].Style.boxShadow = '4px 4px 20px #FFF';
    });
    btninverse[i].addEventListener('mouseout', () => {
        btninverse[i].Style.backgroundColor = '#FFF';
        btninverse[i].Style.color = '#b11313';
        btninverse[i].Style.boxShadow = 'none';
    });
}
//Header;les rubriques du menu doivent être surligné aux survol de l'élément.
let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'line-through'
    })
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none'
    })
});
//Faire défiler de gauche à droite tous les titres avec une police Fra From Home.
let titre = document.getElementsByClassName('titre');
console.log(titre)


//Tous les sous-titres doivent apparaître progressivement(opacité).
//Footer: effet hover sur les icônes des réseaux sociaux aux survole de l'élément: les lignes du logos passent en blanc.


let footericones = document.getElementsByClassName('media');

for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].Style.color = 'white';
    });
    btninverse[i].addEventListener('mouseout', () => {
        btninverse[i].Style.color = 'black';
    });
}