'use strict';
var repos = document.querySelector('.repos');

var orgURL = "https://api.github.com/orgs/adalab"

fetch(orgURL)
.then(function(algo){
  return algo.json();
})
.then(function(unjson){
  var primeraPeticion= unjson;
  
  fetch(primeraPeticion.repos_url)
  .then(function(algo2){
    return algo2.json();
  })
  .then(function(unjson2){
    var segundaPeticion= unjson2;
    
    for (var i=0; i<unjson2.length; i++) {
      repos.innerHTML += '<li><h2>' + unjson2[i].name + '</h2></li>';
    }

  });
});
