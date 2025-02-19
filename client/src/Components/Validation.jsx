export default function Validation(values){
    let errors={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern=/^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name===""){
        errors.name="Name Should be not Empty."
    }
    else if(values.name.length<3 || values.name.length>30){
        errors.name="Name Must be b/w 3-30"
    }
    else{
        errors.name=""
    }

    if(values.email===""){
        errors.email="Email Should be not Empty."
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Invalid Email!!!!"
    }
    else{
        errors.email=""
    }

    if(values.password===""){
        errors.password="Password Should be not Empty."
    }
    else if(!password_pattern.test(values.password)){
        errors.password="Password should contain 1 small, 1 capital char and a number"
    }
    else{
        errors.password=""
    }
    return errors;
}