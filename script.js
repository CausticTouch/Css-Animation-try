let activeIndex = 0;
let locked = false;

const groups = document.getElementsByClassName("card-group");

const unlock = () => {
  locked = false;
}

const handleLoveClick = () => {

  document.getElementById('heart1').classList.add("heart1");
  setTimeout(() => {
    document.getElementById('heart1').classList.remove('heart1')
  }, 800);
  document.getElementById('heart2').classList.add("heart2");
  setTimeout(() => {
    document.getElementById('heart2').classList.remove('heart2')
  }, 800);

  if (!locked) {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentGroup.dataset.status = "after";
    
    nextGroup.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextGroup.dataset.status = "active";

      activeIndex = nextIndex;
    });
    locked = true;
    setTimeout(unlock, 800);
  }
}

const handleHateClick = () => {

  if (!locked) {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentGroup.dataset.status = "before";
    
    nextGroup.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextGroup.dataset.status = "active";
      
      activeIndex = nextIndex;
    });
  }
  locked = true;
  setTimeout(unlock, 800);
}