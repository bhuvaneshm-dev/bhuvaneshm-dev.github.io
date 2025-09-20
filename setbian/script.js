// Download button logic for Setbian
const downloadBtn = document.getElementById('downloadBtn');
const downloadIcon = document.getElementById('downloadIcon');
const thankYouMessage = document.getElementById('thankYouMessage');
const stepByStepCommands = document.getElementById('stepByStepCommands');
const thankYouStandalone = document.getElementById('thankYouStandalone');

if (downloadBtn) {
  // Button hover/active effects are handled by CSS

  // Icon spin animation
  let spinInterval = null;
  const spinDuration = 600;
  const intervalTime = 10;

  function startSpinAnimation() {
    let currentRotation = 0;
    const totalSteps = spinDuration / intervalTime;
    const rotationPerStep = 360 / totalSteps;
    if (spinInterval) clearInterval(spinInterval);
    spinInterval = setInterval(() => {
      currentRotation += rotationPerStep;
      if (currentRotation >= 360) {
        currentRotation = 360;
        clearInterval(spinInterval);
        spinInterval = null;
      }
      downloadIcon.style.transform = `rotate(${currentRotation}deg)`;
    }, intervalTime);
  }

  function stopSpinAnimation() {
    if (spinInterval) clearInterval(spinInterval);
    downloadIcon.style.transform = 'rotate(0deg)';
  }

  downloadBtn.addEventListener('click', function(event) {
    event.preventDefault();
    startSpinAnimation();
    setTimeout(() => {
      stopSpinAnimation();
      thankYouMessage.style.display = 'block';
      if (stepByStepCommands) stepByStepCommands.style.display = 'block';
      if (thankYouStandalone) thankYouStandalone.style.display = 'block';
      window.location.href = 'https://github.com/bhuvanesh-m-dev/setbian/releases/download/v0.0.3/setbian-0.0.3.deb';
    }, 800);
  });
}
// Copy-to-clipboard for step-by-step commands
document.addEventListener('DOMContentLoaded', function() {
  var stepCopyBtns = document.querySelectorAll('.copyStepBtn');
  stepCopyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var cmdId = btn.getAttribute('data-cmd');
      var cmdElem = document.getElementById(cmdId);
      if (cmdElem) {
        navigator.clipboard.writeText(cmdElem.innerText).then(function() {
          var oldText = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(function() { btn.textContent = oldText; }, 3000);
        });
      }
    });
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Up Arrow Button logic and smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Up Arrow Button
  const upArrowBtn = document.getElementById('upArrowBtn');
  if (upArrowBtn) {
    upArrowBtn.style.display = 'none';
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        upArrowBtn.style.display = 'flex';
      } else {
        upArrowBtn.style.display = 'none';
      }
    });
    upArrowBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for anchor links
  const smoothLinks = [
    'a[href="#features"]',
    'a[href="#how-it-works"]',
    'a[href="#install"]',
    'a[href="#get-started"]',
    'a[href="#learn-more"]',
    // Add more selectors if needed
  ];
  document.querySelectorAll(smoothLinks.join(',')).forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});