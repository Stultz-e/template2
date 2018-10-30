// SHOW SIDE FLOOR PICKER

   var x = document.querySelector('.level__btn')
    x.addEventListener ('click', showApt)
    
    function showApt() {
    document.querySelector ('.side').classList.toggle('active');
    } 
    
    // SHOW FLOOR PLAN PICKER
    var y = document.querySelector ('.image-area__btn')  
    y.addEventListener ('click', showFp) 
    
    function showFp() {
        document.querySelector('.slide').classList.toggle('dflex');
        hideLevel();
    }
 
    /* X BUTTON  EXIT */
   var c = document.querySelector('.image-area__exit')
    c.addEventListener ('click', hideLevel) 
    
    function hideLevel() {
        document.querySelector('.side').classList.remove('active');
    }  

    var back = document.querySelector('.btn--modal-left')
    back.addEventListener ('click', retrieveFplate) 
    
    function retrieveFplate() {
        document.querySelector('.slide').classList.toggle('dflex');
        showApt();
    }  

    var applyNow = document.querySelector('.btn--modal-left')
    applyNow.addEventListener ('click', formSlide) 
    
    function formSlide() {
        document.querySelector('.slide').classList.toggle('dflex');
        showApt();
    }  




// some kinda if statement that highlights the things when the thing is open 

// Get the container element
var btnContainer = document.getElementById('btnWrap');

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('level__btn');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-btn");


    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active-btn", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active-btn";
  });
}

/* $(function(){
    $('#btnApt1').on('click', function() {
        $('#apt1').toggle();
    });

    $('#btnApt2').on('click', function() {
        $('#apt2').toggle();
    });

    $('#btnApt3').on('click', function() {
        $('#apt3').toggle();
    });

    $('#btnApt4').on('click', function() {
        $('#apt4').toggle();
    });

    $('.image-area__exit').on('click', function() {
        $(this).closest('item').toggleClass('current'); });

 }); */ // end

