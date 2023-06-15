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

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/9476a29dbbaa4177ba2c05387a3cc305/appointmentdata")
    .then((response) => {
    console.log(response)
    for(var i=0; i<response.data.length; i++){
        showNewUserOnScreen(response.data[i])
    }
            })
    .catch((error) => {
    console.log(error) 
    })
})

function showNewUserOnScreen(user){
    var name = user.name;
    var email = user.email;
    var phone = user.phone;
    var time = user.time;
    var id = user._id;

    var paragraph = document.createElement("P");
      paragraph.style.color = "black";
      paragraph.innerHTML = `${id}-${name}-${email}-${phone}-${time}`;
      document.getElementById("content").appendChild(paragraph);
       // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    paragraph.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", delete_fn);
        // create edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    paragraph.appendChild(editBtn);
    // editBtn.addEventListener("click", edit_fn);
}

function delete_fn(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var item = e.target.parentElement; //the parent element of delete btn is list item. 
            document.getElementById("content").removeChild(item);
            const first = (item.textContent).split('-')[0]
            axios.delete(`https://crudcrud.com/api/9476a29dbbaa4177ba2c05387a3cc305/appointmentdata/${first}`)
            .then((response) => {
            console.log(response)})
            .catch((error) => {
                console.log(error) 
                })
        
        }
    }
}

