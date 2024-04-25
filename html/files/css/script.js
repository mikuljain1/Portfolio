console.log("Script Running...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.menu').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.pointer').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.pointer').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
            
    }
})


var typed = new Typed('#element', {
    strings: ['Developer, Student, Entreprenure'],
    typeSpeed: 70,
    // loop = false,
    // loopCount: Infinity
  });

//   Get all elements with the class 'blogP'
const paragraphs = document.querySelectorAll('.blogP');

// Loop through each paragraph
paragraphs.forEach(paragraph => {
  // Set the initial height explicitly
  paragraph.style.height = paragraph.clientHeight + 'px';
});



// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
    
//     // Get form data
//     var formData = {
//       name: document.getElementById('name').value,
//       email: document.getElementById('email').value,
//       message: document.getElementById('message').value
//     };
  
//     // Send form data to backend
//     fetch('/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.text();
//     })
//     .then(data => {
//       console.log(data); // Log the response from the backend
//       // Optionally, you can display a success message to the user
//       alert('Form submitted successfully!');
//     })
//     .catch(error => {
//       console.error('Error submitting form:', error);
//       // Optionally, you can display an error message to the user
//       alert('There was an error submitting the form. Please try again later.');
//     });
//   });
  



  