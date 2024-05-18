function buut() {
    let vv = document.querySelector('#collapsibleNavbars');
    vv.classList.toggle('ddd');
}




//  document.addEventListener("DOMContentLoaded", function(){
		
//      window.addEventListener('scroll', function() {
       
//          if (window.scrollY > 200) {
//              document.getElementById('navbar_top').classList.add('fixed-top');
//              // add padding top to show content behind navbar
//              navbar_height = document.querySelector('.navbar').offsetHeight;
//              document.body.style.paddingTop = navbar_height + 'px';
//          } else {
//               document.getElementById('navbar_top').classList.remove('fixed-top');
//               // remove padding top from body
//              document.body.style.paddingTop = '0';
//          } 
//      });
//  }); 


const showDialogBtn = document.getElementById('showDialogBtn');
const favDialog = document.getElementById('favDialog');

showDialogBtn.addEventListener('click', () => favDialog.showModal());
