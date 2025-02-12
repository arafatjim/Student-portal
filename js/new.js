document.getElementById('btn-sign-up').addEventListener('click',function(event){
          console.log('clicked sign up')
          event.preventDefault();
          var createPass=document.getElementById('create-pass').value;
          var confirmPass=document.getElementById('confirm-pass').value;
          var emailNumber=document.getElementById('emailNum').value;
          
          if(createPass== confirmPass){
                    window.location.href='./home.html';
                    emailNumber='';
                    
          }
          
          
})