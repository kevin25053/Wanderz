// variables needed
let localhost='localhost';
let jsonfile;
var pic=document.getElementById('thumbnail');
var title=document.getElementById('headertitle');
var body=document.getElementById('bodyinfo');
// Get the current URL
const currentURL = window.location.href;
const urlparts=currentURL.split('/');
const ident=urlparts[urlparts.length-1];

// Now you can use the 'currentURL' variable as needed
console.log('Current URL:', urlparts[urlparts.length-1]);
      // Use the received data to update your home page
      const serverUrl=`http://${localhost}:3000/News/Json/`+ident;
      axios.get(`${serverUrl}`)
      .then(response => {
        console.log(response.data);
        jsonfile=response.data;
        pic.setAttribute('src',jsonfile['image']['url']);
        
        title.innerHTML=jsonfile['headline'];
        body.innerHTML=jsonfile['articleBody'];
          
          

        
      })
//navigation controll
var home=document.getElementById('navlink1');
var news = document.getElementById('navlink2');
const projects = document.getElementById('navlink4');

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
