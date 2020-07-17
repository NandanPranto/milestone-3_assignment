// code for feet to mile

    function feetToMile(feet){
        var mile = feet * 0.000189394;
        return mile;
    }

    var resultInMile = Math.round(feetToMile(156));
    console.log("Your result in mile ="+ " " +  resultInMile);

// code ends here

// code for wood calculator

    function woodForChairs(chair){
        var woods = chair * 1;
        return woods;
    }

    function woodForTables(table){
        var woods = table * 3;
        return woods;
    }

    function woodForBeds(bed){
        var woods = bed * 5;
        return woods;
    }

    function woodCalculator(chairs, tables, beds){
        var woodsInTotal = 0;
        woodsInTotal = woodForChairs(chairs) + woodForTables(tables) + woodForBeds(beds);
        return woodsInTotal;
    }
    var result = woodCalculator(2, 3, 5);
    console.log("You will need of"+" "+ result +" "+"cubic feet woods");

//  code ends here

// code for brick calculator

    function feetForBricks(feet){
        var bricks = feet * 1000;
        return bricks
    }
    
    function brickCalculator(floors){
        var bricksForFloors =0;
         if(floors < 11 ){
            var floorsForOneToTen = feetForBricks(15) * floors;
            bricksForFloors = floorsForOneToTen;
         }
         else if(floors >= 11 && floors< 20){
            var floorsUpdated = floors - 10;
            var floorsForElevenToTwenty = (feetForBricks(15) * 10) + ( feetForBricks(12)*floorsUpdated );
            bricksForFloors = floorsForElevenToTwenty;
         }
         else {
            var floorsUpdated = floors - 20;
            var floorsAboveTwenty = (feetForBricks(15) * 10) + ( feetForBricks(12)* 10 ) + (feetForBricks(10)*floorsUpdated );
            bricksForFloors =  floorsAboveTwenty;
         }
         return bricksForFloors;
    }
    var result = brickCalculator(20);
    console.log("Your wiil need" + " "+ result + " " + "bricks");


//  code ends here

// code for finding the name of your tiny friend

function tinyFriends(names){
    var tinyName = names[0]
    for (var i =0 ; i< names.length;i++){
        var currentName = names[i];
        if (tinyName.length > currentName.length ){
             tinyName=currentName;
        }
    }
    return tinyName;
}

var shortName = tinyFriends(['fuul','li','fol']);
console.log("Your Tiny friend is =" +" "+ shortName);

//  code ends here