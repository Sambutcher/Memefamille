var tabflechies;
var tablemmes;

$( document ).ready(function() {
    $('#page1').show();

});

$('#goracine').click(function(){
  var mot=$('#montexte').val().toLowerCase();
  var n= tabflechies.indexOf(mot);
  var m= tabflechies.lastIndexOf(mot);

  var res="";
  for (let i=n;i<=m;i++){
    res=res+tablemmes[i]+"<BR>";

    console.log(res);
  };

  $('#result').html(res);

});
