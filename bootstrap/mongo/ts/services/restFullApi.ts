/*RestFull API*/

// Import local node modules
let express = require("express");
let assert = require("assert");
let bodyParser = require('body-parser');
let path = require('path');
// Import custom node modules
let mongoUtil = require( "../database/mongoConnection" );


// Define variables
let app = express();
let collection = "users";
// Paths to server static files
let rootPath = path.join(__dirname, "../../../"); // points to bootstrap
let mongoFolder = path.join(rootPath, "mongo");
let htmlFolder = path.join(rootPath, "html");

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies
// Serve static files
app.use(express.static(htmlFolder)); // TO SERVER ALL FILES INTO HTML FOLDER!!!
app.use(express.static(mongoFolder)); // TO SERVER ALL FILES INTO Mongo FOLDER!!!


export class addEndPoint{

    // GET endpoints
    login(){
        let endPoint: string = "/";
        app.get(endPoint, function(_, response: any) {
            response.sendFile(path.join(__dirname + "../../../../html/login/login.html"));
        })
    }

    login_modal(){
        let endPoint: string = "/modals";
        app.get(endPoint, function(_, response: any) {
            response.sendFile(path.join(__dirname + "../../../../html/login/modals/login-modal.html"));
        })
    }


    // POST endpoints
    users(){
        let endpoint: string = "/hades/users"
        app.post(endpoint, function(request: any, response: any) {
            let firstName = request.body.firstName;
            let lastName = request.body.lastName;
            response.send(`firstName: ${firstName} <> lastName: ${lastName}`);
            console.log(request.body);
        });
    }

    auth(){
        var endpoint: string = "/auth"
        app.post(endpoint, function(request: any, response: any) {
            let user_email: string = request.body.userEmail;
            console.log(`username: ${user_email}`);

            mongoUtil.connectToServer( function( err: object ) {
                // instantiate the connection
                var db = mongoUtil.getConnection();
                db.collection("users").find({userEmail: user_email}, {userEmail: 1, isActive: 1, userPassword: 1} ).toArray(function(err: object, result: object) {
                  assert.equal(null, err);
                  // Show results
                  console.log(result);
                  response.send(result);
                  // Disconnect
                  mongoUtil.disconnect();
                });
              });
        });
    }   

    findAllUsers(){
        let endpoint: string = "/api/queries/findAllUsers"
        app.post(endpoint, function(request: any, response: any) {

            mongoUtil.connectToServer( function( err: object ) {
                // instantiate the connection
                let db = mongoUtil.getConnection();
              
                db.collection(collection).find({}).toArray(function(err: object, result: object) {
                  assert.equal(null, err);
                  // Show results
                  console.log(result);
                  response.send(result);
                  // Disconnect
                  mongoUtil.disconnect();
                });
              });
        });
    }
}

export class StartAPI{
    constructor(port: number){
        // Start the server
        app.listen(port);
        console.log(`(info) Server started! at => http://localhost:${port}`);
    }
}