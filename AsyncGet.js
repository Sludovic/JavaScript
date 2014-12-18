/* 
Code from tggagne on http://stackoverflow.com/questions/247483/http-get-request-in-javascript   
Modified by: Sludovic - 2014-12-18
*/
/* "tag" string for multiple call a the same time. Dont use same text  */

var HttpClient = function() {
 this.get = function(aUrl, aCallback,tag) {
  var anHttpRequest = 'anHttpRequest'.tag;
   anHttpRequest = new XMLHttpRequest();
   anHttpRequest.onreadystatechange = function() { 
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
     aCallback(anHttpRequest.responseText);
   }
  anHttpRequest.open( "GET", aUrl, true );            
  anHttpRequest.send( null );
 }
}

aClient = new HttpClient();
aClient.get(
 \'http://url/get.php?any=value\', 
 function(answer) {
  var graphInscrit = document.getElementById(\'IDELEMENT\');
  graphInscrit.innerHTML = answer;
 },
 "TAG"
);
