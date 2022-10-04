/*

REST--Representational State Transfer, aka REST is an architectural style meant for building scalable web applications.

Singular things, like notes in the case of our application, are called resources in RESTful thinking. 

Every resource has an associated URL which is the resource's unique address.

One convention is to create the unique address for resources by combining the name of the resource type with the resource's unique identifier.

Let's assume that the root URL of our service is www.example.com/api.

If we define the resource type of note to be notes, then the address of a note resource with the identifier 10, has the unique address www.example.com/api/notes/10.

The URL for the entire collection of all note resources is www.example.com/api/notes.

We can execute different operations on resources. The operation to be executed is defined by the HTTP verb:

URL	verb	functionality
notes/10	GET	fetches a single resource
notes	GET	fetches all resources in the collection
notes	POST	creates a new resource based on the request data
notes/10	DELETE	removes the identified resource
notes/10	PUT	replaces the entire identified resource with the request data
notes/10	PATCH	replaces a part of the identified resource with the request data
This is how we manage to roughly define what REST refers to as a uniform interface, which means a consistent way of defining interfaces that makes it possible for systems to co-operate.



In some places (see e.g. Richardson, Ruby: RESTful Web Services) you will see our model for a straightforward CRUD API, being referred to as an example of resource oriented architecture instead of REST. 


*/