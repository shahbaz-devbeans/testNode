onload = () => {
    const formFeedback = document.getElementById("customer_feedback_form");
    const yourName = document.getElementById("name");
    const yourEmail = document.getElementById("email");
    const comments = document.getElementById("comments");

  
    function isFormValid() {
      let isValid = false;
      if (
        yourName.value === "" ||
        yourEmail.value === "" ||
        comments.value === ""
      ) {
        alert("Please fill all the fields");
      } else if (yourName.value.length > 30) {
        alert("PLease check the length of the characters");
      } else if (comments.value.length < 30) {
        alert("Please check the minimum length of characters");
      } else {
        isValid = true;
        alert(
          `Your Name: ${yourName.value} \n Your Email: ${yourEmail.value} \n Your Comments: ${comments.value}`
        );
      }
      return isValid;
    }
  
    formFeedback.onsubmit = async (e) => {
      e.preventDefault();

      console.log("in form submit")
  
        // This is essentially getting all the form data and making like and object
        // such as:
        // {name: "ygor", email: "myemail.com"} and so on
        const formData = new URLSearchParams(new FormData(formFeedback));
  
        let response = await fetch("http://localhost:3001/api/CustomerFeedback", {
          method: "POST",
          body: formData,
        });
  
        if (response.status == 201) {
          // display to the user that form was submitted successfully
          console.log("form submitted success");
        }
    };
  };
  