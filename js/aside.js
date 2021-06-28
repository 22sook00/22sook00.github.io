//aside 에 type == mouseenter 하면 보여지고 이동까지 가능한 기능만들기.
//goToSkills,goToPortfolio,goToContact == toggle_side
const asideBox = document.getElementById('asideBox')
const toggle_side = document.querySelectorAll('.toggle_side')

for(let i  = 0; i < toggle_side.length; i++){
  $(asideBox).hover(function(e){

    let timerID;
    let timerID2;
    let timerID3;
    if(e.type === 'mouseenter'){
      $(toggle_side[3]).fadeIn();
      timerID = setInterval(() => {
        $(toggle_side[2]).fadeIn();
        clearInterval(timerID);
      }, 100);

      timerID2 = setInterval(() => {
        $(toggle_side[1]).fadeIn();
        clearInterval(timerID2);
      }, 200);

      timerID3 = setInterval(() => {
        $(toggle_side[0]).fadeIn();
        clearInterval(timerID3);
      }, 300);

    }else if(e.type == 'mouseleave'){

      $(toggle_side[3]).fadeOut();
      timerID = setInterval(() => {
        $(toggle_side[2]).fadeOut();
        clearInterval(timerID);
      }, 100);

      timerID2 = setInterval(() => {
        $(toggle_side[1]).fadeOut();
        clearInterval(timerID2);
      }, 100);

      timerID3 = setInterval(() => {
        $(toggle_side[0]).fadeOut();
        clearInterval(timerID3);
      }, 100);
    }
  })
}

/*for(let i  = 0; i < toggle_side.length; i++){
  $(asideBox).hover(function(e){
    if(e.type === 'mouseenter'){
      $(toggle_side).fadeIn();
    }else{
      $(toggle_side).fadeOut();
    }
  })
}
*/