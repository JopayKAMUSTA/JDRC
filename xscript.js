function validate(){
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let org = document.getElementById('org').value;
  let province = document.getElementById('province').value;
  let city = document.getElementById('city').value;
  let barangay = document.getElementById('barangay').value;
  let street = document.getElementById('street').value;
  let message = document.getElementById('message').value;


  if( fname=="" || lname=="" || phone=="" || email=="" || org=="" || province=="" || city=="" || barangay=="" || street=="" || message ==""){
    alert("Please fill it all");
  
  }
  
  else{

    if(fname===lname){
      alert("First Name and Last Name must not be the same.");
    }


    else if(isNaN(phone)){
      alert("This might be not a number")
      
         
    }
      

      else if (alert(province === "Davao Del Norte" && city === "Tagum City" && barangay === "Mankilam")){
            }

            else  if(message.length <= 10){
                alert("Message must be more than 10")
             
              }

              else{
            
              }
              
              
          
          
              
            }
      
          
        
      }
    

  
