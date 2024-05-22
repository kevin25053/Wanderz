
var thejson={}
let imagejson;
let atags;
let localhost='localhost';
//variables above
document.addEventListener('DOMContentLoaded', () => {
  axios.get('/News')
    .then(response => {
      const data = response.data;
      // Use the received data to update your home page
      const serverUrl=`http://${localhost}:3000/News/0-10`;
      axios.get(`${serverUrl}`)
      .then(response => {
          thejson=response.data;
          imagejson=thejson['ID1']['thumbnailUrl'];
          //console.log('Server response:', imagejson);

          for ( var i=1; i<7; i++){
            article_block('ID'+String(i),thejson[`ID${i}`]['thumbnailUrl'],thejson['ID'+String(i)]['description'],thejson['ID'+String(i)]['datePublished'],thejson['ID'+String(i)]['url']);
            
          }
          atags = document.getElementsByClassName('art');
          for (let i = 0; i < atags.length; i++) {
            atags[i].addEventListener('click', () => {

              console.log(atags[i].getAttribute('id'));
              window.location.href=`http://${localhost}:3000/News/`+atags[i].getAttribute('id');
              // Handle click event
              
            });
          }
          

        
      })
      .catch(error => {
          console.error('Error:', error.message);
      });
      //retrieved Json accomplished


    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });



    
});

//navigation controll
var home = document.getElementById('navlink1');
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



//articel box design
function article_block(idnum,picture,texttitle,textdate,alink){
var newdiv= document.createElement('div');
var sectiontwoid=document.getElementById('part-two');

sectiontwoid.appendChild(newdiv);
newdiv.classList.add('article');

var a=document.createElement('a');
    //a.setAttribute('href',alink);
    a.setAttribute('class','art');
    a.setAttribute('id',idnum);
    newdiv.appendChild(a);

var divwrap=document.createElement('div');
    divwrap.classList.add('wrap-article');
    a.appendChild(divwrap);
var divthumb=document.createElement('div');
    divthumb.classList.add('thumbnail')
    divwrap.appendChild(divthumb);
var imgart=document.createElement('img');
    imgart.classList.add('img-thumbnail');
    imgart.setAttribute('src',picture);
    divthumb.appendChild(imgart);

var divartinfo=document.createElement('div');
    divartinfo.classList.add('article-info');
    divwrap.appendChild(divartinfo);

var divarttitle=document.createElement('div');
    divarttitle.classList.add('article-title');
    divarttitle.innerHTML=texttitle;
    divartinfo.appendChild(divarttitle);

var divartdate=document.createElement('div');
    divartdate.classList.add('article-date');
    divartdate.innerHTML=textdate;
    divartinfo.appendChild(divartdate);
}


// Pagination button backend next here below


