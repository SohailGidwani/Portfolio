function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// document.addEventListener("DOMContentLoaded", () => {
//     const navLinks = document.querySelectorAll('nav a');
//     const mainContent = document.querySelector('main'); // Adjust this selector based on your HTML structure

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const url = this.getAttribute('href');
            
//             fetch(url)
//                 .then(response => response.text())
//                 .then(html => {
//                     const newContent = new DOMParser().parseFromString(html, 'text/html');
                    
//                     // Slide out current content
//                     mainContent.classList.add('slide-out');

//                     setTimeout(() => {
//                         // Replace content and slide in
//                         mainContent.innerHTML = newContent.querySelector('main').innerHTML; // Replace 'main' with the correct container
//                         mainContent.classList.remove('slide-out');
//                         mainContent.classList.add('slide-in');

//                         setTimeout(() => mainContent.classList.remove('slide-in'), 500);
//                     }, 500);

//                     history.pushState({}, '', url);
//                 });
//         });
//     });

//     window.addEventListener('popstate', () => {
//         window.location.reload();
//     });
// });


