

// Tab ......

const tab_menu = document.querySelectorAll('.roy-tab .tab-menu ul  a');
const tab_pane_all = document.querySelectorAll('.roy-tab .tab-pane');


tab_menu.forEach( item => {

    item.addEventListener( 'click' , function (e){
        e.preventDefault();
        tab_menu.forEach(item => {
           
            item.classList.remove('active');
      });
       
      item.classList.add('active');

      const tab_pane = document.querySelector(this.getAttribute('href'));
        
      tab_pane_all.forEach(item => {
        item.classList.remove('active');
      });

      tab_pane.classList.add('active');
     
    });

});



//  Result App.................


// get elements


const student_form = document.getElementById('student-form');


student_form.addEventListener( 'click' , function(e){
 e.preventDefault();
  let name = document.querySelector("input[placeholder='Stuents Name']");
  let roll = document.querySelector("input[placeholder='Roll']");
  let student_class = document.querySelector("input[placeholder='Class']");
  let Photo = document.querySelector("input[placeholder='Photo']");
  let gender = document.querySelector("input[type='radio']:checked");
  let bn = document.querySelector("input[placeholder='Bangla']");
  let en = document.querySelector("input[placeholder='Stuents Name']");
  let math = document.querySelector("input[placeholder='Stuents Name']");
  let s = document.querySelector("input[placeholder='Stuents Name']");
  let ss = document.querySelector("input[placeholder='Stuents Name']");
  let rel = document.querySelector("input[placeholder='Stuents Name']");
  let message = document.querySelector('.message');
  
  




});                    

