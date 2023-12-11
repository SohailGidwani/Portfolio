let lastScrollTop = 0;
navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    navBar.style.top = "-60px"; // Adjust according to navbar height
  } else {
    navBar.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Slightly more particles
        density: {
          enable: true,
          value_area: 800 // Same area, so they'll be a bit denser
        }
      },
      color: {
        value: "#ffffff" // Keeping them white
      },
      shape: {
        type: "circle", // Still simple circles
        // No need to change the stroke or polygon settings unless you want a different shape
      },
      opacity: {
        value: 0.5, // A moderate opacity so they're not too distracting
        random: false, // Consistent opacity for all particles
        anim: {
          enable: false, // No need to animate the opacity
        }
      },
      size: {
        value: 3, // A small size to keep them subtle
        random: true, // Random sizes for a bit of variety
        anim: {
          enable: false, // No size animation
        }
      },
      line_linked: {
        enable: false, // No lines linking them, to keep the background cleaner
      },
      move: {
        speed: 1, // Slower movement for a more relaxed effect
        random: true, // Random movement
        direction: "none", // No specific direction
        out_mode: "out", // They'll disappear at the edges
      }
    },
    interactivity: {
      detect_on: "window", // React to mouse events on the whole window
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // They'll move away from the cursor
        },
        onclick: {
          enable: false, // No effect on click to keep things simple
        },
        resize: true // Ensure it's responsive
      },
      modes: {
        repulse: {
          distance: 70, // A short distance from the cursor
          duration: 0.4 // Quick reaction to cursor movement
        }
      }
    },
    retina_detect: true // Better quality on retina displays
  });

  AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            // Collapse any expanded pills
            document.querySelectorAll('.skill-pill.expanded').forEach(expandedPill => {
                if (expandedPill !== this) {
                    expandedPill.classList.remove('expanded');
                }
            });

            // Toggle the clicked pill
            this.classList.toggle('expanded');
        });
    });
});

// Function to open modal
function openModal(modal) {
    if (modal == null) return;
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    if (modal == null) return;
    modal.style.display = 'none';
}

// Event listeners for opening modals
document.querySelectorAll('.highlight').forEach(highlight => {
    highlight.addEventListener('click', () => {
        const modal = document.querySelector(highlight.dataset.modalTarget);
        openModal(modal);
    });
});

// Event listeners for closing modals
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

// Event listener for clicking outside to close the modal
window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            closeModal(modal);
        });
    }
});

const codeElement = document.getElementById('code');
const codeLines = [
  `let lastScrollTop = 0;`,
  `navBar = document.querySelector("nav");`,
  ``,
  `window.addEventListener("scroll", () => {`,
  `  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;`,
  `  if (currentScroll > lastScrollTop) {`,
  `    navBar.style.top = "-60px"; // Adjust according to navbar height`,
  `  } else {`,
  `    navBar.style.top = "0";`,
  `  }`,
  `  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling`,
  `}, false);`,
  ``,
  `particlesJS("particles-js", {`,
  `    particles: {`,
  `      number: {`,
  `        value: 100, // Slightly more particles`,
  `        density: {`,
  `          enable: true,`,
  `          value_area: 800 // Same area, so they'll be a bit denser`,
  `        }`,
  `      },`,
  `      color: {`,
  `        value: "#ffffff" // Keeping them white`,
  `      },`,
  `      shape: {`,
  `        type: "circle", // Still simple circles`,
  `        // No need to change the stroke or polygon settings unless you want a different shape`,
  `      },`,
  `      opacity: {`,
  `        value: 0.5, // A moderate opacity so they're not too distracting`,
  `        random: false, // Consistent opacity for all particles`,
  `        anim: {`,
  `          enable: false, // No need to animate the opacity`,
  `        }`,
  `      },`,
  `      size: {`,
  `        value: 3, // A small size to keep them subtle`,
  `        random: true, // Random sizes for a bit of variety`,
  `        anim: {`,
  `          enable: false, // No size animation`,
  `        }`,
  `      },`,
  `      line_linked: {`,
  `        enable: false, // No lines linking them, to keep the background cleaner`,
  `      },`,
  `      move: {`,
  `        speed: 1, // Slower movement for a more relaxed effect`,
  `        random: true, // Random movement`,
  `        direction: "none", // No specific direction`,
  `        out_mode: "out", // They'll disappear at the edges`,
  `      }`,
  `    },`,
  `    interactivity: {`,
  `      detect_on: "window", // React to mouse events on the whole window`,
  `      events: {`,
  `        onhover: {`,
  `          enable: true,`,
  `          mode: "repulse" // They'll move away from the cursor`,
  `        },`,
  `        onclick: {`,
  `          enable: false, // No effect on click to keep things simple`,
  `        },`,
  `        resize: true // Ensure it's responsive`,
  `      },`,
  `      modes: {`,
  `        repulse: {`,
  `          distance: 70, // A short distance from the cursor`,
  `          duration: 0.4 // Quick reaction to cursor movement`,
  `        }`,
  `      }`,
  `    },`,
  `    retina_detect: true // Better quality on retina displays`,
  `  });`,
  ``,
  `AOS.init({`,
  `    duration: 1200, // values from 0 to 3000, with step 50ms`,
  `    once: true, // whether animation should happen only once - while scrolling down`,
  `});`,
  ``,
  `document.addEventListener('DOMContentLoaded', () => {`,
  `    document.querySelectorAll('.skill-pill').forEach(pill => {`,
  `        pill.addEventListener('click', function() {`,
  `            // Collapse any expanded pills`,
  `            document.querySelectorAll('.skill-pill.expanded').forEach(expandedPill => {`,
  `                if (expandedPill !== this) {`,
  `                    expandedPill.classList.remove('expanded');`,
  `                }`,
  `            });`,
  ``,
  `            // Toggle the clicked pill`,
  `            this.classList.toggle('expanded');`,
  `        });`,
  `    });`,
  `});`,
  ``,
  `// Function to open modal`,
  `function openModal(modal) {`,
  `    if (modal == null) return;`,
  `    modal.style.display = 'block';`,
  `}`,
  ``
];
let line = 0;
let pos = 0;
let currentContent = '';
let isDeleting = false;

function typeCode() {
    if (line < codeLines.length) {
        if (!isDeleting && pos <= codeLines[line].length) {
            currentContent = codeLines[line].substring(0, pos++);
            codeElement.textContent = currentContent;
        } else {
            isDeleting = true;
            currentContent = codeLines[line].substring(0, pos--);
            codeElement.textContent = currentContent;

            if (pos === 0) {
                isDeleting = false;
                line++;
                if (line === codeLines.length) {
                    line = 0; // Start over
                }
            }
        }
    }
    setTimeout(typeCode, isDeleting ? 50 : 150); // Deleting is faster
}

typeCode();

