const homeScreen = document.getElementById("load-screen");
const logIn = document.getElementById("login-button");
const logInContainer = document.querySelector(".logIn-container");
const closeLogIn = document.getElementById('closeLogIn');

//Open and close log in section
function openLogIn() {
   logIn.addEventListener('click', () => {
      logInContainer.classList.add('active');
      if (logInContainer.classList.contains('active')) {
         homeScreen.style.display = "none";
      }
   });

   closeLogIn.addEventListener('click', () => {
      logInContainer.classList.remove('active');
      homeScreen.style.display = "flex";
   });

}
openLogIn();

//Open and close sign up form
function openRegister() {
   const openRegister = document.getElementById('register-button');
   const registerForm = document.querySelector('.registerForm');
   const closeRegisterForm = document.getElementById('closeRegister');

   openRegister.addEventListener('click', () => {
      registerForm.classList.add('active')
      if (registerForm.classList.contains('active')) {
         homeScreen.style.display = "none";
      }
   });
   closeRegisterForm.addEventListener('click', () => {
      registerForm.classList.remove('active');
      homeScreen.style.display = "flex";
   })

}
openRegister();

//Unchecks all checkboxes on refresh
let inputs = document.querySelectorAll('input');
inputs.forEach(inputEl => {
   inputEl.checked = false;
});

//Creating the header of the To Do list
function toDoTime() {

   let currentDate = new Date().toLocaleString('en-Us'); //Gets the time

   var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   var dateObj = new Date();
   var weekdayNumber = dateObj.getDay();
   var weekdayName = arrayOfWeekdays[weekdayNumber]; //day of week

   const headerEl = document.getElementById('times');
   let toDoTime = `
                  <p>${currentDate}</p>
                  <p>${weekdayName}</p>
                  `
   headerEl.innerHTML = toDoTime;
}
toDoTime();


function createToDo() {
   let todoForm = document.getElementById('to-do-form');
   let todoUl = document.getElementById('to-do-ul');
   let todoLi = document.getElementById('to-do-li');
   let input = document.getElementById('input');

   todoForm.addEventListener('submit', (e) => {
      e.preventDefault();


      let todoText = input.value;

      if (todoText) {
         let todoEl = document.createElement("li");
         let removeEl = document.createElement('i');

         todoEl.innerText = todoText;
         removeEl.innerHTML = `<i class="far fa-trash-alt">`;


         todoUl.append(todoEl, removeEl);
         todoUl.insertAdjacentElement("beforebegin", todoUl);

         input.value = '';
         todoLi.style.display = "none";

         todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
         });
      }
   });


}
createToDo();
