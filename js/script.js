
 // FORM VALIDTION
        // let name = document.getElementById("name");
        // let email = document.getElementById("email");
        // let phone = document.getElementById("phone");
        // let flag = 1
        // function validateFrom() { 

        //     // Name
        //     if(name.value == ""){
        //         document.getElementById("userError").innerHTML="User Name is Empty";
        //         flag=0
        //     }
        //     else if(name.value.length<3){
        //         document.getElementById("userError").innerHTML="Name require 3 length";
        //         flag=0  
        //     }
        //     else{
        //         document.getElementById("userError").innerHTML=" "; 
        //         flag=1 
        //     }

        //     //Email
        //     if (email.value ="") {
        //         document.getElementById("emailError").innerHTML="Enter a valid email address"; 
        //         flag=0 
        //     }
        //     else{
        //         document.getElementById("emailError").innerHTML=" "; 
        //         flag=1
        //     }

        //     //Phone
        //     if (phone.value.length<10) {
        //         document.getElementById("emailError").innerHTML="Enter a valid number"; 
        //         flag=0 
        //     }
        //     else{
        //         document.getElementById("emailError").innerHTML=" ";  
        //         flag=1
        //     }
        //   if (flag) {
        //     return true;
        //   }else{
        //     return false;
        //   }
        // }


        // POPUP MODLE
        function showModle() {
            document.querySelector('.overlay').classList.add('show')
            document.querySelector('.loginform').classList.add('showloginform')
        }

        function closeModle() {
            document.querySelector('.overlay').classList.remove('show')
            document.querySelector('.loginform').classList.remove('showloginform')
        }

        // Navbar ENQUER
        function show() {
            document.querySelector('.over').classList.add('show')
            document.querySelector('.login').classList.add('showlogin')
        }

        function closem() {
            document.querySelector('.over').classList.remove('show')
            document.querySelector('.login').classList.remove('showlogin')
        }

        // slider enquri button

        function view() {
            document.querySelector('.enquir').classList.add('view')
            document.querySelector('.log').classList.add('viewlog')
        }

        function hide() {
            document.querySelector('.enquir').classList.remove('view')
            document.querySelector('.log').classList.remove('viewlog')
        }

        // Learn Busy Page JS 
        

         // Contact us for job
        
         let popup = document.getElementById('popup');
         function openpopup() {
             popup.classList.add("open-popup");
         }
         function closepopup() {
             popup.classList.remove("open-popup");
         }
 
         // Send Resume
 
         let pop = document.getElementById('pop');
         function openpop() {
             pop.classList.add("open-pop");
         }
         function closepop() {
             pop.classList.remove("open-pop");
         }
 
         // upgrade for software
 
         let po = document.getElementById('po');
         function openpo() {
             po.classList.add("open-po");
         }
         function closepo() {
             po.classList.remove("open-po");
         }