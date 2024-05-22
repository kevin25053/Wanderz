// client.js
let localhost='localhost';
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('navlink1');
    const news = document.getElementById('navlink2');
    const projects= document.getElementById('navlink4');
  
    home.addEventListener('click', () => {
      // Redirect to /News
      
      window.location.href = `http://${localhost}:3000/home`;
    });
    news.addEventListener('click', () => {
        // Redirect to /News
        window.location.href = `http://${localhost}:3000/News`;
      });
    projects.addEventListener('click',()=>{
        window.location.href =`http://${localhost}:3000/Projects`;
    });
    
  });
  