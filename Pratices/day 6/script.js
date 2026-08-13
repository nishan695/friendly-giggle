function login (event)
{
    event.preventdefault();
  
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;

    if(email==""|| password==="")
    {
        alert("please enter email and password ");
    }
    else
    {
        alert("login sucessfull");
    }