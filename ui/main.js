/*console.log('Loaded!');

//Change the text of the main-text div

var element=document.getElementById('main-text');

element.innerHTML='New Value';

//Move the image

var img=document.getElementById('madi');

var marginLeft=0;

function moveRight(){
    marginLeft  = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick=function(){
    var interval = setInterval(moveRight,50);
   // img.style.marginLeft='100px';
};
*/
var button = document.getElementById('counter');
                                                                 //var counter=0;
button.onclick=function(){
                                                         //Create a request to the counter end point
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    //counter= counter+1;
    //Make the request
    request.open('GET','http://sandhya-bairi.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name

var submit= document.getElementById("submit_btn");
submit.onclick = function(){
//Make a request to the server and send the name
 var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var names= request.responseText;
                names=JSON.parse(names);  //converting string to object in this case an array
                var list="";
                for (var i=0;i<names.length;i++)
                {
                    list+= "<li>"+names[i]+"</li>";
                }
                var ul=document.getElementById('nameList');
                ul.innerHTML=list;
            }
        }
        //not done yet
    };
    var nameInput=document.getElementById("name");
    var name=nameInput.value;
    //Make the request
    request.open('GET','http://sandhya-bairi.imad.hasura-app.io/submit-name?name='+name ,true);
    request.send(null);
// capture the list of names and render it as a list
    
   

};





















