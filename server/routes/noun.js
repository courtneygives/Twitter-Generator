var express = require('express');

var router = express.Router();


var permanentNouns = ["Component", "Database", "Establishment", "ProcessingPower", "Enthusiast", "Array", "Developer", "Techie", "Runtime", "Wonder", "Iterator", "Explorer", "Directory", "Commit", "Firefly", "DataStructure", "Mogul", "Abstraction", "Executable", "Pixel", "Node", "Emoticon", "Department", "Robot", "Enigma", "Authority", "Englightenment", "Magic", "ListItem", "Unit", "Debugger", "SuperUser", "URL", "Jargon", "Giant", "Function", "'String'", "Superstar",  "Cohort", "SingerSongwriter", "Prototype", "Variable", "Atom", "Mastermind", "Repository", "Processor", "Electron", "PizzaLover", "TwitterUser", "SoAndSo", "Magician", "Contrarian", "Curmudgeon", "Singularity", "Module", "Acronym", "Cult", "Committee", "Data", "Contingent", "ZooKeeper", "Minimalist", "SuperFan", "Syntax", "Technology", "CPU",  "GameChanger", "Visionary", "Pragmatist", "SearchResult", "Tangent", "Particle", "Substance", "Element", "BananaSandwich", "BreakfastClub", "Regime", "Pterodactyl", "Ponies", "Narwhal", "Tauntaun", "Entity", "Cubes", "Foodie", "Hipster", "Integer", "Empire", "Alliance", "Party", "Cylinder", "Thespian", "Method", "Grammarian", "Stack", "FederationOfPlanets", "Hero", "Technician", "SeismicEvent", "Object", "GrassyKnoll", "HotDish", "Galaxy", "Organsim", "LifeForm", "HodgePodge", "Ninja", "Ewok", "TimeTraveler", "Astronaut"];

router.get('/', function(request, response){
  response.send(permanentNouns);
});

module.exports = router;
