

$( document ).ready(function() {
    $('#page1').show();

});

import {table1,table2} from '/js/tables.js';

//const table1=["a","b","b","b","c","g"];
//const table2=["d","e","a","c","b","a"];

//pour un tableau d'entrées, les cherchent dans table1 et renvoie la liste des homologues de table2
function listeSuivants(t){
  var res=[];
  for (let i=0;i<t.length;i++){
    var n=table1.indexOf(t[i]);
    var m=table1.lastIndexOf(t[i]);
    if (n!=-1){
      for (let j=n;j<=m;j++){
      if (!table2[j].includes('-')) {res.push(table2[j])};
      }
    }
  }
  return res;
}

//enlève les doublons et trie
function nettoie(t){
  return (Array.from(new Set(t))).sort();
}

//boucle
function famille(mot){
  var res=[mot];
  if (table1.indexOf(mot)==-1){res=[]};
  var temp=[];
  while (res.length!=temp.length){
    temp=res;
    res=nettoie(temp.concat(listeSuivants(res)));
  }
  return res;
}

$('#goracine').click(function(){
  var res=famille($('#montexte').val());
  $('#result').html(res.toString());

});
