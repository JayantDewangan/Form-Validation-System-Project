// name validation using regex : 
function isValidName(name){
    let regex = /^[a-zA-z\s]{2,}$/;
    return regex.test(name.trim())
}

// email validation using regex : 
function isEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// phone number validation : 
function isValidPhone(phone){
    let regex = /^\d{10}$/;
    return regex.test(phone.trim());
}

// password validation : 
function isValidPassword(password){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// repeated styling function : 
function showError(message) {
  $("#errorMsg").css({
    width: "250px",
    height: "auto",
    backgroundColor: "#de4043",
    borderRadius: "10px",
    border: "transparent",
    boxShadow: "2px 2px 4px #414141",
    padding: "10px",
    fontSize: "18px",
    color: "#F5F5DC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "5px"
  }).fadeIn(200);

  $("#para1").html("✖️");
  $("#para2").html(message);
}


// button click : 
const submit = $("#submit")
submit.click((e)=>{
    e.preventDefault();// Prevent form from submitting

    const name = isValidName($("#name").val());
    if (!name) return showError("Please enter a valid name!!");

    const email = isEmail($("#email").val());
    if (!email) return showError("Please enter a valid email id!!");

    const phone = isValidPhone($("#phone").val());
    if (!phone) return showError("Phone number must be exactly 10 digits.");

    const pass = $("#password").val().trim();
    const password = isValidPassword(pass);
    if (!password) {
        return showError("Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.");
    }

    const confirmPass = $("#confirmPassword").val().trim();
    if(pass != confirmPass){
        return showError("Passwords do not match!")
    }


    // All validations passed
    $("#errorMsg").css({
        width: "250px",
        height: "auto",
        backgroundColor: "#3f9632",
        borderRadius: "10px",
        border: "transparent",
        boxShadow: "2px 2px 4px #414141",
        padding: "10px",
        fontSize: "18px",
        color: "#F5F5DC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        textAlign: "center"
    }).fadeIn(200);

    $("#para1").html("✔️💐");
    $("#para2").html("FORM SUBMITTED SUCCESSFULLY!!");
});

// phone number more validation(restricting characters)
$("#phone").on("input", function () {
  // Remove non-digit characters and limit to 10 digits
  this.value = this.value.replace(/\D/g, "").slice(0, 10);
  // - \d = digit         - \D = NOT a digit

});

// show password functionality : 
$("#togglePassword").change(function () {
    if ($(this).is(":checked")) {
        $("#password").attr("type", "text"); // Show password
    } else {
        $("#password").attr("type", "password"); // Hide password
    }
});

$("#toggleConfirm").change(function(){
    if($(this).is(":checked")){
        $("#confirmPassword").attr("type", "text");
    }
    else{
        $("#confirmPassword").attr("type","password")
    }
})

