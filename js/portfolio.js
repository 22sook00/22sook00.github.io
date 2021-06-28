(function () {
const slideList = document.querySelector('.slideList');  // Slide parent dom
const slideContents = document.querySelectorAll('.slideContent');  // each slide dom
const slideBtnPrev = document.querySelector('.fa-chevron-left'); // prev button
const slideBtnNext = document.querySelector('.fa-chevron-right'); // next button
const dotBox = document.querySelector('.dotBox');
const slideLen = slideContents.length;  // slide length
const slideWidth = 500; // slide width
const slideSpeed = 400; // slide speed
const startNum = 0; // initial slide index (0 ~ 5)

slideList.style.width = slideWidth * (slideLen + 2) + "px";
  
// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

// Add pagination dynamically
let pageChild = '';
for (let i = 0; i < slideLen; i++) {
  pageChild += '<li class="dot';
  pageChild += (i === startNum) ? ' activeDot' : '';
  pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
}
dotBox.innerHTML = pageChild;
const pageDots = document.querySelectorAll('.dot'); 
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
let curIndex = startNum; 
let curSlide = slideContents[curIndex]; 
curSlide.classList.add('slide_active');

/** Next Button*/
slideBtnNext.addEventListener('click', function() {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function() {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove('slide_active');
  pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('activeDot');
  curSlide = slideContents[++curIndex];
  curSlide.classList.add('slide_active');
  pageDots[curIndex].classList.add('activeDot');
});

  /** Prev Button*/
  slideBtnPrev.addEventListener('click', function() {
    if (curIndex >= 0) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
      setTimeout(function() {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = slideLen;
    }
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('activeDot');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('activeDot');
  });

  let curDot;
  Array.prototype.forEach.call(pageDots, function (dot, i) {
    dot.addEventListener('click', function (e) {
      e.preventDefault();
      curDot = document.querySelector('.activeDot');
      curDot.classList.remove('activeDot');
      
      curDot = this;
      this.classList.add('activeDot');

      curSlide.classList.remove('slide_active');
      curIndex = Number(this.getAttribute('data-index'));
      curSlide = slideContents[curIndex];
      curSlide.classList.add('slide_active');
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
    });
  });
})(); 