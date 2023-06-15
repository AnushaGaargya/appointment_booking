// document.querySelector('#form').addEventListener('submit', 
function sConsole(event) {
    //prevent the normal submission of the form
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var time = document.getElementById('time').value;

    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(time);

    var userDetails = new Object();
    
    userDetails["name"] = name
    userDetails["email"] = email
    userDetails["phone"] = phone
    userDetails["time"] = time

axios.post('https://crudcrud.com/api/9476a29dbbaa4177ba2c05387a3cc305/appointmentdata',
 userDetails)
 .then((response) => console.log(response))
 .catch((err) => console.log(err))


};

