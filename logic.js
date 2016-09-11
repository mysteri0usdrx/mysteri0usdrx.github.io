var dataArray = ['0x000000','0x000001','0x000003','0x000002','0x000005','0x000008'];

function refreshData() {
    $.get("output.js", function (data) {
        $(".result").html(data);
        var dataArray = data.split(",");
        console.log(dataArray);
        displayResults(sumRankings(dataArray));
    });

/*    displayResults(sumRankings(dataArray));*/
}

//input hex colorr, output hero object
function lookupColor(foundColor){
    return heroes.filter(function(obj) {
        return obj.color == foundColor;
    })[0];
}


// sums value of input into final ranking array
function arraySummer(inputRanks, finalRankings){
    for (var i = 0; i < inputRanks.length; i++) {
        finalRankings[i] += inputRanks[i];
    }
    return finalRankings;
}

function sumRankings(outputColors){
    var finalRankings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < outputColors.length; i++) {
/*        console.log(outputColors[i]);
        console.log(lookupColor(outputColors[i]));*/
        finalRankings = arraySummer((lookupColor(outputColors[i]).rankings), finalRankings);
    }
    return finalRankings
}
    
    
function displayResults(finalRankings) {
    for (var i = 0; i < finalRankings.length; i++) {
/*        console.log(finalRankings[i], heroes[i].name);*/
        $('.heroRanks')[i].innerHTML = finalRankings[i];
    }
}