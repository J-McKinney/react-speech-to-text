var express = require("express");
var logger = require("morgan");
var path = require("path");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

// Require all models
// var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
}

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname + "/public/html/index.html"));
// });
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Handle form submission, save submission to mongo
app.post("/submit", function (req, res) {
  console.log(req.body);
  // Insert the sentence into the sentences collection
  db.sentences.insert(req.body, function (error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the note back to the browser
      // This will fire off the success function of the ajax request
      res.send(saved);
    }
  });
});

// Retrieve results from mongo
app.get("/all", function (req, res) {
  // Find all sentences in the sentences collection
  db.sentences.find({}, function (error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(found);
    }
  });
});

// Select just one note by an id
app.get("/find/:id", function (req, res) {
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Find just one result in the sentences collection
  db.sentences.findOne(
    {
      // Using the id in the url
      _id: mongojs.ObjectId(req.params.id)
    },
    function (error, found) {
      // log any errors
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the sentence to the browser
        // This will fire off the success function of the ajax request
        console.log(found);
        res.send(found);
      }
    }
  );
});

// Update just one sentence by an id
app.post("/update/:id", function (req, res) {
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Update the sentence that matches the object id
  db.sentences.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      // Set the sentence and modified parameters
      // sent in the req body.
      $set: {
        sentence: req.body.sentence,
        modified: Date.now()
      }
    },
    function (error, edited) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        // console.log(edited);
        res.send(edited);
      }
    }
  );

});

// Delete One from the DB
app.get("/delete/:id", function (req, res) {
  // Remove a sentence using the objectID
  db.sentences.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    function (error, removed) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        console.log(removed);
        res.send(removed);
      }
    }
  );
});

// Clear the DB
app.get("/clearall", function (req, res) {
  // Remove every sentence from the sentences collection
  db.sentences.remove({}, function (error, response) {
    // Log any errors to the console
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      // Otherwise, send the mongojs response to the browser
      // This will fire off the success function of the ajax request
      console.log(response);
      res.send(response);
    }
  });
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/speech2text", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

// Start the server
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
