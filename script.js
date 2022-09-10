window.addEventListener('load', function(){

    console.log('СТРАНИЦА ЗАГРУЗИЛАСЬ !');

    let ul = document.getElementById('menu');

    let arrayLi = document.getElementsByClassName('item-menu');

    Object.keys(arrayLi).forEach( key => { 
        arrayLi[key].addEventListener('click', Concat)
    } )

    // console.log(arrayLi)
    // console.log(ul);
    // console.log(arrayLi);

    // ul.addEventListener('click', Concat);
    // let Arr = ["John", "Michael", "Anton", "Max"];

    // arrayLi.forEach( (element) => {console.log(element)})

    function Concat(e) {
        console.log(e.target.innerText)
    }
})