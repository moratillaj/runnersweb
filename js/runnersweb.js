
$(document).ready(function() {
  $("#inpNickname").val("thenickname1");
  $("#inpName").val("thename1");
  $("#inpSurname").val("thesurname1");
  $("#inpEmail").val("theemail@mail.com");
  $("#inpBirthdate").val("2000-01-03");
});

$("#inpFields .input").click(function() {
  $(this).val("");
});

function createRunner() {
  $.ajax({
    dataType: 'json',
    contentType:"application/json; charset=utf-8",
    type:'POST',
    url: "http://localhost:8081",
    data: getRunnerJson(),
    success: function(data){
      document.getElementById("result").innerHTML = JSON.stringify({data});
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