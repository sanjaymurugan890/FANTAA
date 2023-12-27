// Get the current window width
var screenWidth = window.innerWidth;

if (screenWidth < 600) {
  var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  }})
  
  tl.to("#fanta",{
    top: "150%",
    left: "0%"
  }, 'orange')
  tl.to("#orange2",{
    top:"160%",
    left: "18%"
  }, 'orange')
  tl.to("#orange",{
    width: "15%",
    top:"158%",
    right: "10%"
  }, 'orange')
  tl.to("#leaf",{
    top:"140%",
    rotate: "130deg",
    left: "70%"
  }, 'orange')
  tl.to("#leaf2",{
    top:"147%",
    rotate: "130deg",
    left: "2%"
  }, 'orange')

  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  }})
  
  tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
  }, 'ca')
  tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  }, 'ca')
  
  tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
  }, 'ca')
  tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
  }, 'ca')
  
  tl2.to("#orange2",{
    width:"24%",
    left: "33%",
    top: "236%"
  }, 'ca')
  tl2.to("#fanta",{
    width:"35%",
    top: "240%",
    left: "33%",
  }, 'ca')
} else if (screenWidth < 800) {
  var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
  }})
  
  tl.to("#fanta",{
    top: "141%",
    left: "0%"
  }, 'orange')
  tl.to("#orange2",{
    top:"158%",
    left: "18%"
  }, 'orange')
  tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
  }, 'orange')
  tl.to("#leaf",{
    top:"132%",
    rotate: "130deg",
    left: "70%"
  }, 'orange')
  tl.to("#leaf2",{
    top:"139%",
    rotate: "130deg",
    left: "1%"
  }, 'orange')
  
  
  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  }})
  
  tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
  }, 'ca')
  tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  }, 'ca')
  
  tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
  }, 'ca')
  tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
  }, 'ca')
  
  tl2.to("#orange2",{
    width:"25%",
    left: "33%",
    top: "224%"
  }, 'ca')
  tl2.to("#fanta",{
    width:"35%",
    top: "230%",
    left: "33%",
  }, 'ca')
  }
 else {
   
var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "0% 95%",
  end: "70% 50%",
  scrub: true,
  // markers: true,
}})

tl.to("#fanta",{
  top: "120%",
  left: "0%"
}, 'orange')
tl.to("#orange2",{
  top:"160%",
  left: "23%"
}, 'orange')
tl.to("#orange",{
  width: "15%",
  top:"160%",
  right: "10%"
}, 'orange')
tl.to("#leaf",{
  top:"110%",
  rotate: "130deg",
  left: "70%"
}, 'orange')
tl.to("#leaf2",{
  top:"110%",
  rotate: "130deg",
  left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".three",
  start: "0% 95%",
  end: "20% 50%",
  scrub: true,
  // markers: true,
}})

tl2.from(".lemon1",{
  rotate: "-90deg",
  left: "-100%",
  top: "110%"
}, 'ca')
tl2.from("#cocacola",{
  rotate: "-90deg",
  top: "110%",
  left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
  rotate: "90deg",
  left: "100%",
  top: "110%"
}, 'ca')
tl2.from("#pepsi",{
  rotate: "90deg",
  top: "110%",
  left: "100%",
}, 'ca')

tl2.to("#orange2",{
  width:"18%",
  left: "42%",
  top: "204%"
}, 'ca')
tl2.to("#fanta",{
  width:"35%",
  top: "210%",
  left: "33%",
}, 'ca')
}


