var bool=undefined;
var gravity=2.9;
  var bool2=undefined;
  var bool3=undefined;
  var bool4=undefined;
  var bool5=undefined;



  function changecanvascolor()
  { bool5=1;
    changeradius();
  }


function gravity2()
{ bool=8;  changeradius();}



function changecolor()
{ bool2=6;
}

 
 function gravity3()
                  { 

                    bool=1;
                     }
 function interact2()
             {
                bool3=0; 
             }

function interact()
{ bool3=3;
}
 function distance(x,y,dx,dy)
 { return Math.sqrt( Math.pow(x-dx,2)+ Math.pow(x-dy,2));
 }

function changeradius() {  var data4=document.getElementById('gravity').value;
 
                          document.getElementById('gravityvalue').innerHTML=data4;
                          gravity=data4/2;

                   
   
   var status=document.getElementById('SliderStatus');
   
   var data2=document.getElementById('speed').value;
   document.getElementById('speedvalue').innerHTML=data2;   
   var data3=document.getElementById('numberofball').value;
   document.getElementById('nmbrofball').innerHTML=data3;
 var canvas=document.querySelector('canvas');
   canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;

if( bool5==1){
canvas.style.backgroundColor="BLACK";
 }
 else canvas.style.backgroundColor="white";





  var c=canvas.getContext('2d');


  var colors=['#85144b',"#0074D9",'#D8C3A5','#FF851B'];

  
  var friction=0.92;
  
  
                   


 

var mouse =
{ x:undefined,y:undefined};



window.addEventListener('mousemove',function(event){ 
 mouse.x=event.x;
 mouse.y=event.y;
  

  }
 ); 


 function Circle(x,y,dx,dy,radius)
 { this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius=radius;




function changecolor()
{ bool=6;
}

         this.draw=function(){
                              c.beginPath();
                              c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
                              c.strokeStyle="red";
                              c.stroke();

                            if ( bool2==6){  
                              c.fillStyle=colors[Math.floor(Math.random()*colors.length)];
                              }


                              else c.fill();


                              c.fill();

                            }

         this.update=function()
             {   
                   if(bool==0)
                         { this.dy=1;
                                     bool=5;


                         }
                      
              if( this.y+this.radius>=innerHeight||this.y-this.radius<=0)

                    { this.dy=-this.dy; }

 
             if (this.x+this.radius>innerWidth||this.x-this.radius<0)

                      { this.dx=-this.dx;
                      }
    

    
if(bool==1){


                if(this.y+this.radius+this.dy>canvas.height)
                { this.dy=-this.dy*friction;
                }     
                 else {this.dy+=gravity; } 


 
}

 /* else                
    {                   
              if( this.y+this.radius>innerHeight||this.y-this.radius<0)

                    { this.dy=-this.dy;

                     }
}     
 */


 if(bool3==3)
{
   
  if(this.x-mouse.x<100&&this.x-mouse.x>-100&&this.y-mouse.y<100&&this.y-mouse.y>-100)
   { if(this.radius<40)
    { this.radius+=1;
        

    }
   }
  else if(this.radius>5)
    { this.radius-=1;
    }


}




  this.x+=this.dx;
 

 this.y+=this.dy;
  
   






              this.draw();

 
          } 
 }  
 
 

 var circlearray=[];
 
 
 for(var i=0; i<data3; i++)
  {   var x=Math.random()*innerWidth;
      var y=Math.random()*innerHeight;
      var dx=(Math.random()-0.5)*data2;
        var dy=(Math.random()-0.5)*data2;
        var radius=Math.random()*40;

    circlearray.push(new Circle(x,y,dx,dy,radius));
  }

 
function animate()
{

  requestAnimationFrame(animate);
   c.clearRect(0,0,innerWidth,innerHeight);
       
        
        for(var i=0; i<circlearray.length; i++)
          { 

            circlearray[i].update();
               }
        
        

   }

animate();


}

changeradius();






