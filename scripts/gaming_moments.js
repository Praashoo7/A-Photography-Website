/*------------------------- THEME_SWITCH_START -------------------------*/

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
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById("namee").innerHTML="Light Mode";
      localStorage.setItem('theme', 'dark');
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById("namee").innerHTML="Dark Mode";
      localStorage.setItem('theme', 'light');
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

/*--------------------------- TEXT_SHADOW_CURSOR ---------------------------*/

const p = document.querySelector('span');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const MAX_SHADOW_OFFSET = 30;

const paint = (x, y) => {
  const r = p.getBoundingClientRect();
  const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET);
  
  const mx = clamp(x, r.left - o, r.right + o);
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2;
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o);
  const ny = (my - py) / (r.bottom - r.top + 2 * o); 
  
  requestAnimationFrame(() => {
    p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px var(--heading-shadow-color)`;
  });
};

document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
  passive: true
});

/*------------------------------- SCROLL_TO_TOP -------------------------------*/

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

// /*------------------------------ INTERNET_LOAD ------------------------------*/


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
  { id: 1, isTall: false ,src: "https://drive.google.com/thumbnail?id=1_qSgaM7cevrqLuj4w8kXrGFPLMUqI7Ub&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 2, isTall: false ,src: "https://drive.google.com/thumbnail?id=1CroTcTvepkw9PeauvWybTMFnRh4MX8Hs&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 3, isTall: false ,src: "https://drive.google.com/thumbnail?id=19oHudXyyqHgDCjpqlUdCFIux6F0dmLek&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 4, isTall: false ,src: "https://drive.google.com/thumbnail?id=11J8PHCj2gmDy5_wYQ9OTa2Z4ckAZWbEY&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 5, isTall: false ,src: "https://drive.google.com/thumbnail?id=1qSI3VyaTZ5rea8B2JGtpIJAFKjh-LDXY&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 6, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ADjEzJwLQnH3911ezGc2-me7MHKnk1yH&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 7, isTall: false ,src: "https://drive.google.com/thumbnail?id=1waACHzwq8DVhlkFFgl1EI-_uABR-d9aV&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 8, isTall: false ,src: "https://drive.google.com/thumbnail?id=13r6I10uXs9wohlzsKjouw9U1tjiIh93R&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 9, isTall: false ,src: "https://drive.google.com/thumbnail?id=1PMlH3Ibnzj5FBcDuUl768N8n6Pbg5oh4&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 10, isTall: false ,src: "https://drive.google.com/thumbnail?id=1_WQZEVeCvuaNczMnLg2QrQpkwBwEHl7p&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 11, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ImciP2YjLpXTSIJDcLyt3Edk9dpd-ujI&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 12, isTall: false ,src: "https://drive.google.com/thumbnail?id=1f_Cvky0xS7HTcDhsol1Y2q4hOwpe2QWZ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 13, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ED2g2womafQ0ne87kOoGV-0pDSFQhP8e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 14, isTall: false ,src: "https://drive.google.com/thumbnail?id=18IPaTA0wSeuXkMzJoDCcLTb2AtZ53erg&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 15, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ikSImhdnbUK0Q6UXUZn9NZMeSbjCzOXQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 16, isTall: false ,src: "https://drive.google.com/thumbnail?id=1xC0yz00zPjl3IRBBSblYXDsEAsavMGjL&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 17, isTall: false ,src: "https://drive.google.com/thumbnail?id=1WRTGSeDs-1jgzOyn66yc8HyA-7E6_I_5&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 18, isTall: false ,src: "https://drive.google.com/thumbnail?id=1dQaaUiNlELRLwOKWXB45XO1HewKolvuQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 19, isTall: false ,src: "https://drive.google.com/thumbnail?id=1s9oIZdzIO2H2kzZV6P7lP2DaxayFwC0Y&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 20, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Sq0HPvnKpZdf8KamXEuNfzGOFhKUW1l4&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 21, isTall: false ,src: "https://drive.google.com/thumbnail?id=18_HZSaeyir20OLpaj-4owKRRDVNYMqfJ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 22, isTall: false ,src: "https://drive.google.com/thumbnail?id=1vpQkJSzJ-3skxHdo5svVRL4iclcAttVQ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 23, isTall: false ,src: "https://drive.google.com/thumbnail?id=1YTdntWmZGLCipysv8rE-qzb6X-Zd2by1&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 24, isTall: false ,src: "https://drive.google.com/thumbnail?id=106WWKeKI6ItSzwd1w_ZIoIQbDCSATQky&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 25, isTall: false ,src: "https://drive.google.com/thumbnail?id=1X50i6sbFtweG7_6_McfK6uhMSUqRnibR&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 26, isTall: false ,src: "https://drive.google.com/thumbnail?id=1hJed4tLwWYkmbbqDBzmeoxV4Ub3686bE&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 27, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ooEwkIK2BQw0J6VqWNvu95e3tXJ4LLtI&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 28, isTall: false ,src: "https://drive.google.com/thumbnail?id=18rSIapaOu7DDT5nR8JjT7LnUgxlHZoak&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 29, isTall: false ,src: "https://drive.google.com/thumbnail?id=1moGfY6wo2HS0Si0ooeSCdOxpeXQuCwye&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 30, isTall: false ,src: "https://drive.google.com/thumbnail?id=1qYkpZm94zOClFG0jD_o_8zPVCnlKfhhm&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 31, isTall: false ,src: "https://drive.google.com/thumbnail?id=1lOWPK8rZhhaw2HThW7okTVfFQjPkGTZC&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 32, isTall: false ,src: "https://drive.google.com/thumbnail?id=1rYNkaS2lUX8QUZP71NAxtXhwOe5J3j9Z&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 33, isTall: false ,src: "https://drive.google.com/thumbnail?id=1NLDCIfpIzgZc1PTbOBXNZp-VJa5eqIxV&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 34, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Y0zyeMUuMc_VwAxm3-xBcz2iBSDMj2iO&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 35, isTall: false ,src: "https://drive.google.com/thumbnail?id=1xIoh4Wly2KmVIx4AGB3gJBGnr3lC2MQF&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 36, isTall: false ,src: "https://drive.google.com/thumbnail?id=13qL52SfpUE6hPN-3K65L_cxvo-V5DE5O&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 37, isTall: false ,src: "https://drive.google.com/thumbnail?id=1nNk2CGwRSLVVOtJ5tuWO-F1pUFFNfDUZ&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 38, isTall: false ,src: "https://drive.google.com/thumbnail?id=1A4Gkv9L_ISur6JgdRBQstxaJJtCp2C1e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 39, isTall: false ,src: "https://drive.google.com/thumbnail?id=1DXC3-Qt7jIvpFFwAc3QXD52EX25kITB_&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 40, isTall: false ,src: "https://drive.google.com/thumbnail?id=1HYovGtQNVz4R6jhOmP3eJvVhBbFo3yRN&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 41, isTall: false ,src: "https://drive.google.com/thumbnail?id=1qswuVC8QOU1ewcIatp9RPojQBdBQ0nYw&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 42, isTall: false ,src: "https://drive.google.com/thumbnail?id=1udCfR5AqzNQTlXPay_oZyCJxm-LRXpYX&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 43, isTall: false ,src: "https://drive.google.com/thumbnail?id=1fw-_1UhDP_o0HxLNDDvjHzvYOG6ps1RT&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 44, isTall: false ,src: "https://drive.google.com/thumbnail?id=14lRCF42raOUOmJjOhoXGgLjkUnfVGQ_v&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 45, isTall: false ,src: "https://drive.google.com/thumbnail?id=1GRo7K38BY9cYTt1KSMXZsgE9hznlMf_H&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 46, isTall: false ,src: "https://drive.google.com/thumbnail?id=1Oj-Fl_JBCXgvwFeVAxiX37XRmHwrbrZr&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 47, isTall: false ,src: "https://drive.google.com/thumbnail?id=1P6lnOqaUZD48zROJUAkVe3uJqOyzSvIi&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 48, isTall: false ,src: "https://drive.google.com/thumbnail?id=1lehapfvaYTPQoV3RDU_mD9eAGC0ztSRN&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 49, isTall: false ,src: "https://drive.google.com/thumbnail?id=12Q4ktKlW5ZuZgisCH0lJ7VWCMMQcWlk3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 50, isTall: false ,src: "https://drive.google.com/thumbnail?id=19MEBnGRc7XuW2bXKRvv9gf9DZzv2k684&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 51, isTall: false ,src: "https://drive.google.com/thumbnail?id=1awVgBPkIOc3r4n_uavDVKMpxpjH5fVVi&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 52, isTall: false ,src: "https://drive.google.com/thumbnail?id=18jzjDBaySZO5eUY872UXsOOybuQ73COp&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 53, isTall: false ,src: "https://drive.google.com/thumbnail?id=1kUoeX2OY8D0lGDG9QYosSOZHzYY9TCbB&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 54, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ZFOS27a-YDHcGj8saAqlx_J4LKefx2i3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 55, isTall: false ,src: "https://drive.google.com/thumbnail?id=1nslYXjzfCUWp-yvApxcJddyMvvK7e73e&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 56, isTall: false ,src: "https://drive.google.com/thumbnail?id=1YYy0ShrKgFbsNFKPJYw1dzDdRfbn2eLv&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 57, isTall: false ,src: "https://drive.google.com/thumbnail?id=1gveJDh0Qaa847NhfWQB6H_QBHpGOUwKT&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 58, isTall: false ,src: "https://drive.google.com/thumbnail?id=1__sx-ABX8cxmvq7S2ZG7cYE6TOsGkqDC&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 59, isTall: false ,src: "https://drive.google.com/thumbnail?id=1EOFE5rLUMTvkS8HBKX3IFldL7CrC2Axx&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 60, isTall: false ,src: "https://drive.google.com/thumbnail?id=11_m_uFGxByWphxN9-QNmK_3kpMkA5Bhh&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 61, isTall: false ,src: "https://drive.google.com/thumbnail?id=1ZpEU7xWK2GvkrvMkSxoC6W_bb5H-Q-_d&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 62, isTall: false ,src: "https://drive.google.com/thumbnail?id=1cxnb21SMceCWwketDOlBoFT61Fpgwia9&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 63, isTall: false ,src: "https://drive.google.com/thumbnail?id=1F1_lDG3iootZQLAaBICQ2eWFoWFduHat&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 64, isTall: false ,src: "https://drive.google.com/thumbnail?id=1wdBs7SnuGAlmmrnzft-SEnyK8Ke2m6_Z&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 65, isTall: false ,src: "https://drive.google.com/thumbnail?id=1qB4K14vrfFL8Ve5ZgPqw4CRaJByJlxj9&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 66, isTall: false ,src: "https://drive.google.com/thumbnail?id=1x6_oLhuoVX9-tKvDk47sjeoVu4cHuSwa&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 67, isTall: false ,src: "https://drive.google.com/thumbnail?id=1nRWXUVeCIYFdXKjduQ6s4X6IDDQD1oom&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 68, isTall: false ,src: "https://drive.google.com/thumbnail?id=1YNQ-JlH8MXmtpUMg13fMYKeP-SwYyh-Q&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 69, isTall: false ,src: "https://drive.google.com/thumbnail?id=1LjZs4fHuNf4HXoP1490OZsRJ6o7HG9r3&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 70, isTall: false ,src: "https://drive.google.com/thumbnail?id=1mkg9h1MH4i-7RfpC-DE8SmBsruRLVXQ5&sz=w1000", game: "Watch Dogs", location: "None" },
  { id: 71, isTall: false ,src: "https://drive.google.com/thumbnail?id=17TNABoOnwR4LjtCygGcMzW8JbPkJxBGP&sz=w1000", game: "Watch Dogs", location: "None" }
];

{/* <div class="i">
        <div class="${containerClass}" id="container${values.id}">
            <img id="loadIMG${values.id}" class="loadIMG" src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
        <label class="checkBoxcontainer">
          <input type="checkbox" data-image-id="game_image${values.id || 'default'}">
          <div class="checkmark">
            <svg class="heart" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#FFFFFF"/>
            </svg>
            <svg viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path d="M 24.10 6.29 Q 28.34 7.56 28.00 12.00 Q 27.56 15.10 27.13 18.19 A 0.45 0.45 4.5 0 0 27.57 18.70 Q 33.16 18.79 38.75 18.75 Q 42.13 18.97 43.23 21.45 Q 43.91 22.98 43.27 26.05 Q 40.33 40.08 40.19 40.44 Q 38.85 43.75 35.50 43.75 Q 21.75 43.75 7.29 43.75 A 1.03 1.02 0.0 0 1 6.26 42.73 L 6.42 19.43 A 0.54 0.51 -89.4 0 1 6.93 18.90 L 14.74 18.79 A 2.52 2.31 11.6 0 0 16.91 17.49 L 22.04 7.17 A 1.74 1.73 21.6 0 1 24.10 6.29 Z M 21.92 14.42 Q 20.76 16.58 19.74 18.79 Q 18.74 20.93 18.72 23.43 Q 18.65 31.75 18.92 40.06 A 0.52 0.52 88.9 0 0 19.44 40.56 L 35.51 40.50 A 1.87 1.83 5.9 0 0 37.33 39.05 L 40.51 23.94 Q 40.92 22.03 38.96 21.97 L 23.95 21.57 A 0.49 0.47 2.8 0 1 23.47 21.06 Q 23.76 17.64 25.00 12.00 Q 25.58 9.36 24.28 10.12 Q 23.80 10.40 23.50 11.09 Q 22.79 12.80 21.92 14.42 Z M 15.57 22.41 A 0.62 0.62 0 0 0 14.95 21.79 L 10.01 21.79 A 0.62 0.62 0 0 0 9.39 22.41 L 9.39 40.07 A 0.62 0.62 0 0 0 10.01 40.69 L 14.95 40.69 A 0.62 0.62 0 0 0 15.57 40.07 L 15.57 22.41 Z" fill-opacity="1.000"></path>
            <circle r="1.51" cy="37.50" cx="12.49" fill-opacity="1.000"></circle>
            </svg>
          </div>
          <p class="likeCount" data-image-id="game_image${values.id || 'default'}">0</p>
        </label>
        <div class="infoDownWrap">
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
          <a href="${values.src}" download="PhotographyHood(Gaming-Moments)-${values.id}" onclick="updateDownloadCount('game_image${values.id}'); return true;">
          <div class="download">
              <i class="bi bi-download" style="margin-left: 0.25em;"></i>
              <span class="downloadCount" data-image-id="game_image${values.id}"></span>
          </div>
          </a>
          </div>
        </div>
        </div>
    </div> */}


let photos = data.map((values) => {

  const containerClass = values.isTall ? "image-container_p" : "image-container";

  return `<div class="i">
        <div class="${containerClass}" id="container${values.id}">
            <img id="loadIMG${values.id}" class="loadIMG" src="${values.src}" alt="Image" loading="lazy">
            <div class="data_a">
        <div class="infoDownWrap">
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
          <a href="${values.src}" download="PhotographyHood(Gaming-Moments)-${values.id}" onclick="updateDownloadCount('game_image${values.id}'); return true;">
          <div class="download">
              <i class="bi bi-download" style="margin-left: 0.25em;"></i>
              <span class="downloadCount" data-image-id="game_image${values.id}"></span>
          </div>
          </a>
          </div>
        </div>
        </div>
    </div>`
})

document.getElementById("photos").innerHTML = photos.join("");

document.querySelectorAll('.loadIMG').forEach(img => {
  img.addEventListener('load', function() {
    const containerId = this.id.replace('loadIMG', 'container');
    const container = document.getElementById(containerId);
    container.classList.add('loaded');
    setTimeout(() => {
      container.classList.add('hide-after');
    }, 400);
  });
});


/*<!------------------------------ CURRENT-YEAR ------------------------------>*/


document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("year-c").textContent = new Date().getFullYear();
});



/*<!-------------------------- LIKE-COUNTER-FIREBASE -------------------------->*/

// document.addEventListener('DOMContentLoaded', () => {
//   const likeCheckboxes = document.querySelectorAll('input[type="checkbox"][data-image-id]');
//   const likeCounts = document.querySelectorAll('.likeCount[data-image-id]');

//   likeCounts.forEach(counter => {
//     const imageId = counter.dataset.imageId;
//     if (!imageId) {
//       console.error('Like counter is missing data-image-id attribute:', counter);
//       return;
//     }
//     const countRef = firebase.database().ref('likeCounts/' + imageId);

//     countRef.on('value', (snapshot) => {
//       counter.textContent = snapshot.val() || 0;
//     }, (error) => {
//       console.error('Error fetching like count:', error);
//     });
//   });

//   likeCheckboxes.forEach(checkbox => {
//     const imageId = checkbox.dataset.imageId;
//     if (!imageId) {
//       console.error('Like checkbox is missing data-image-id attribute:', checkbox);
//       return;
//     }

//     const countRef = firebase.database().ref('likeCounts/' + imageId);
//     const likedRef = firebase.database().ref('userLikes/' + imageId);

//     likedRef.once('value', (snapshot) => {
//       checkbox.checked = snapshot.val() === true;
//     }, (error) => {
//       console.error('Error fetching user like status:', error);
//     });

//     checkbox.addEventListener('change', () => {
//       countRef.transaction((currentCount) => {
//         if (checkbox.checked) {
//           likedRef.set(true);
//           return (currentCount || 0) + 1;
//         } else {
//           likedRef.set(false);
//           return Math.max((currentCount || 0) - 1, 0);
//         }
//       }, (error, committed, snapshot) => {
//         if (error) {
//           console.error('Error updating like count:', error);
//         } else if (!committed) {
//           console.warn('Like count update not committed');
//         }
//       });
//     });
//   });

// });



/*<!----------------------- DOWNLOAD-COUNTER-FIREBASE ----------------------->*/

// function updateDownloadCount(imageId) {
//   const db = firebase.database();
//   const downloadRef = db.ref('downloads/' + imageId);

//   downloadRef.transaction((currentCount) => {
//     return (currentCount || 0) + 1;
//   }).then(() => {
//     // Update the UI
//     const countElement = document.querySelector(`[data-image-id="${imageId}"]`);
//     if (countElement) {
//       countElement.textContent = parseInt(countElement.textContent) + 1;
//     }
//   }).catch((error) => {
//     console.error("Error updating download count:", error);
//   });
// }

// function initializeDownloadCounts() {
//   const db = firebase.database();
//   const downloadCountElements = document.querySelectorAll('.downloadCount');

//   downloadCountElements.forEach((element) => {
//     const imageId = element.getAttribute('data-image-id');
//     const downloadRef = db.ref('downloads/' + imageId);

//     downloadRef.once('value').then((snapshot) => {
//       const count = snapshot.val() || 0;
//       element.textContent = count;
//     }).catch((error) => {
//       console.error("Error fetching download count:", error);
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', initializeDownloadCounts);



/*<!---------------------------- MOUSE_DISAPPEAR ---------------------------->*/

// window.onscroll = function(e) {
//   document.getElementById('mouse').style.opacity = 0;
//   if(window.scrollY === 0){
//     document.getElementById('mouse').style.opacity = 1;
//   }
// }