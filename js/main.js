const goIntro = document.querySelector('.goToIntro');
const goSkills = document.querySelector('.goToSkills');
const goPortfolio = document.querySelector('.goToPortfolio');
const goContact = document.querySelector('.goToContact');

const intro = document.getElementById('intro')
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

//header list
function gomain(){
  for(let i = 0; i < 2; i++){
    const goMain = document.querySelectorAll('.goToMain')[i];
    goMain.addEventListener('click',function(){
      scrollTo({ top:0 , behavior : 'smooth'})
    })
  }
}
gomain()

function goToIntro(){
  scrollTo({ top : intro.offsetTop, behavior : 'smooth'})
}
function goToSkills(){
  scrollTo({ top : skills.offsetTop, behavior : 'smooth'})
}
function goToPortfolio(){
  scrollTo({ top : portfolio.offsetTop, behavior : 'smooth'})
}
function goToContact(){
  scrollTo({ top : contact.offsetTop, behavior : 'smooth'})
}

//스크롤 opacity효과
function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + triggerDiff;
}

function handleScroll() {
  const elems = document.querySelectorAll('.scrollEffect');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -50)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(80px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(10px)';
    }
  })
}

window.addEventListener('scroll', handleScroll);

//scrollReveal 효과
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 300 });
ScrollReveal().reveal('.punchline', { delay: 600});
ScrollReveal().reveal('.leftOfMain', { delay: 300});
