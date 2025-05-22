function show_lectures() {
    const Mthd = document.getElementById("Mthd");
    const Logout = document.getElementById("logout");
    if(Mthd.style.display === "none"){
      Mthd.style.display = "grid";
      Logout.style.display = "none";
    }else{
    Mthd.style.display = "none";
    Logout.style.display = "block";
    }
    }

    const validusername = "ROUGE";
    const validpassword = "0967214R";

    const Login = document.getElementById("login");
const Logout = document.getElementById("logout");
const Cmethod = document.getElementById("Comp_mthd");

    function loggedin(){
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(username === validusername && password === validpassword){
localStorage.setItem("logIn","true");
localStorage.setItem("username",username);
  showLogin();
}else{
document.getElementById("message").innerText= "--Invalid username or password--";
}
    }
    function loggedout(){
localStorage.removeItem("logIn", "true");
localStorage.removeItem("username", username);
      showLogout();
    }

    function showLogin(){
Login.style.display = "none";
Logout.style.display = "block";
Cmethod.style.display = "flex";
document.getElementById("body").style.backdropFilter = "blur(0px)";
    }
    function showLogout(){
Login.style.display = "flex";
Logout.style.display = "none";
Cmethod.style.display = "none";
document.getElementById("body").style.backdropFilter = "blur(5px)";
    }

    window.onload = () => {
      if(localStorage.getItem("logIn") === "true"){
        showLogin();
      }else{
        showLogout();
      }
    }