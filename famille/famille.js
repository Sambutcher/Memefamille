//import {table1,table2} from './famille/tables.js';
const table1=["a","b","b","d","c","g"];
const table2=["d","e","a","c","b","a"];

//pour un tableau d'entrées, les cherchent dans table1 et renvoie la liste des homologues de table2
function listeSuivants(t){
  var res=[];
  for (let i=0;i<t.length;i++){
    var n=table1.indexOf(t[i]);
    var m=table1.lastIndexOf(t[i]);
    if (n!=-1){
      for (let j=n;j<=m;j++){
      res.push(table2[j]);
      }
    }
  }
  return res;
}

//enlève les doublons et trie
function nettoie(t){
  return (Array.from(new Set(t))).sort();
}

function famille(mot){
  var res=[mot];
  var temp=[];
  while (res.length!=temp.length){
    temp=res;
    res=nettoie(temp.concat(listeSuivants(res)));
  }
  return res;
}

console.log(famille('a'));
