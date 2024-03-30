let rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    // console.log("moved");
    // console.log(rect.getBoundingClientRect());


    //Rectangle location
    let rectLocation = rect.getBoundingClientRect();
    // console.log(details.clientX - rectLocation.left);
    let insideRectangleX = details.clientX - rectLocation.left;

    if(insideRectangleX < rectLocation.width/2){
        // left -> red
        let corX = gsap.utils.mapRange(0, 200, 255, 0, insideRectangleX); //cordinate x that will map to 0 to 255
        gsap.to(rect,{
            backgroundColor : `rgb(${corX},0,0)`,
            ease : Power4,
        });

    }else if(insideRectangleX == rectLocation.width/2){
        gsap.to(rect,{
            backgroundColor : `rgb(255,255,255)`,
            ease : Power4,
        });
    }else{
        // right -> blue
        let corX = gsap.utils.mapRange(200, 401, 0, 255,insideRectangleX); //cordinate x that will map to 0 to 255
        gsap.to(rect,{
            backgroundColor : `rgb(0,0,${corX})`,
            ease : Power4,
        });
    }
    // console.log(details.clientY)
})


rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor : "white",

});
});

