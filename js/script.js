var moe=document.getElementById('moe');
var rtc=document.getElementById('rtc');
var moeBtn=document.querySelector('.moe-btn')
var rtcBtn=document.querySelector('.rtc-btn');
var header=document.getElementById("header");
var body=document.getElementsByTagName('body');
var pageLoad=document.getElementById('page-load_animate')
var openBtn=document.getElementById('open-btn');
var closeBtn=document.getElementById('close-btn');
var menus=document.querySelector('.menus');


openBtn.addEventListener('click',()=>{
 menus.classList.add('mobile-menu');
 closeBtn.style.display='inline-block';
 openBtn.style.display='none';
});
closeBtn.addEventListener('click',()=>{
  menus.classList.remove('mobile-menu');
  openBtn.style.display='inline-block';
  closeBtn.style.display='none';
})
window.addEventListener('load',()=>
{
  closeBtn.style.display='none';
    moe.classList.add('active');
    moeBtn.classList.add('moe-btn-load');
    // alert("ehll")
  //  pageLoad.innerHTML='<object type="type/html" data="index.html" ></object>';
  // pageLoad.classList.add("page-load__animate")
})


function openTab(name){
  if(name==='rtc'){
    rtc.classList.add('active')
    moe.classList.remove('active')
    rtcBtn.classList.add('active-btn')
    moeBtn.classList.remove('active-btn')
    moeBtn.classList.remove('moe-btn-load')
 }
  else{
    moeBtn.classList.add('active-btn')
    rtcBtn.classList.remove('active-btn')
    rtc.classList.remove('active');
    moe.classList.add('active');
  }

}


  window.onscroll = function(e) {
    if(this.oldScroll < this.scrollY)
    {
      header.classList.add('scroll-header');
      header.classList.remove('scroll-header-downward')
    }
    else if(this.oldScroll > this.scrollY){
      header.classList.add('scroll-header-downward')
      header.classList.remove('scroll-header');
      
    }
    this.oldScroll = this.scrollY;

  }

var timer = null;
var timer2= null;
window.addEventListener('scroll', function() {
    if(timer !== null || timer2!==null) {
        clearTimeout(timer);
        clearTimeout(timer2);                
    }
    timer = setTimeout(function() {
    timer2=setTimeout(()=> header.classList.add('scroll-header-downward'),300)
    }, 150);
}, false);