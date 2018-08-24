const firebase = require('firebase');
var config = require('./firebaseConfig.js');
firebase.initializeApp(config);





module.exports = function () {
    this.getAllList = function () { 
        var rootRef = firebase.database().ref('users').orderByValue();
        rootRef.once("value").then(function(snapshot) {
            snapshot.forEach(element=>{
                console.log(element.val());
            });
        });
     }
    return this // need to return `this` object here
  }