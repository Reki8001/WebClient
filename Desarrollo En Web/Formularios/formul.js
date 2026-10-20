window.addEventListener("load", function(){

    localStorage.getItem("color")?(

        colorPreferencia=localStorage.getItem("color"), tipografiaPreferencia=localStorage.getItem("tipografia"), tamanoPreferencia=localStorage.getItem("tamano"),
        document.querySelector("main").style.color=colorPreferencia, document.querySelector("#BOX").style.fontFamily=tipografiaPreferencia, document.getElementById("BOX").style.fontSize=tamanoPreferencia+"px"):null;
        
        document.forms[0].addEventListener("submit", function(){

        event.preventDefault();
        colorFormulario=document.forms[0].elements[0].value;
        tamanoFormulario=tamano.value;
        tipografiaFormulario=tipografia.options[tipografia.options.selectedIndex].value;
        console.log(colorFormulario+ "/"+tamanoFormulario+"/"+ tipografiaFormulario);
        localStorage.setItem("color", colorFormulario);
        localStorage.setItem("tamano", tamanoFormulario);
        localStorage.setItem("tipografia", tipografia);

        BOX.style.color=colorFormulario;
        BOX.style.fontFamily=tipografiaFormulario;
    })
})