/* 
  Zilo Marketing - Script
  Functionality: Smooth Scroll, Tracking
*/

document.addEventListener('DOMContentLoaded', () => {
  console.log('Zilo Engine Initialized.');

  // Smooth Scroll fallback for older browsers (though CSS handles most)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Tracking click
        console.log(`Navigating to: ${targetId}`);
      }
    });
  });

  // Track CTA Clicks
  const ctaButtons = document.querySelectorAll('.btn, .nav-cta');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(`CTA Clicked: ${btn.textContent}`);
    });
  });

  // Performance Log
  window.addEventListener('load', () => {
    // Check performance API availability
    if (window.performance) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`Page Load Time: ${loadTime}ms`);
    }
  });
});
