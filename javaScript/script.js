
window.addEventListener("load" , ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home_section").classList.add("active");
    document.querySelector(".page_loader").classList.add("fade_out");
    setTimeout(()=>{
        document.querySelector(".page_loader").style.display="none";
    },600);
});

/*------- About ---------*/
const tabContainer = document.querySelector(".about_tabs");
const aboutSection = document.querySelector(".about_section");

tabContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab_item") && !e.target.classList.contains("active")){
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
       const target = e.target.getAttribute("data-target");
       aboutSection.querySelector(".tab_content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});



/*------- pp ---------*/

document.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains("view_project_btn"))
    if(e.target.classList.contains("view_project_btn")){
        console.log("hiiiii");
        togglePortfoloipopup();
      
        portfoloiItemDetails(e.target.parentElement);
        console.log(e.target)
    }
  
   
  })
  
  function togglePortfoloipopup(){
     document.querySelector(".popup_container").classList.toggle("view_popup");
     document.body.classList.toggle("hide_scrolling");
     document.querySelector(".main").classList.toggle("fade_out")
  }
  
  document.querySelector(".close_round").addEventListener("click",togglePortfoloipopup );
  
  
  function portfoloiItemDetails(portfolioItem){
     console.log(portfolioItem);
     console.log(document.querySelector(".popup_details").innerHTML);
     console.log(portfolioItem.querySelector(".portfolio_item_details").innerHTML);
     
     document.querySelector(".p_title").innerHTML = portfolioItem.querySelector(".portfoloi_item_title").innerHTML;
     document.querySelector(".popup_img img").src = portfolioItem.querySelector(".portfoloi_item_thumbnail img").src;
     document.querySelector(".popup_details").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
  
  }
  
/*------- pp ---------*/

const toggleNav = document.querySelector(".nav-toggler")
function togglerNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
toggleNav.addEventListener('click', () => {
   
    hideSections();
    togglerNavbar();
});

function hideSections() {
    document.querySelector("section.active").classList.toggle("fade_out");
    console.log("i am");
    
}

/*------- active section ---------*/
document.addEventListener('click', (e) => {
    if(e.target.classList.contains("link_item") && e.target.hash !== ""){
        const hash = e.target.hash;
        document.querySelector(".overlay").classList.add("active");
        if(e.target.classList.contains("nav_item")){
            togglerNavbar();
        }else{
            hideSections();
            
            document.body.classList.add("hide_scrolling");
        }
        setTimeout(()=>{
            document.querySelector(".overlay").classList.remove("active");
            document.querySelector("section.active").classList.remove("active","fade_out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTop({top: 0});
            document.body.classList.remove("hide_scrolling");
            
        },500);
      
    } 
});
  