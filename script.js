const menu=document.querySelector(".menu")
    const humberger=document.querySelector(".humberger-icon")
    const body=document.querySelector(".contents")
    const icon=document.querySelector("i")
    icon.onclick=()=>{
        menu.classList.toggle("show")
        gsap.from("li",{opacity:0,duration:1,stagger:.5})
        if(icon.classList.contains("fa-bars")){
            icon.classList.remove("fa-bars")
            icon.classList.add("fa-times")
        }else{
             icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
        }
    }
    body.onclick=()=>{
        menu.classList.remove("show")
         icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
    }
    
//    const t1=gsap.timeline();
    gsap.from("h1",{y:100,duration:1.5})
    gsap.from(".butn",                {y:-900,duration:1,ease:"elastic",delay:1.5})
    
    
    