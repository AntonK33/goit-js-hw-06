const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const login = data.get('email');
    const password = data.get('password');
    let obj = {};
    
    if (login !== '' || password !== '') {      
        data.forEach((key, value) => {
            obj[key] = value;
            console.log(obj);
        })
        
        loginForm.reset();
    }
       
    else {
        alert('Необходимо заполнить все поля!');
    }
    }); 