const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
    
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper1'));
// observer.observe(document.querySelector('.square-wrapper2'));
// observer.observe(document.querySelector('.square-wrapper3'));
// observer.observe(document.querySelector('.square-wrapper4'));
// observer.observe(document.querySelector('.square-wrapper5'));




// const options = {
//     root: document.body,
//     rootMargin: '0px',
//     threshold: 0
//   }
  
//   function callback (entries, observer) {
//     console.log(observer);
    
//     entries.forEach(entry => {
//       console.log(entry);
//     });
//   }
  
//   let observer = new IntersectionObserver(callback, options);
//   observer.observe(targetElement);