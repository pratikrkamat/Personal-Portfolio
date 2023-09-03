ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay: 100
   });
   
ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });
ScrollReveal().reveal(".home-img, .service-container, .portfolio-box, .contact form" ,{ origin: 'bottom' });
ScrollReveal().reveal(".home-content h1,.about-img" ,{ origin: 'left' });
ScrollReveal().reveal(".home-content p,.about-content" ,{ origin: 'right' });
