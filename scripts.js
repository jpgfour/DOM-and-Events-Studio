// Write your JavaScript code here.
// Remember to pay attention to page loading!

let abortButton = null;
let takeoffButton = null;
let landButton = null;
let readout = null;
let shuttleBG = null;
let shuttleHeight = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;
let lilRocket = null;

// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    //can delete this later
    //console.log('window loaded');

    // Put your code for the exercises here.

    abortButton = document.getElementById("missionAbort");
    takeoffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    readout = document.getElementById("flightStatus");
    shuttleBG = document.getElementById("shuttleBackground");
    height = 0;
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    upButton = document.getElementById("Up");
    downButton = document.getElementById("Down");
    leftButton = document.getElementById("Left");
    rightButton = document.getElementById("Right");
    lilRocket = document.getElementById("rocket");
    lilRocket.style.bottom = '-250px';
    
    takeoffButton.addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            readout.innerHTML = 'Shuttle in flight.';
            shuttleBG.style.backgroundColor = "blue";
            height += 10000;
            shuttleHeight.innerHTML = height;
        }
    })
    
    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        readout.innerHTML = 'The shuttle has landed.';
        shuttleBG.style.backgroundColor = "blue";
        height = 0;
        shuttleHeight.innerHTML = height; 
        lilRocket.style.bottom = '-250px';
        lilRocket.style.left = '0px';
    });

    abortButton.addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            readout.innerHTML = 'Mission aborted.';
            shuttleBG.style.backgroundColor = "green";
            height = 0;
            shuttleHeight.innerHTML = height;
            lilRocket.style.bottom = '-250px';
            lilRocket.style.left = '0px';
        }
    })

    upButton.addEventListener("click", function() {
        
        //window.alert(lilRocket.style.bottom);
        let rocketHeight = lilRocket.style.bottom;
        let pxLetters = rocketHeight.indexOf("px");
        let rocketHeightNumber = Number(rocketHeight.slice(0,pxLetters));
        //window.alert(rocketHeightNumber);
        rocketHeightNumber += 10;
        if (rocketHeightNumber < 70) {lilRocket.style.bottom = String(rocketHeightNumber) + "px"};
        //window.alert(lilRocket.style.bottom);
        
        height += 10000;
        shuttleHeight.innerHTML = height;
    })

    downButton.addEventListener("click", function() {
        
        //window.alert(lilRocket.style.bottom);
        let rocketHeight = lilRocket.style.bottom;
        let pxLetters = rocketHeight.indexOf("px");
        let rocketHeightNumber = Number(rocketHeight.slice(0,pxLetters));
        //window.alert(rocketHeightNumber);
        rocketHeightNumber -= 10;
        if (rocketHeightNumber > -250) {
            lilRocket.style.bottom = String(rocketHeightNumber) + "px";
        };
        //window.alert(lilRocket.style.bottom);
        height -= 10000;
        shuttleHeight.innerHTML = height;
    })

    leftButton.addEventListener("click", function() {
        
        //window.alert(lilRocket.style.left);
        let rocketX = lilRocket.style.left;
        let pxLetters = rocketX.indexOf("px");
        let rocketXNumber = Number(rocketX.slice(0,pxLetters));
        //window.alert(rocketXNumber);
        rocketXNumber -= 10;
        if(rocketXNumber > -200){lilRocket.style.left = String(rocketXNumber) + "px"};
        //window.alert(lilRocket.style.left);
    })

    rightButton.addEventListener("click", function() {
        
        //window.alert(lilRocket.style.left);
        let rocketX = lilRocket.style.left;
        let pxLetters = rocketX.indexOf("px");
        let rocketXNumber = Number(rocketX.slice(0,pxLetters));
        //window.alert(rocketXNumber);
        rocketXNumber += 10;
        if(rocketXNumber < 200){lilRocket.style.left = String(rocketXNumber) + "px"};
        //window.alert(lilRocket.style.left);
    })


    });