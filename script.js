$(".first-item").on("click", function (event) {
    event.preventDefault();
    weatherDashboard();
    
    
});

function weatherDashboard() {
    console.log("clicked");
    location.replace("https://landon0615.github.io/Weather-Dashboard/");
    
  }

  $(".item1").on("click", function (event) {
    event.preventDefault();
    randomPassword();
    
    
});

function randomPassword() {
    console.log("clicked");
    location.replace("https://landon0615.github.io/Password_Generator/");
    
  }

  $(".item2").on("click", function (event) {
    event.preventDefault();
    daySchedular();
    
    
});

function daySchedular() {
    console.log("clicked");
    location.replace("https://landon0615.github.io/Day-Scheduler/");
    
  }

  $(".item3").on("click", function (event) {
    event.preventDefault();
    choosePokemon();
    
    
});

function choosePokemon() {
    console.log("clicked");
    location.replace("file:///Users/landonwaddell/Desktop/BootcampTeam/Choose_Your_Pokemon/index.html");
    
  }
