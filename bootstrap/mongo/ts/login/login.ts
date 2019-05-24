function checkAuth(){
    // Get values from input form (casting getElementById)
    let email = (<HTMLInputElement>document.getElementById("userEmail")).value;
    let password = (<HTMLInputElement>document.getElementById("userPassword")).value;

    let http = new XMLHttpRequest();
    let URL = '/auth';
    let params = `userEmail=${email}`;
    http.open('POST', URL, true);
    http.responseType = "json"; // declare the object from the response

    // Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() { //Call a function when the state changes
        // ready state 4 = done
        if(http.readyState == 4 && http.status == 200) {	
            let response = http.response;
            try {
                let json = response[0];
                console.log(json.userPassword);
                console.log(json.userEmail);
                console.log(json.isActive);							
            }
            catch(err) {
                console.log("(err) " + err);
                // show an alert
                let div = "login-alert"
                let alert = (<HTMLInputElement>document.getElementById(div));
                if (alert.style.display === "none"){

                    

                    alert.style.display = "block";
                    let theDiv = document.getElementById(div);
                    let content = document.createTextNode(`Error! the email (${email}) was not found in database, please request an account`);
                    theDiv.appendChild(content);
                }
            }
        }
    }
    // send the POST
    http.send(params);
}