var y = Math.floor(Math.random() * 10 + 1);
  
      
      var guess = 1;
  
      document.getElementById("submit").onclick = function(){
  
            
          var x = document.getElementById("guess").value;
  
          if(x == y)
          {    
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                  + guess + " GUESS ");
          }
          else if(x > y) 
          {    
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
          }
          else
          {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
          }
      }