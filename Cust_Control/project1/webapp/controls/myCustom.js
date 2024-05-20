sap.ui.define([], 
    function(){
       sap.ui.core.Control.extend("project1.controls.myCustom",{
          metadata:{
                properties:{
                    "ninja":"",
                    "turtle":"",  // color
                    "deepa":"" ,
                    "maddy":"",
                    "pearl":"",
                    "shin":"" ,
                    "bella":"",
                    "mille":"",
                    "brown":"",
                    "moscow":"",
                    "berlin":"",
                    "jack":"",
                    "rio":"",
                   
                    "santo":""
                     // border property
                },
                events:{

                }
          },

          onInit:function(){

          },
          renderer:function(oRm,oControl){
                // oRm.write("<h1>Welcome to Custom world</h1>");
            //      oRm.write("<h1 style='color:"+ oControl.getTurtle() +";border:"+oControl.getDeepa()+"' >" + oControl.getNinja() + "</h1>")
                oRm.write("<h1");
                oRm.addStyle("color", oControl.getTurtle());
                oRm.addStyle("border", oControl.getDeepa());
                oRm.writeStyles();
                oRm.write(">"+ oControl.getNinja() +"</h1>")

                oRm.write("<button")
                oRm.addStyle("color",oControl.getMaddy())
                oRm.addStyle("Background-color",oControl.getPearl())
                oRm.writeStyles()
                oRm.write(">",oControl.getShin()+"</h1>")

                oRm.write("<p")
                oRm.addStyle("color",oControl.getBella())
                oRm.addStyle("text-decoration",oControl.getMille())
                oRm.writeStyles()
                oRm.write(">",oControl.getBrown()+"</p>")

                oRm.write("<h1>Welcome to custom world</h1>")

                oRm.write(
                    "<form style='background-color:"+oControl.getMoscow()+";border:"+oControl.getBerlin()+"'>"+
                   " <label>"+oControl.getJack()+"</label>"+
                        "<input></input>"+"</br>"+
                        "<label>"+oControl.getRio()+"</label>"+
                       " <input></input>"+
                       "<button>"+oControl.getSanto()+"</button>"+
                    "</form>"
                )

          }
      })
});