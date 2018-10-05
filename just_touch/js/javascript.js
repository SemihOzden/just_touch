//get coordinates of red circle and blue square
var getRedCoords=document.getElementById('round').getBoundingClientRect();
var getBlueCoords=document.getElementById('blue').getBoundingClientRect();
var redElem=document.getElementById('round');
var blueElem=document.getElementById('blue');
blueElem.style.cssText="color:white; line-height:45px;text-align:center;";
//start movement after 3 seconds
var wait=setTimeout(animate,3000);

function animate(){
    //after 3 seconds clear setTimeout
    clearTimeout(wait);
//every 50 milisecond move red circle 1px right and 1px bottom 
    let go=setInterval(animation,50);
    let pos=0;
    function animation(){
        pos++;        
        redElem.style.top=getRedCoords.top+pos+'px';
        redElem.style.left=getRedCoords.left+pos+'px';
//check whether red circle's right-bottom point correspond with blue square top-left point
        if(redElem.getBoundingClientRect().right-2==blueElem.getBoundingClientRect().left){
            clearInterval(go);
            blueElem.innerHTML='K';
            blueElem.style.backgroundColor='#FE3838';
            redElem.style.backgroundColor='#3498DB'; 
        }
        
    }
}
