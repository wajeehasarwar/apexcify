

  let service_card=document.querySelectorAll(".service-card")
  let answers=document.querySelectorAll(".faq-item")
  let p=document.querySelectorAll(".pera")
  let btn=document.querySelectorAll(".faq-btn")


    window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  service_card.forEach(function(element){
    element.addEventListener('mouseover', function(){
        if(!element.querySelector(".arrow")){
          let arrow=document.createElement("p")
          arrow.innerText="→"
          arrow.classList.add("arrow")
          element.appendChild(arrow)
      }
    })
    element.addEventListener("mouseout",function(){
      let arrow=element.querySelector(".arrow")
        if(arrow){
          arrow.remove()
        }
    })
  })

 answers.forEach(function(answer,index){
    let para=p[index]
    let button=btn[index]
   answer.addEventListener("click",function(){
      if (para.innerText !== "") {
      para.innerText = "";
      button.innerText = "▼";
      return;
    }
    p.forEach(p=>p.innerText="")
    btn.forEach(btn=>btn.innerText="▼")
    
    if(index===0){
     para.innerText="We create a variety of websites,\n from corporate and e-commerce sites to personal and portfolio websites, tailored to meet your specific goals and audience needs."
    }
    else if(index===1){
      para.innerText= "Yes, we specialize in both web and mobile application development, delivering seamless experiences across devices with user-focused design and functionality."
    }
    else if(index===2){
      para.innerText= "Absolutely! In today’s digital landscape, a website is essential for building credibility, reaching a wider audience, and providing customers with easy access to your products or services. A well-designed website acts as a central hub for your online presence, helping you stand out from competitors and build trust with potential clients. Whether you’re a small business, a professional, or a larger enterprise, a website is a powerful tool for growth and engagement."
    }else if(index===3){
      para.innerText="Yes, we provide SEO and digital marketing services to help your website rank higher and reach a wider audience, driving growth for your business."
    }
    button.innerText="▲"
    
   })
 })
