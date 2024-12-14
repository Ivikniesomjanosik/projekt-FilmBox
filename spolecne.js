/*Vytvorila som si premennú menuButton, ktorú som si vyhľadala v DOM prostredníctvom document.getElementById*/
const menuButton = document.getElementById('menu-tlacitko');
/*Vytvorila som si premennú menu a rovnako som ju vyhľadala v DOM, prstredníctvom docuemnt.getElementById a môžem ju ďalej meniť a pracovať s ňou*/
const menu = document.getElementById('menu-polozky');

/*BONUS: najprv si vyberám element i, nepoužívame .i, pretože sa nejedná o triedu, ale element, potrebujeme i element, ktorý sa nachádza v menuButton*/ 
const hamburgerIcon = menuButton.querySelector('i');

/*podľa zadania má menuButton zareagovať na kliknutie, preto používam metódu addEventListener, ktorá pridáva konstante menuButton poslucháča 'click' (je to prvý argument), ako druhý argument musí vstupovať funkcia - event prípadne anonymná funkcia, nezabudni, že musíš použiť tvar arrow funkce =>, toggle potom dokáže pridať/ odobrať triedu*/  
menuButton.addEventListener('click', () => {menu.classList.toggle('show');

/*stanovujeme si však podmienku, aby sa v prípade, že bude menu obsahovať triedu show zmenila ikona hamburgerového menu na X*/
if(menu.classList.contains('show')){
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark');
    
} else {
    hamburgerIcon.classList.remove('fa-xmark');
    hamburgerIcon.classList.add('fa-bars');
    
    }});