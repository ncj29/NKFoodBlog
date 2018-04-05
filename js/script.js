<!-- add responsive list-adding feature to this JV linking to id:recommendations-->
$("#suggest").click(function(event) {
var restaurant = $("#restaurant").val();
var city = $("#city").val();
$("#suggestionslist").append('<li>' + restaurant + ", " + city + '</li>');
})
