document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
 
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const icon = header.querySelector('i');
 
        if (accordionContent.style.display === 'none') {
          accordionContent.style.display = 'block';
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
        } else {
          accordionContent.style.display = 'none';
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        }
      });
    });
  });
 




$('.testi-slider').slick({
   infinite: true,
   slidesToShow: 8,
   slidesToScroll: 3,
   autoplay: true,
   autoplaySpeed: 800,
   responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       }
     ]
 });





 $('.ram').slick({
   slidesToShow: 5,
   slidesToScroll: 5,
   autoplay: true,
   autoplaySpeed: 800,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     }
   ]
 });