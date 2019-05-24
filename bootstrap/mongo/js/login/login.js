function checkAuth() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    var http = new XMLHttpRequest();
    var URL = '/auth';
    var params = "userEmail=" + email;
    http.open('POST', URL, true);
    http.responseType = "json";
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            var response = http.response;
            try {
                var json = response[0];
                console.log(json.userPassword);
                console.log(json.userEmail);
                console.log(json.isActive);
            }
            catch (err) {
                console.log("(err) " + err);
                var div = "login-alert";
                var alert_1 = document.getElementById(div);
                if (alert_1.style.display === "none") {
                    alert_1.style.display = "block";
                    var theDiv = document.getElementById(div);
                    var content = document.createTextNode("Error! the email (" + email + ") was not found in database, please request an account");
                    theDiv.appendChild(content);
                }
            }
        }
    };
    http.send(params);
}
