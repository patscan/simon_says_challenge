$(document).ready(function(){
  $('#get_color').click(function() {

    $.ajax({
      url: "/color",
      type: "post",
      dataType: "json"
    }).done(function(data){
      $('ul li:nth-child('+ data.cell + ')').css('background-color', data.color);
    });

  })
});