const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,30}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*\d){5,10}/;
const validation = (inputs) =>{
    
    let errors = {};
    
    //username validation
    if(inputs.username && !emailRegex.test(inputs.username)) errors.username = 'Tiene que ingresar un email'
    
    
    // if(inputs.username.length > 30) errors.username = 'Este campo no puede superar los 30 caracteres';
   

    //let i = inputs.password.split('');
    //let a = i.filter(z => !isNaN(z));

    console.log(passwordRegex.test(inputs.password))
    if(!passwordRegex.test(inputs.password)) errors.password = 'tienen que poner al menos un numero';
    



    return errors;

}

export default validation;