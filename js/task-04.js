
//function qwe ()  {
   const select = {
        sub: document.querySelector("[data-action= 'increment']"),
        add: document.querySelector("[data-action= 'decrement']"),
        list: document.querySelector("#counter"),
        val: document.querySelector("#value"),

    };


    let counterValue = 0;

    const increment = () => {
        counterValue -= 1;

        document.getElementById('value').textContent = counterValue;
   };


    const decrement = () => {
        counterValue += 1;

       document.getElementById('value').textContent = counterValue;
   };
   select.sub.addEventListener('click', increment);
   select.add.addEventListener('click', decrement);
 //   const wrap_button = {
//  sub: document.querySelector("[data-action='increment']"),
 // add: document.querySelector("[data-action='decrement']"),
 // span: document.querySelector('#value'),
 // wrapper: document.querySelector('#counter '),
//};
//let counterValue = 0;
//const increment = () => {
//counterValue -= 1;
//
 // document.getElementById('value').textContent = counterValue;
//};

//const decrement = () => {
//  counterValue += 1;

 // document.getElementById('value').textContent = counterValue;
//};
//wrap_button.sub.addEventListener('click', increment);
//wrap_button.add.addEventListener('click', decrement);



