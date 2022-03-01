// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", event => {
    let takeOff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOff.addEventListener("click", event => {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10_000;
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", event => {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });
});