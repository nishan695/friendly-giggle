function login{
    event.preventDefault()
    const email= document.getElementById("email").value;
    const password=document.getElementById("password").value;

    console.log("Email:",email);
    console.log("password",password);

    alert("login button clicked");
}