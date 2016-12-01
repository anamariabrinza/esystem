/**
 * Created by jesionowj on 11/30/16.
 */

var election = {title: "", type: "", candidates: [], genderPerm: "", collegePerm: "", rankPerm: "", openStatus: ""};

if(document.cookie != ""){
    getElectionFromCookie();
}


function createElection(title, type, candidates, genderPerm, collegePerm, rankPerm, openStatus){
    election = {title: title, type:type, candidates:candidates, genderPerm:genderPerm, collegePerm:collegePerm, rankPerm:rankPerm, openStatus: openStatus};

    updateCookie();
}

function getElection(){
    alert(document.cookie);
    return election;
}

function getElectionFromCookie(){
    var crumbles = document.cookie.split(';');
    for(var i=0;i < crumbles.length;i++) {
        var crumb = crumbles[i].split('=');

        switch(crumb[0]){
            case "title":
                election.title = crumb[1];
                break;
            case "type":
                election.type = crumb[1];
                break;
            case "candidates":
                election.candidates = crumb[1].split[','];
                break;
            case "title":
                election.title = crumb[1];
                break;
            case "genderPerm":
                election.genderPerm = crumb[1];
                break;
            case "collegePerm":
                election.collegePerm = crumb[1];
                break;
            case "rankPerm":
                election.rankPerm = crumb[1];
                break;
            case "openStatus":
                election.openStatus = crumb[1];
                break;
        };

        alert(crumbles[i]);
    }
}

function updateCookie(){
    document.cookie = "title="+title;
    document.cookie = "type="+type;
    document.cookie = "candidates="+candidates.toString();
    document.cookie = "genderPerm="+genderPerm;
    document.cookie = "collegePerm="+collegePerm;
    document.cookie = "rankPerm="+rankPerm;
    document.cookie = "openStatus="+openStatus;
}