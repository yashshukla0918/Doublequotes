

// Create the observer, same as before:
const observer1 = new IntersectionObserver(entries => {
  let square = document.querySelector('.square1');
  let p1 = document.querySelector('.p1'); 
  p1.classList.remove('animate__animated');  
  p1.classList.remove('animate__zoomInUp'); 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      p1.classList.add('animate__animated');  
  p1.classList.add('animate__zoomInUp');
      return;
    }
    else{
      square.classList.remove('square-transition');
      p1.classList.remove('animate__animated');  
  p1.classList.remove('animate__zoomInUp');
  
    }
    
  });
});










const observer2 = new IntersectionObserver(entries => {
  let square1 = document.querySelector('.square2');
  let p2 = document.querySelector('.p2'); 
  p2.classList.remove('animate__animated');  
  p2.classList.remove('animate__backInRight');
  square1.classList.remove('square-transition'); 
  $('.v0').removeClass('animate__animated animate__backInLeft')   
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     
      square1.classList.add('square-transition');
      p2.classList.add('animate__animated');  
  p2.classList.add('animate__backInRight');
  $('.v0').addClass('animate__animated animate__backInLeft')
      return;
    }
    else{
      square1.classList.remove('square-transition');
      p2.classList.remove('animate__animated');  
  p2.classList.remove('animate__backInRight');
  $('.v0').removeClass('animate__animated animate__backInLeft')
    }
    
  });
});
















const observer3 = new IntersectionObserver(entries => {
  let square3 = document.querySelector('.square3');
  square3.classList.remove('square-transition'); 
  $('.ban').removeClass('animate__animated animate__tada animate__repeat-2');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
   
      square3.classList.add('square-transition');
      $('.ban').addClass('animate__animated animate__tada animate__repeat-2');
      return;
    }
    else{
      square3.classList.remove('square-transition');
      $('.ban').removeClass('animate__animated animate__tada animate__repeat-2');
    }
    
  });
});




const observer4 = new IntersectionObserver(entries => {
  let square4 = document.querySelector('.square4');
  let p3 = document.querySelector('.p3');
  p3.classList.remove('animate__animated');  
  p3.classList.remove('animate__backInRight'); 
  square4.classList.remove('square-transition');
  $('.v1').removeClass('animate__animated animate__backInLeft');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square4.classList.add('square-transition');
      p3.classList.add('animate__animated');  
      p3.classList.add('animate__backInRight');
      $('.v1').addClass('animate__animated animate__backInLeft');
      return;
    }
    else{
      square4.classList.remove('square-transition');
      p3.classList.remove('animate__animated');  
      p3.classList.remove('animate__backInRight');
      $('.v1').removeClass('animate__animated animate__backInLeft');
    }
    
  });
});


const observer5 = new IntersectionObserver(entries => {
  let square5 = document.querySelector('.square5');
  let p4 = document.querySelector('.p4');
  square5.classList.remove('square-transition');
  p4.classList.remove('animate__animated');  
  p4.classList.remove('animate__backInLeft');   
  $('.v2').removeClass('animate__animated animate__backInRight');  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square5.classList.add('square-transition');
      p4.classList.add('animate__animated');  
      p4.classList.add('animate__backInLeft'); 
      $('.v2').addClass('animate__animated animate__backInRight');
      return;
    }
    else{
      square5.classList.remove('square-transition');
      p4.classList.remove('animate__animated');  
      p4.classList.remove('animate__backInLeft'); 
      $('.v2').removeClass('animate__animated animate__backInRight');
    }
    
  });
});
const observer6 = new IntersectionObserver(entries => {
  let square6 = document.querySelector('.x');
  square6.classList.remove('animated-title');    
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square6.classList.add('animated-title');
      return;
    }
    else{
      square6.classList.remove('animated-title');
    }
    
  });
});

observer1.observe(document.querySelector('.square-wrapper1'));

observer2.observe(document.querySelector('.square-wrapper2'));
observer3.observe(document.querySelector('.square-wrapper3'));

observer4.observe(document.querySelector('.square-wrapper4'));

observer5.observe(document.querySelector('.square-wrapper5'));
observer6.observe(document.querySelector('.xxx'));



let ele = document.querySelector('.x');
setInterval(() => {
  setTimeout(() => {
    $('.x').css('display','block');
    ele.classList.add('animated-title');
  }, 500);
  setTimeout(() => {
    ele.classList.remove('animated-title');
    $('.x').css('display','none');
  }, 3500);
  
}, 4000);