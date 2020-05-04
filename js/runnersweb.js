var runnersRestService = "http://localhost:8081";
var racesRestService = "http://localhost:8082";

$(document).ready(function() {
  prepareRunners();
  prepareRaces();
});

$("#inpFields .input").click(function() {
  $(this).val("");
});

function prepareRunners() {
  $("#runnersTab").load("register.html");
  $("#runnersTab").show();
  $("#selectRunnersTab").click(function() {
    $("#racesTab").hide();
    $("#runnersTab").show();
  });
  $("#inpNickname").val("thenickname1");
  $("#inpName").val("thename1");
  $("#inpSurname").val("thesurname1");
  $("#inpEmail").val("theemail@mail.com");
  $("#inpBirthdate").val("2000-01-03");
}

function prepareRaces() {
  $("#racesTab").load("races.html");
  $("#racesTab").hide();
  $("#selectRacesTab").click(function() {
    $("#racesTab").show();
    $("#runnersTab").hide();
  });
  $("#inpRaceName").val("theracename1");
  $("#inpRunnerEmail").val("theemail1@mail.com")
  $("#inpRaceDate").val("2020-11-15")
  $("#inpDistanceKm").val("42")
  $("#inpCompleted").val("true");
  $("#inpCompletedRaceTimeSeconds").val("123832");
}
function createRunner() {
  $.ajax({
    dataType: 'json',
    contentType:"application/json; charset=utf-8",
    type:'POST',
    url: runnersRestService,
    data: getRunnerJson(),
    success: function(data){
      document.getElementById("resultRunner").innerHTML = JSON.stringify({data});
    }
  })
}

function getRunnerJson() {
  return JSON.stringify({
    nickname:$("#inpNickname").val(),
    name:$("#inpName").val(),
    surname:$("#inpSurname").val(),
    email:$("#inpEmail").val(),
    birthDate:$("#inpBirthdate").val()
  });
}

function submitRace() {
  $.ajax({
    dataType: 'json',
    contentType:"application/json; charset=utf-8",
    type:'POST',
    url: racesRestService,
    data: getRaceJson(),
    success: function(data){
      document.getElementById("resultRace").innerHTML = JSON.stringify({data});
    }
  })
}

function getRaceJson() {
  return JSON.stringify({
    raceName:$("#inpRaceName").val(),
    runnerEmail:$("#inpRunnerEmail").val(),
    raceDate:$("#inpRaceDate").val(),
    distanceKm:$("#inpDistanceKm").val(),
    completed:$("#inpCompleted").val(),
    completedRaceTimeSeconds:$("#inpCompletedRaceTimeSeconds").val()
   });
}
