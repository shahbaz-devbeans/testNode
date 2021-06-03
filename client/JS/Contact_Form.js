onload = () => {
  const formContact = document.getElementById("contact-form");
  const yourName = document.getElementById("name");
  const yourEmail = document.getElementById("email");
  const phoneNumber = document.getElementById("number");
  const message = document.getElementById("message");

  function isFormValid() {
    let isValid = false;
    if (
      yourName.value === "" ||
      yourEmail.value === "" ||
      phoneNumber.value === "" ||
      message.value === ""
    ) {
      alert("Please fill all the fields");
    } else if (yourName.value.length > 30) {
      alert("PLease check the length of the characters");
    } else if (phoneNumber.value.length !== 10) {
      alert("Please check length of the mobile number");
    } else if (isNaN(phoneNumber.value)) {
      alert("Please check the number. It should be only number");
    } else if (message.value.length > 300) {
      alert("Please check the maximum length of characters");
    } else {
      isValid = true;
      alert(
        `Your Name: ${yourName.value} \n Your Email: ${yourEmail.value} \n Your Phone NUmber: ${phoneNumber.value} \n Your Message: ${message.value}`
      );
    }
    return isValid;
  }

  formContact.onsubmit = async (e) => {
    e.preventDefault();

     if (isFormValid()) { 
      let response = await fetch("http://localhost:3000/contactus", {
         method: "POST",
         body: new FormData(formContact),
       });

       let result = await response.json();

      new FormData(formContact).forEach(e => console.log(e));
    }
  };
 };
