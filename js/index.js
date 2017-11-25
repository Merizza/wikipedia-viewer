$(function() {

//Buttons events
  
var searchField = document.getElementById("inputField");
  
 $("#button2").click(function() {
   if(searchField.style.display === 'none')    {
    searchField.style.display = 'inline';
 
    $(this).find('i').removeClass('fa-search').addClass('fa-times');
   } else {
     searchField.style.display = 'none';
     $(this).find('i').removeClass('fa-times').addClass('fa-search');
     $("#userInput").val("");
     $("#result").empty();
   } 
  });
  
//API
//https://en.wikipedia.org/w/api.php?action=opensearch&search=flower&callback=?

$("#button1").on("click", function() {
  
  var searchVal = $("#userInput").val();
  console.log(searchVal);
  
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchVal+"&callback=?", function(data) {
    
    $("#result").empty();
    
    for(i=0; i<data[1].length; i++) {
   
        $("#result").append("<li class='box'><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li><div class='spacer'></div>");
    }
  });
 });
  
  $("#userInput").keypress(function(e) {
    if (e.which == 13) {
      $("#button1").click();
    }
  });

  
});