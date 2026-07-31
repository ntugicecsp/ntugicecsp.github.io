/* =========================================================
   NTU GICE Communication Group · main script
   ========================================================= */

// ----------- 教授資料（順序依原網頁） -----------
// 資料來源：https://gice.ntu.edu.tw/Professor_mygice.php?group=CSP (2026-05-05)
// 註：電話統一不顯示；缺漏欄位請至各 lab 自行確認後填入。
const FACULTY = [
  {
    nameZh: "鐘嘉德", nameEn: "Char-Dir Chung", title: "教授",
    email: "cdchung@ntu.edu.tw",
    research: "通訊系統及理論、無線通訊、展頻通訊",
    office: "博理館 426 室", lab: "博理館 518 室",
    photo: "images/cdchung.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "馮世邁", nameEn: "See-May Phoong", title: "教授",
    email: "smphoong@ntu.edu.tw",
    research: "同步與估測、多載波通信系統、通信之訊號處理",
    office: "博理館 420 室", lab: "博理館 506 室",
    photo: "images/smphoong.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "蘇炫榮", nameEn: "Hsuan-Jung Su", title: "教授",
    email: "hjs@ntu.edu.tw",
    research: "編碼、調變、訊號處理",
    office: "博理館 512 室", lab: "電機二館 532 室",
    photo: "images/hjs.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "謝宏昀", nameEn: "Hung-Yun Hsieh", title: "教授",
    email: "hungyun@ntu.edu.tw",
    research: "物聯網、車載通訊網路、網路科學與資訊安全",
    office: "電機二館 546 室", lab: "博理館 521 室",
    photo: "images/hungyun.jpg",
    labUrl: "http://tonic.ee.ntu.edu.tw", homepage: ""
  },
  {
    nameZh: "葉丙成", nameEn: "Ping-Cheng Yeh", title: "教授",
    email: "pcyeh@ntu.edu.tw",
    research: "無線通訊、無線網路",
    office: "電機二館 248 室", lab: "博理館 515 室",
    photo: "images/pcyeh.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "丁建均", nameEn: "Jian-Jiun Ding", title: "教授",
    email: "jjding@ntu.edu.tw",
    research: "數位信號處理、數位影像處理",
    office: "明達館 723 室", lab: "明達館 531 室",
    photo: "images/jjding.jpg",
    labUrl: "https://disp.ee.ntu.edu.tw/", homepage: "https://djj.ee.ntu.edu.tw/"
  },
  {
    nameZh: "周俊廷", nameEn: "Chun-Ting Chou", title: "副教授",
    email: "chuntingchou@ntu.edu.tw",
    research: "無線網路通訊協定、超高速個人無線區域網路、認知型智慧無線網路",
    office: "明達館 618 室", lab: "電機二館 550 室",
    photo: "images/chuntingchou.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "蘇柏青", nameEn: "Borching Su", title: "副教授",
    email: "borching@ntu.edu.tw",
    research: "通訊系統之信號處理",
    office: "明達館 516 室", lab: "明達館 530 室",
    photo: "images/borching.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "王奕翔", nameEn: "I-Hsiang Wang", title: "教授",
    email: "ihwang@ntu.edu.tw",
    research: "消息理論、無線通訊、網路資訊與資料處理",
    office: "明達館 524 室", lab: "學新館 515 室",
    photo: "images/ihwang.jpg",
    labUrl: "http://cc.ee.ntu.edu.tw/~ihsiangw/NICLab/NIC.html", homepage: ""
  },
  {
    nameZh: "林士駿", nameEn: "Shih-Chun Lin", title: "教授",
    email: "sclinntu@ntu.edu.tw",
    research: "消息理論、編碼、人工智慧物聯網資安",
    office: "電機二館 447 室", lab: "博理館 524 室",
    photo: "images/sclinntu.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "劉俊麟", nameEn: "Chun-Lin Liu", title: "副教授",
    email: "chunlinliu@ntu.edu.tw",
    research: "稀疏陣列、陣列訊號處理、數位訊號處理、統計訊號處理",
    office: "明達館 515 室", lab: "電機二館 530 室",
    photo: "images/chunlinliu.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "鄭皓中", nameEn: "Hao-Chung Cheng", title: "副教授",
    email: "haochung@ntu.edu.tw",
    research: "量子資訊處理、量子通訊、量子機器學習",
    office: "電機二館 549 室", lab: "學新館 513 室",
    photo: "images/haochung.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "葉佳宜", nameEn: "Chia-Yi Yeh", title: "助理教授",
    email: "ycyyeh@ntu.edu.tw",
    research: "無線通訊網路、毫米波、太赫茲、大規模天線陣列、無線通訊安全議題、無線感測",
    office: "電機二館 335 室", lab: "電機二館 554 室",
    photo: "images/ycyyeh.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "黃楚翔", nameEn: "Chu-Hsiang Huang", title: "助理教授",
    email: "chuhsianh@ntu.edu.tw",
    research: "新世代無線通訊系統設計、通訊系統標準化、人工智慧與機器學習、統計通信理論",
    office: "電機二館 536 室", lab: "博理館 504 室",
    photo: "images/chuhsianh.jpg",
    labUrl: "", homepage: ""
  },
  {
    nameZh: "王新博", nameEn: "Hsin-Po Wang", title: "助理教授",
    email: "hsinpo@ntu.edu.tw",
    research: "編碼學、夏農理論、極化碼",
    office: "電機二館 237 室", lab: "博理館 508 室",
    photo: "images/hsinpo.jpg",
    labUrl: "", homepage: ""
  }
];

