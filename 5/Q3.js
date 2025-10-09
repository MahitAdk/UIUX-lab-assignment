<!DOCTYPE html>
<html>
<head>
    <title>Simple Form Validation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
        }
        
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        .error {
            color: red;
            font-size: 14px;
            margin-top: 5px;
        }
        
        .success {
            color: green;
            font-size: 16px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h2>Registration Form</h2>
    
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name">
        <div id="nameError" class="error"></div>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Enter your email">
        <div id="emailError" class="error"></div>
    </div>
    
    <div class="form-group">
        <label for="age">Age:</label>
        <input type="text" id="age" placeholder="Enter your age">
        <div id="ageError" class="error"></div>
    </div>
    
    <button onclick="validateForm()">Submit</button>
    
    <div id="successMessage" class="success"></div>

    <script>
        function validateForm() {
            // Get form values
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let age = document.getElementById('age').value;
            
            // Clear previous error messages
            document.getElementById('nameError').innerHTML = '';
            document.getElementById('emailError').innerHTML = '';
            document.getElementById('ageError').innerHTML = '';
            document.getElementById('successMessage').innerHTML = '';
            
            let isValid = true;
            
            // Validate name
            if(name == '') {
                document.getElementById('nameError').innerHTML = 'Name field cannot be empty';
                isValid = false;
            }
            
            // Validate email
            if(email == '') {
                document.getElementById('emailError').innerHTML = 'Email field cannot be empty';
                isValid = false;
            } else {
                // Simple email format check
                let hasAt = false;
                let hasDot = false;
                
                for(let i = 0; i < email.length; i++) {
                    if(email[i] == '@') {
                        hasAt = true;
                    }
                    if(email[i] == '.') {
                        hasDot = true;
                    }
                }
                
                if(!hasAt || !hasDot) {
                    document.getElementById('emailError').innerHTML = 'Please enter a valid email format';
                    isValid = false;
                }
            }
            
            // Validate age
            if(age == '') {
                document.getElementById('ageError').innerHTML = 'Age field cannot be empty';
                isValid = false;
            } else {
                let ageNumber = Number(age);
                if(isNaN(ageNumber)) {
                    document.getElementById('ageError').innerHTML = 'Age must be a number';
                    isValid = false;
                } else if(ageNumber < 18 || ageNumber > 100) {
                    document.getElementById('ageError').innerHTML = 'Age must be between 18 and 100';
                    isValid = false;
                }
            }
            
            // Show success message if all validations pass
            if(isValid) {
                document.getElementById('successMessage').innerHTML = 'Form submitted successfully!';
            }
        }
    </script>
</body>
</html>