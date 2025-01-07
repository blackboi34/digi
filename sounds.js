 // Get the elements for the first cat
 const image1 = document.getElementById('hoverImage1');
 const audio1 = document.getElementById('hoverSound1');

 // Add a mouseover event listener to the first cat image
 image1.addEventListener('mouseover', playSound1);

 // Function to play the sound for the first cat
 function playSound1() {
     audio1.play();
 }