// ---------- SVG icons ----------
const ICON = {
  office: '<svg class="faculty-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/></svg>',
  lab: '<svg class="faculty-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v5l4 9a2 2 0 0 1-1.8 3H6.8A2 2 0 0 1 5 17l4-9V3z"/><path d="M8 14h8"/></svg>',
  mail: '<svg class="faculty-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  arrow: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  globe: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  flask: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v5l4 9a2 2 0 0 1-1.8 3H6.8A2 2 0 0 1 5 17l4-9V3z"/><path d="M8 14h8"/></svg>'
};

// ---------- Render faculty cards ----------
function renderFaculty() {
  const grid = document.getElementById("facultyGrid");
  if (!grid) return;

  const html = FACULTY.map(p => {
    const initials = p.nameEn.split(" ").map(s => s[0]).slice(0,2).join("").toUpperCase();
    const photoBlock = p.photo
      ? `<img class="faculty-photo" src="${p.photo}" alt="${p.nameZh} 教授照片" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="faculty-photo-fallback" style="display:none">${initials}</div>`
      : `<div class="faculty-photo-fallback" style="display:flex">${initials}</div>`;

    const links = [];
    if (p.labUrl)   links.push(`<a class="faculty-link-btn" href="${p.labUrl}" target="_blank" rel="noopener">${ICON.flask}<span>實驗室網頁</span>${ICON.arrow}</a>`);
    if (p.homepage) links.push(`<a class="faculty-link-btn" href="${p.homepage}" target="_blank" rel="noopener">${ICON.globe}<span>個人網頁</span>${ICON.arrow}</a>`);
    const linksBlock = links.length ? `<div class="faculty-links">${links.join("")}</div>` : "";

    const office = p.office ? `<div class="faculty-meta-row">${ICON.office}<span>Office：${p.office}</span></div>` : "";
    const lab    = p.lab    ? `<div class="faculty-meta-row">${ICON.lab}<span>Lab：${p.lab}</span></div>` : "";
    const mail   = p.email  ? `<div class="faculty-meta-row">${ICON.mail}<a href="mailto:${p.email}">${p.email}</a></div>` : "";

    return `
      <article class="faculty-card reveal">
        <div class="faculty-photo-wrap">
          ${photoBlock}
          <span class="faculty-title-tag">${p.title}</span>
        </div>
        <div class="faculty-info">
          <div class="faculty-name">
            <span class="faculty-name-zh">${p.nameZh}</span>
            <span class="faculty-name-en">${p.nameEn}</span>
          </div>
          <p class="faculty-research">${p.research}</p>
          <div class="faculty-meta">
            ${office}${lab}${mail}
          </div>
          ${linksBlock}
        </div>
      </article>
    `;
  }).join("");

  grid.innerHTML = html;
}

// ---------- Mobile menu ----------
function setupMobileMenu() {
  const header = document.getElementById("siteHeader");
  const btn = document.getElementById("menuToggle");
  if (!header || !btn) return;
  btn.addEventListener("click", () => header.classList.toggle("menu-open"));
  // 點擊選單連結後自動關閉
  header.querySelectorAll(".nav a").forEach(a =>
    a.addEventListener("click", () => header.classList.remove("menu-open"))
  );
}

// ---------- Language toggle (placeholder) ----------
// 目前只切換按鈕顯示，實際翻譯內容待中文版定稿後再加入
function setupLangToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  let isEN = false;
  btn.addEventListener("click", () => {
    isEN = !isEN;
    const cur = btn.querySelector(".lang-current");
    const oth = btn.querySelector(".lang-other");
    if (isEN) { cur.textContent = "EN"; oth.textContent = "中"; }
    else      { cur.textContent = "中";  oth.textContent = "EN"; }
    // TODO: 待中文內容定稿後串接 i18n
    console.log("[i18n] toggle to", isEN ? "EN" : "ZH", "(尚未實作翻譯)");
  });
}

// ---------- Footer year ----------
function setupYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Scroll reveal (元素進入視窗時浮起淡入) ----------
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

// ---------- Back to top ----------
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  const onScroll = () => {
    if (window.scrollY > 600) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  onScroll();
}

// ---------- Nav active section highlight ----------
function setupNavHighlight() {
  const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => io.observe(s));
}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", () => {
  renderFaculty();
  setupMobileMenu();
  setupLangToggle();
  setupYear();
  setupScrollReveal();
  setupBackToTop();
  setupNavHighlight();
});
