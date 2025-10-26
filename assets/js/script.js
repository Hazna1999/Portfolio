const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
      navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
      navLinks.classList.remove('bg-white','shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.add('bg-white','shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }
})


// light mode and dark mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// 2️⃣ Toggle dark/light mode on button click
function toggleTheme() {
  document.documentElement.classList.toggle('dark');

  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

// Projects Show More
const showMoreBtn = document.getElementById("show-more-btn");
const projectItems = Array.from(document.querySelectorAll(".project-item"));
let visibleCount = 4; // initial visible projects

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", (e) => {
      e.preventDefault(); // <-- Prevent page jump
    // Show next 4 hidden projects
    const hiddenItems = projectItems.filter(item => item.classList.contains("hidden"));
    hiddenItems.slice(0, 4).forEach(item => item.classList.remove("hidden"));

    // Update visible count
    visibleCount += 4;

    // Hide button if all projects are visible
    if (visibleCount >= projectItems.length) {
      showMoreBtn.style.display = "none";
    }
  });
}
