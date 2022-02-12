
function affiche(){
    document.getElementById("myUL").style.display="block";
    document.getElementById("myUL").value=""
       
}
function myFunction() {
    document.getElementById("myUL").style.display="block"
    var input, filter, ul, li, i, a, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
function none(){
    document.getElementById("myUL").style.display="none";
}
// function hides(){
    
//      document.getElementById("side-bar").style.display="none"


// }

function show(){
	 document.getElementById("side-bar").style.display="block";
	 document.getElementById("side-bar").style.transition=("all 9s")
}
// function showmonter(){
//      let montrer = document.getElementById("side-bar");
//             montrer.style.display="block";
     
// }
function hides(){
    
     document.getElementById("side-bar").style.display="none"


}
function hide(){
	
	 document.getElementById("side-bar").style.display="none"


}
function hides(){
    
     document.getElementById("side-bar").style.display="none"


}
function validation(){
	let seconnecter=document.getElementById("deconnecter");
       seconnecter=document.getElementById("deconnecter").innerHTML="envoyée avec succes"

		alert("votre requete à été envoyée avec succes")
}


        function agrandira(){
            var grandir = document.getElementById("affichgrand");
            var currHeight = grandir.clientHeight;
            // var currwidth = grandir.clientwidth;
                grandir.style.height = (currHeight + 250) + "px";
        }
        function zoomout() {
            var grandir = document.getElementById("affichgrand");
            var currHeight = grandir.clientHeight;
                grandir.style.height = (currHeight - 250) + "px";
        };

         var counter= 1;
          setInterval(function(){
            document.getElementById('radio' + counter).checked= true;
              counter++;
              if (counter > 4) {
                counter = 1;
              }
          }, 5000);
// function attation(){
// 	let at=document.getElementById("annuler");
// 	alert("vous voulez vous vraiment quitter ?")
// }



 function hides(){
    let caches = document.getElementById("creer-compte");
        caches.style.display='none'
 }
 function showmonter(){
    let block = document.getElementById("creer-compte");
        block.style.display="block";
}


let menulist = document.getElementById("menulist");
                    menulist.style.maxHeight = "0px";

                    function togglemenu() {
                        if (menulist.style.maxHeight == "0px")
                        {
                            menulist.style.maxHeight = "130px"
                        }
                        else
                        {
                            menulist.style.maxHeight = "0px"
                        }
                        
                    }