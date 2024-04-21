//terraion rotation
AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{
        speedOfRoation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key==="ArrowRight"){
                if(this.data.speedOfRoation<0.1){
                    this.data.speedOfRoation+=0.01
                }
            }
            if (e.key==="Arrowleft"){
                if(this.data.speedOfRoation>-0.1){
                    this.data.speedOfRoation-=0.01
                }
            }
        })
        
    },
    
    tick:function(){
        var mapRotation=this.el.getAttribute("rotation");
        mapRotation.y+=this.data.speedOfRoation;

        this.el.setAttribute("roation",{
            x:mapRotation.x,y:mapRotation.y,z:mapRotation.z
        })
    }
})