// Initialize Bootstrap tooltips if any
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function setFooterPushHeight() {
  var footer = document.querySelector('.footer-section');
  var push = document.querySelector('.footer-push');
  if (footer && push && footer.style.display !== 'none') {
    // Use getBoundingClientRect for more accurate height
    push.style.height = footer.getBoundingClientRect().height + 'px';
  } else if (push) {
    push.style.height = '0px';
  }
}

// Set on load, resize, and after scroll changes footer visibility
window.addEventListener('DOMContentLoaded', setFooterPushHeight);
window.addEventListener('load', setFooterPushHeight);
window.addEventListener('resize', setFooterPushHeight);
window.addEventListener('scroll', function() {
  var footer = document.querySelector('.footer-section');
  if (!footer) return;
  if (window.scrollY > 1000) {
    footer.style.display = '';
    // Wait for layout, then set push height
    setTimeout(setFooterPushHeight, 50);
  } else {
    footer.style.display = 'none';
    setFooterPushHeight();
  }
}); 