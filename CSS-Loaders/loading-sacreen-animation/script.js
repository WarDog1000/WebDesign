const loader = document.querySelector(".loader");
        window.onload = ()=> {
            setTimeout(function(){
                loader.style.opacity = "0";
                // loader.style.background = "red";
                setTimeout(function(){
                    loader.style.display = "none";// desaparece el loader completamente
                    
                }, 500);
            }, 1500);
        }