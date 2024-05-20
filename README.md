Backend Application : Performs CRUD operations regarding a team player in MongoDB.

Used Technologies : Node.js, Express.js, MongoDB, Mongoose, Validator. 

Steps to setup into your system : 

1. First clone the repository into your local system.
2. Create a .env file and copy this into it :

      PORT=3000
      MONGO_URL='mongodb+srv://harshitbisht1210:kVWvymoBq2ZiBffp@todoapp.uwzwekw.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp'

3. Run "npm i" into terminal to install all dependencies.
4. Following are the curl commands to call the API Endpoints for CRUD operations :

   ** You can also execute these API Endpoints using Postman Application.

   ** Ensure you follow proper formats to insert record without any validation error.

   VALIDATIONS :
   firstName : mandatory and should be of length [2-100],
   lastName : mandatory and should be of length [2-100],
   phone : mandatory and should be a valid phone number as per npm validator module (see link https://github.com/validatorjs/validator.js/blob/master/src/lib/isMobilePhone.js),
   email : mandatory and should be a valid email address as per npm validator module (see link https://github.com/validatorjs/validator.js/blob/master/src/lib/isEmail.js),
   role: mandatory and should either be "admin" or "user"

a) GET Method to fetch all records:
curl -Method GET http://localhost:3000/getAll

b) POST Method to add new record:
e.g. : curl -Method POST http://localhost:3000/add -Headers @{"Content-Type"="application/json"} -Body '{"firstName": "David", "lastName": "Jones", "phone": "+918212345674", "email": "test@test.com", "role": "admin"}'

c) PUT Method to update existing record using "_id" property:
curl -Method PUT http://localhost:3000/update?_id=ENTER_ID_HERE -Headers @{"Content-Type"="application/json"} -Body '{"firstName": "Updated David", "lastName": "Updated Jones"}'
e.g. : curl -Method PUT http://localhost:3000/update?_id=664b6ad8504b80c03bee4c39 -Headers @{"Content-Type"="application/json"} -Body '{"firstName": "Updated David", "lastName": "Updated Jones"}'

d) DELETE Method to delete existing record using "_id" property:
curl -Method DELETE http://localhost:3000/delete?_id=ENTER_ID_HERE -Headers @{"Content-Type"="application/json"}
e.g. : curl -Method DELETE http://localhost:3000/delete?_id=664b6ad8504b80c03bee4c39 -Headers @{"Content-Type"="application/json"}

If the API is executed successfully, it will give response. Else if any validations, it will throw error.

Hope you have gone through the documentation, and setup the application.
Thank You.
