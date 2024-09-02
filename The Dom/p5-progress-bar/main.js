var h3=document.querySelector('#heading');
var progress=document.querySelector('#progress');
var download=document.querySelector('#download');
var indicator=document.querySelector('#indicator');



// h3.style.display="none";
progress.style.display="none";

download.addEventListener('click',()=>{
    h3.textContent="Downloading...";
  
    progress.style.display="block";
    var count=0;
    var int= setInterval(()=>{
        if(count!=100){
            indicator.style.width=count+"%";
            indicator.style.transition="all cubic-bezier(0.19, 1, 0.22, 1)";
            count++;
           
        }
        else{
            clearInterval(int);
            h3.textContent="Download Completed!";
            progress.style.display="none";
        }
    },100)

    

})


