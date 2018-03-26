<!-- add responsive list-adding feature to this JV linking to id:recommendations-->

$("#recommendations").click(function(event) {
var text = $("submit").val();
$("#list").append('<li>' + text + '</li>');
