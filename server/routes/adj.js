var express = require('express');

var router = express.Router();

var permanentAdjs = ["Funky", "Raging", "Surly", "Purple", "Laminated", "Jolly", "Peachy", "Gelatinous", "PossiblyIllegal", "Hydrophobic", "Powdery", "Theoretical", "Dreamy", "Ballroom", "BrandName", "Bespectacled", "Paleolithic", "Jurrasic", "Metaphorical", "Space", "Alpha", "Beta", "OnlineOnly", "Rogue", "Minimalist", "Pseudo", "SuperZen", "FutureProof", "DefinitelyTrustworthy", "Overpaid", "Craft", "Micro", "Macro", "Righteous", "Iced", "Legacy", "Designer", "SuperFast", "Rambunctious", "Cringey", "Chrome", "Mandibular", "Legit", "Likeable", "Newsworthy", "SolidState", "SoftSpoken", "Functional", "SciFi", "NewAndImproved", "UnixBased", "Puppy", "ObjectOriented", "ExtraStrength", "Bananna", "Truthy", "Robot", "Tangential", "Cutesy", "Shakespearian", "Apache", "Prairie", "Caffeinated", "Helicopter", "Pixelated", "Stereo", "Envoked", "7.1Surround", "Organic", "Compact", "Concatenated", "Jazz", "UltraLight", "Parenthetical", "NightMode", "PaperMachet", "TuringComplete", "Aerospace", "Modular", "Fancy", "GlutenFree", "Fashionable", "Galactic", "Indie", "Instant", "Incumbent", "Slick", "Mechanical", "Default", "Angular", "Official", "MacCompatible", "Kitty", "Fictional", "Hyper", "Hyperbolic", "Fairytale"];

router.get('/', function(request, response){
  response.send(permanentAdjs);
});

module.exports = router;
