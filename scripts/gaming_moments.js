/*---------------------------------------------------------------------- THEME_SWITCH_START ----------------------------------------------------------------------*/

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
// store user preference for future visits
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById("namee").innerHTML="Light Mode";
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById("namee").innerHTML="Dark Mode";
      localStorage.setItem('theme', 'light'); //add this
  }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById("namee").innerHTML="Light Mode";
    }
    else if (currentTheme === 'light') {
        document.getElementById("namee").innerHTML="Dark Mode";
    }
}

/*---------------------------------------------------------------------- TEXT_SHADOW_CURSOR ----------------------------------------------------------------------*/

const p = document.querySelector('span');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const MAX_SHADOW_OFFSET = 30;

const paint = (x, y) => {
  const r = p.getBoundingClientRect();
  const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET); // compute max shadow offset
  
  const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2; // compute element bb midpoints.
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
  const ny = (my - py) / (r.bottom - r.top + 2 * o); 
  
  requestAnimationFrame(() => {
    p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px hsl(210, 1%, 62%)`;
  });
};

document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
  passive: true
});

/*---------------------------------------------------------------------- SCROLL_TO_TOP ----------------------------------------------------------------------*/

window.addEventListener('scroll', e => {
  var el = document.getElementById('jsScroll');
  if(window.scrollY > 200) {
    el.classList.add('visible');
  } else {
    el.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/*---------------------------------------------------------------------- INTERNET_LOAD ----------------------------------------------------------------------*/


function load1(){

  var isOnLine = navigator.onLine;
        if (isOnLine) {
          $("[id='loading']").css({"opacity":"1"});
        }
        else{
          $("[id='loading']").css({"opacity":"0"});
        }
}