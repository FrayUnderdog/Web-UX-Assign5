// JS code here in a seperated file
// Toggle zipcode field visibility
function toggleZipcode() {
    const zipcodeField = document.getElementById("zipcodeField");
    if (document.getElementById("usaCheckbox").checked) {
        zipcodeField.classList.remove("hidden");
    } else {
        zipcodeField.classList.add("hidden");
    }
}

// Validate form
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Name validation
    const name = document.getElementById("name");
    if (name.value.length < 3) {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    // Year of birth validation
    const year = parseInt(document.getElementById("year").value);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1901 || year > currentYear - 1) {
        document.getElementById("yearError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("yearError").classList.add("hidden");
    }

    // Zipcode validation
    if (document.getElementById("usaCheckbox").checked) {
        const zipcode = document.getElementById("zipcode").value;
        if (!/^\d{5}$/.test(zipcode)) {
            document.getElementById("zipcodeError").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("zipcodeError").classList.add("hidden");
        }
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("passwordError").classList.add("hidden");
    }

    // Pizza preference validation
    const pizzaPreference = document.getElementById("pizzaPreference").value;
    if (pizzaPreference === "") {
        document.getElementById("pizzaPreferenceError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("pizzaPreferenceError").classList.add("hidden");
    }

    // Display success message and log data if form is valid
    if (isValid) {
        document.getElementById("acceptedMessage").classList.remove("hidden");

        // Log form data to console
        console.log("Form submitted successfully with the following data:");
        console.log("Name:", name.value);
        console.log("Year of Birth:", document.getElementById("year").value);
        console.log("Lives in USA:", document.getElementById("usaCheckbox").checked);
        if (document.getElementById("usaCheckbox").checked) {
            console.log("Zipcode:", document.getElementById("zipcode").value);
        }
        console.log("Password:", document.getElementById("password").value);
        console.log("Pizza Preference:", document.getElementById("pizzaPreference").value);
    }

    return isValid;
}

// Attach event listener on form submit
document.getElementById("registrationForm").addEventListener("submit", validateForm);
