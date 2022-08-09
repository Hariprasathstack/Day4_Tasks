var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
var res1=result.map((ele)=>ele.name);
var res2=result.map((ele)=>ele.region);
var res3=result.map((ele)=>ele.subregion);
var res4=result.map((ele)=>ele.population);
console.log(res1, res2, res3, res4);
} 