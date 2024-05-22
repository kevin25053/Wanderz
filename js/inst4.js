var thejson={}
let imagejson;
let atags;
let localhost='localhost';

axios.get(`http://${localhost}:3000/Projects/Json/project`).then(response=>{
    const shinga=response.data;
    console.log(shinga);
    for(var i=1; i<3; i++){
        article_block(`PROJECT${i}`,shinga[`PROJECT${i}`]['thumbnail'],shinga[`PROJECT${i}`]['name'],shinga[`PROJECT${i}`]['published'],shinga[`PROJECT${i}`]['url']);

    }
})
.catch(error => {
    console.error('Error:', error.message);
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
    a.setAttribute('href',alink);
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