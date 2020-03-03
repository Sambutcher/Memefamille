var tabflechies;
var tablemmes;

$( document ).ready(function() {
    $('#page1').show();

});

$('#goracine').click(function(){
  var mot=$('#montexte').val();
  var i= tabflechies.indexOf(mot);
  var j= tabflechies.lastIndexOf(mot);

  var res="";
  for (let n=i;n<=j;n++){
    res=res+tablemmes[n]+"<BR>";

    console.log(tablemmes[n]);
  };

  $('#result').html(tablemmes[i]+"<BR>"+tablemmes[j]);

});
