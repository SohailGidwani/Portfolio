function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('.frontend ul li, .backend ul li, .other ul li').forEach(pill => {
  pill.addEventListener('click', function() {
    // Collapse any expanded pills
    document.querySelectorAll('.frontend ul li.expanded, .backend ul li.expanded, .other ul li.expanded')
      .forEach(expandedPill => {
        if (expandedPill !== this) { // Check to avoid collapsing the currently clicked pill
          expandedPill.classList.remove('expanded');
        }
      });

    // Toggle the clicked pill
    this.classList.toggle('expanded');
  });
});


function typeEffect(element, text, speed, delay, callback) {
  setTimeout(() => {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else if (callback) {
        callback();
      }
    }
    typing();
  }, delay);
}

// Cursor effect
function blinkCursor(cursorElement) {
  cursorElement.classList.add('typing');
  function blink() {
    cursorElement.classList.toggle('typing');
    setTimeout(blink, 500);
  }
  blink();
}

// Get the elements by class name
const p1 = document.querySelector('.p1_index');
const h1 = document.querySelector('.title_index');
const p2 = document.querySelector('.p2_index');
const cursor = document.createElement('span');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Set initial typing speed
const typingSpeed = 180;

// Clear the text content and append cursor
p1.textContent = '';
p1.appendChild(cursor);
h1.textContent = '';
p2.textContent = '';

// Start typing the first line
typeEffect(p1, "Hello, I'm", typingSpeed, 0, () => {
  // Move cursor to the next line and start typing
  h1.appendChild(cursor);
  typeEffect(h1, "Sohail Gidwani", typingSpeed, 0, () => {
    // Move cursor to the next line and start typing
    p2.appendChild(cursor);
    typeEffect(p2, "Software Developer", typingSpeed, 0, () => {
      // Start blinking the cursor at the end
      blinkCursor(cursor);
    });
  });
});





