let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");

}
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}
// const faders = document.querySelectorAll('#fade-in');
//EmailJs
function validate() {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let message = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || message == ""){
            emptyerror();
        } 
        else{
            sendmail(name.value,email.value,message.value);
            success();
        }   
    });
}
validate();

function sendmail(name,email,message){
    emailjs.send("service_x46eldu","template_bjbvvzs",{
        to_name: email,
        from_name: name,
        message: message,
        });
}

function emptyerror(){
    swal({
        title: "Oh No......",
        text: "Feilds cannot be empty",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "Success",
      });
}
// Header Background Change on Scroll
let Header = document.querySelector('header')

window.addEventListener('scroll', () => {
    Header.classList.toggle('header-active',window.scrollY > 0)
})
