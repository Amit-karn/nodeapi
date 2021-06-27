get all the contents  == localhost:9000/api  GET
get content by id   == localhost:9000/api/{id}  GET
Add content == localhost:9000/api  , payload =  {"content": "blahblahblah"}  POST
Update content == localhost:9000/api/{id}  , payload =  {"content": "blahblahblah"}  PUT
count == localhost:9000/api/count  GET


NOTE: id is auto generated in mongodb