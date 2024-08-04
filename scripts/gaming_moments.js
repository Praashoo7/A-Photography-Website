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

// /*---------------------------------------------------------------------- INTERNET_LOAD ----------------------------------------------------------------------*/


// function load1(){

//   var isOnLine = navigator.onLine;
//         if (isOnLine) {
//           $("[id='loading']").css({"opacity":"1"});
//         }
//         else{
//           $("[id='loading']").css({"opacity":"0"});
//         }
// }


const data = [
  { id: 1, src: "https://drive.google.com/thumbnail?id=1_qSgaM7cevrqLuj4w8kXrGFPLMUqI7Ub&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 2, src: "https://drive.google.com/thumbnail?id=1CroTcTvepkw9PeauvWybTMFnRh4MX8Hs&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 3, src: "https://drive.google.com/thumbnail?id=19oHudXyyqHgDCjpqlUdCFIux6F0dmLek&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 4, src: "https://drive.google.com/thumbnail?id=11J8PHCj2gmDy5_wYQ9OTa2Z4ckAZWbEY&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 5, src: "https://drive.google.com/thumbnail?id=1qSI3VyaTZ5rea8B2JGtpIJAFKjh-LDXY&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 6, src: "https://drive.google.com/thumbnail?id=1ADjEzJwLQnH3911ezGc2-me7MHKnk1yH&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 7, src: "https://drive.google.com/thumbnail?id=1waACHzwq8DVhlkFFgl1EI-_uABR-d9aV&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 8, src: "https://drive.google.com/thumbnail?id=13r6I10uXs9wohlzsKjouw9U1tjiIh93R&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 9, src: "https://drive.google.com/thumbnail?id=1PMlH3Ibnzj5FBcDuUl768N8n6Pbg5oh4&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 10, src: "https://drive.google.com/thumbnail?id=1_WQZEVeCvuaNczMnLg2QrQpkwBwEHl7p&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 11, src: "https://drive.google.com/thumbnail?id=1ImciP2YjLpXTSIJDcLyt3Edk9dpd-ujI&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 12, src: "https://drive.google.com/thumbnail?id=1f_Cvky0xS7HTcDhsol1Y2q4hOwpe2QWZ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 13, src: "https://drive.google.com/thumbnail?id=1ED2g2womafQ0ne87kOoGV-0pDSFQhP8e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 14, src: "https://drive.google.com/thumbnail?id=18IPaTA0wSeuXkMzJoDCcLTb2AtZ53erg&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 15, src: "https://drive.google.com/thumbnail?id=1ikSImhdnbUK0Q6UXUZn9NZMeSbjCzOXQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 16, src: "https://drive.google.com/thumbnail?id=1xC0yz00zPjl3IRBBSblYXDsEAsavMGjL&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 17, src: "https://drive.google.com/thumbnail?id=1WRTGSeDs-1jgzOyn66yc8HyA-7E6_I_5&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 18, src: "https://drive.google.com/thumbnail?id=1dQaaUiNlELRLwOKWXB45XO1HewKolvuQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 19, src: "https://drive.google.com/thumbnail?id=1s9oIZdzIO2H2kzZV6P7lP2DaxayFwC0Y&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 20, src: "https://drive.google.com/thumbnail?id=1Sq0HPvnKpZdf8KamXEuNfzGOFhKUW1l4&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 21, src: "https://drive.google.com/thumbnail?id=18_HZSaeyir20OLpaj-4owKRRDVNYMqfJ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 22, src: "https://drive.google.com/thumbnail?id=1vpQkJSzJ-3skxHdo5svVRL4iclcAttVQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 23, src: "https://drive.google.com/thumbnail?id=1YTdntWmZGLCipysv8rE-qzb6X-Zd2by1&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 24, src: "https://drive.google.com/thumbnail?id=106WWKeKI6ItSzwd1w_ZIoIQbDCSATQky&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 25, src: "https://drive.google.com/thumbnail?id=1X50i6sbFtweG7_6_McfK6uhMSUqRnibR&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 26, src: "https://drive.google.com/thumbnail?id=1hJed4tLwWYkmbbqDBzmeoxV4Ub3686bE&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 27, src: "https://drive.google.com/thumbnail?id=1ooEwkIK2BQw0J6VqWNvu95e3tXJ4LLtI&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 28, src: "https://drive.google.com/thumbnail?id=18rSIapaOu7DDT5nR8JjT7LnUgxlHZoak&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 29, src: "https://drive.google.com/thumbnail?id=1moGfY6wo2HS0Si0ooeSCdOxpeXQuCwye&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 30, src: "https://drive.google.com/thumbnail?id=1qYkpZm94zOClFG0jD_o_8zPVCnlKfhhm&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 31, src: "https://drive.google.com/thumbnail?id=1lOWPK8rZhhaw2HThW7okTVfFQjPkGTZC&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 32, src: "https://drive.google.com/thumbnail?id=1rYNkaS2lUX8QUZP71NAxtXhwOe5J3j9Z&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 33, src: "https://drive.google.com/thumbnail?id=1NLDCIfpIzgZc1PTbOBXNZp-VJa5eqIxV&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 34, src: "https://drive.google.com/thumbnail?id=1Y0zyeMUuMc_VwAxm3-xBcz2iBSDMj2iO&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 35, src: "https://drive.google.com/thumbnail?id=1xIoh4Wly2KmVIx4AGB3gJBGnr3lC2MQF&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 36, src: "https://drive.google.com/thumbnail?id=13qL52SfpUE6hPN-3K65L_cxvo-V5DE5O&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 37, src: "https://drive.google.com/thumbnail?id=1nNk2CGwRSLVVOtJ5tuWO-F1pUFFNfDUZ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 38, src: "https://drive.google.com/thumbnail?id=1A4Gkv9L_ISur6JgdRBQstxaJJtCp2C1e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 39, src: "https://drive.google.com/thumbnail?id=1DXC3-Qt7jIvpFFwAc3QXD52EX25kITB_&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 40, src: "https://drive.google.com/thumbnail?id=1HYovGtQNVz4R6jhOmP3eJvVhBbFo3yRN&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 41, src: "https://drive.google.com/thumbnail?id=1qswuVC8QOU1ewcIatp9RPojQBdBQ0nYw&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 42, src: "https://drive.google.com/thumbnail?id=1udCfR5AqzNQTlXPay_oZyCJxm-LRXpYX&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 43, src: "https://drive.google.com/thumbnail?id=1fw-_1UhDP_o0HxLNDDvjHzvYOG6ps1RT&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 44, src: "https://drive.google.com/thumbnail?id=14lRCF42raOUOmJjOhoXGgLjkUnfVGQ_v&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 45, src: "https://drive.google.com/thumbnail?id=1GRo7K38BY9cYTt1KSMXZsgE9hznlMf_H&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 46, src: "https://drive.google.com/thumbnail?id=1Oj-Fl_JBCXgvwFeVAxiX37XRmHwrbrZr&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 47, src: "https://drive.google.com/thumbnail?id=1P6lnOqaUZD48zROJUAkVe3uJqOyzSvIi&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 48, src: "https://drive.google.com/thumbnail?id=1lehapfvaYTPQoV3RDU_mD9eAGC0ztSRN&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 49, src: "https://drive.google.com/thumbnail?id=12Q4ktKlW5ZuZgisCH0lJ7VWCMMQcWlk3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 50, src: "https://drive.google.com/thumbnail?id=19MEBnGRc7XuW2bXKRvv9gf9DZzv2k684&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 51, src: "https://drive.google.com/thumbnail?id=1awVgBPkIOc3r4n_uavDVKMpxpjH5fVVi&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 52, src: "https://drive.google.com/thumbnail?id=18jzjDBaySZO5eUY872UXsOOybuQ73COp&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 53, src: "https://drive.google.com/thumbnail?id=1kUoeX2OY8D0lGDG9QYosSOZHzYY9TCbB&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 54, src: "https://drive.google.com/thumbnail?id=1ZFOS27a-YDHcGj8saAqlx_J4LKefx2i3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 55, src: "https://drive.google.com/thumbnail?id=1nslYXjzfCUWp-yvApxcJddyMvvK7e73e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 56, src: "https://drive.google.com/thumbnail?id=1YYy0ShrKgFbsNFKPJYw1dzDdRfbn2eLv&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 57, src: "https://drive.google.com/thumbnail?id=1gveJDh0Qaa847NhfWQB6H_QBHpGOUwKT&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 58, src: "https://drive.google.com/thumbnail?id=1__sx-ABX8cxmvq7S2ZG7cYE6TOsGkqDC&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 59, src: "https://drive.google.com/thumbnail?id=1EOFE5rLUMTvkS8HBKX3IFldL7CrC2Axx&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 60, src: "https://drive.google.com/thumbnail?id=11_m_uFGxByWphxN9-QNmK_3kpMkA5Bhh&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 61, src: "https://drive.google.com/thumbnail?id=1ZpEU7xWK2GvkrvMkSxoC6W_bb5H-Q-_d&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 62, src: "https://drive.google.com/thumbnail?id=1cxnb21SMceCWwketDOlBoFT61Fpgwia9&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 63, src: "https://drive.google.com/thumbnail?id=1F1_lDG3iootZQLAaBICQ2eWFoWFduHat&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 64, src: "https://drive.google.com/thumbnail?id=1wdBs7SnuGAlmmrnzft-SEnyK8Ke2m6_Z&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 65, src: "https://drive.google.com/thumbnail?id=1qB4K14vrfFL8Ve5ZgPqw4CRaJByJlxj9&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 66, src: "https://drive.google.com/thumbnail?id=1x6_oLhuoVX9-tKvDk47sjeoVu4cHuSwa&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 67, src: "https://drive.google.com/thumbnail?id=1nRWXUVeCIYFdXKjduQ6s4X6IDDQD1oom&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 68, src: "https://drive.google.com/thumbnail?id=1YNQ-JlH8MXmtpUMg13fMYKeP-SwYyh-Q&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 69, src: "https://drive.google.com/thumbnail?id=1LjZs4fHuNf4HXoP1490OZsRJ6o7HG9r3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 70, src: "https://drive.google.com/thumbnail?id=1mkg9h1MH4i-7RfpC-DE8SmBsruRLVXQ5&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 71, src: "https://drive.google.com/thumbnail?id=17TNABoOnwR4LjtCygGcMzW8JbPkJxBGP&sz=w1000", game: "Watch Dogs", location: "None" }
];


let photos = data.map((values) => {
  return `<div class="i">
        <div class="image-container">
            <p class="ih" id="loading">Loading..</p>
            <img src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
              <div class="info">
                  <div class="tab">
                      <input type="checkbox" id="chck${values.id}">
                      <label class="tab-label" for="chck${values.id}">Info</label>
                      <div class="tab-content">
                      Game : ${values.game}<br>
                      Location : ${values.location}<br>
                      </div>
                  </div>
              </div>
              <a href="${values.src}" download="PhotographyHood(Gaming-Moments)-${values.id}">
              <div class="download">
                  <i class="bi bi-download" style="margin-left: 0.25em;"></i>
              </div>
              </a>
              </div>
        </div>
    </div>`
})

document.getElementById("photos").innerHTML = photos.join("");