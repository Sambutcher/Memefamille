var tabflechies;
var tablemmes;

$( document ).ready(function() {
    $('#page1').show();

});

$('#goracine').click(function(){
  var mot=$('#montexte').val().toLowerCase();
  var n= tabflechies.indexOf(mot);
  var m= tabflechies.lastIndexOf(mot);

  var res=[];
  if (n!=-1){
    res.push(mot);
    for (let i=n;i<=m;i++){
        if (tablemmes[i] != ""){
            res.push(tablemmes[i]);
        };    
    };
  };

  console.log(res);
  $('#result').html(res.toString());

});
