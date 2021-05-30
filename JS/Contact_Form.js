window.onload=function(){
    let formContact=document.getElementById("contact-form");
    let yourName=document.getElementById("name");
    let yourEmail=document.getElementById("email");
    let phoneNumber=document.getElementById("number");
    let message=document.getElementById("subject");
    
    formContact.addEventListener("submit", async (event)=>{
        event.preventDefault();
        if(yourName.value=== ""  || yourEmail.value=== "" || phoneNumber.value=== "" || message.value=== ""){
            console.log("Please fill all the fields")
            
        }else if(yourName.value.length>30) {
            window.alert("PLease check the length of the characters")
    
          }else if(phoneNumber.value.length!==10){
            window.alert("Please check length of the mobile number")
            
    
    
          }else if(isNaN(phoneNumber.value) ){
            window.alert("Please check the number. It should be only number")
    
          }else if(message.value.length>300){
              window.alert("Please check the maximum length of characters")

          }
        else{
           window.alert(`Your Name: ${yourName.value} \n Your Email: ${yourEmail.value} \n Your Phone NUmber: ${phoneNumber.value} \n Your Message: ${message.value}`);
        }
    });