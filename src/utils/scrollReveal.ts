
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
};
