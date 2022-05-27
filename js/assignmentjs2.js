let validName,
  validEmail,
  validPhone = false;
let counter = 1;
const handleSubmit = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  formvalidation(name, email, phone);
};

const formvalidation = (name, email, phone) => {
  const namePattern = /^([a-zA-Z ]){2,30}$/;
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (namePattern.test(name) && name.length != 0) {
    validName = true;
    document.getElementById("validName").style.display = "none";
  } else {
    validName = false;
    document.getElementById("validName").style.display = "block";
  }
  if (emailPattern.test(email) && email.length != 0) {
    validEmail = true;
    document.getElementById("validEmail").style.display = "none";
  } else {
    validEmail = false;
    document.getElementById("validEmail").style.display = "block";
  }
  if (phonePattern.test(phone) && phone.length == 10) {
    validPhone = true;
    document.getElementById("validPhone").style.display = "none";
  } else {
    validPhone = false;
    document.getElementById("validPhone").style.display = "block";
  }
  //  
  saveValidateData(validName, validEmail, validPhone, name, email, phone);
};

const saveValidateData = (validName,validEmail,validPhone,name,email,phone) => {
  if (validName && validEmail && validPhone) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    addDetailsToTable();
  }
};

const addDetailsToTable = () => {
  var table = document.getElementById("table-body");
  let data = document.createElement("tr");
 
  data.innerHTML = `<tr>
    <td>${counter}</td>
    <td>${localStorage.getItem("name")}</td>
    <td>${localStorage.getItem("email")}</td>
    <td>${localStorage.getItem("phone")}</td>
  </tr>`;
  table.append(data);
  counter++;
};