function show(event) {
    event.preventDefault(); // Prevents the page from reloading
    
    let len = document.getElementById("len");
    let uc = document.getElementById("uc");
    let lc = document.getElementById("lc");
    let di = document.getElementById("di");
    let sc = document.getElementById("sc");
    let result = document.getElementById("Result");

    // Validate password length
    const passwordLength = parseInt(len.value);
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please enter a valid password length!");
        result.textContent = "";
        len.focus();
        return;
    }

    // Character sets
    let characters = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (lc.checked) characters += lowerCase;
    if (uc.checked) characters += upperCase;
    if (di.checked) characters += digits;
    if (sc.checked) characters += specialCharacters;

    if (characters === "") {
        alert("Please select at least one character type.");
        return;
    }

    // Generate password
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Show result
    result.textContent = "Generated Password is :"+password;

   
}