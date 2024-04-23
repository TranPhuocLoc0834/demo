
function openSearch() {
    document.getElementById("dropsearch").style.height = "500px";
}
function AnimatedSearchBar() {
    document.getElementById("searchbar").style.width = "90%";
}
function closeSearch() {
    document.getElementById("dropsearch").style.height = "0";
    document.getElementById("searchbar").style.width = "30%";
    document.getElementById("searchbar").value = "";
}
function resetSearch() {
    document.getElementById("searchbar").value = "";
    document.getElementById("search-box").value = "";
}
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a,
            b,
            i,
            val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML =
                    "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
let products = [
    "Bàn ủi Leonic E2000",
    "Máy nước nóng SunHouse W1200",
    "Máy giặt LG",
    "Máy sấy Philips RP2500",
    "Bếp ga Leonic",
    "Tủ lạnh Panasonic",
    "Robot hút bụi RPW2500",
    "Lò vi sóng Leonic RPW2500",
    "TV SamSung OLED 4K",
    "TV Panasonic",
    "Máy lạnh Sharp",
    "Laptop Lenovo",
    "Máy đo đường huyết Leonic",
    "Đồng hồ thông minh Xiaomi S1200",
    "Máy đo huyết áp Leonic",
    "Máy đo thân nhiệt Beurer"
  ];
  
autocomplete(document.getElementById("searchbar"), products);
let slideIndex = 1;
showSlidesAuto();
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
function showSlidesAuto() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlidesAuto, 8000); 
}   
function openModal1(){
document.getElementById("id01").style.display= "block"
}
function openModal2(){
document.getElementById("id02").style.display= "block"
}
function updateBreadcrumbs(newLocation) {
var breadcrumb = document.querySelector('.breadcrumb');
breadcrumb.innerHTML = '';
newLocation.forEach(function (item) {
var li = document.createElement('li');
if(item.url) {
  var a = document.createElement('a');
  a.href = item.url;
  a.textContent = item.name;
  li.appendChild(a);
} else {
  li.textContent = item.name;
}
breadcrumb.appendChild(li);
});
}
function closeAndReset() {
document.getElementById('id02').style.display='none';
document.getElementById('registrationForm').reset();
document.getElementById("regExName").innerHTML='';
document.getElementById("regExEmail").innerHTML='';
document.getElementById("regExPhone").innerHTML='';
document.getElementById("regExPassword").innerHTML='';
document.getElementById("confirmPassword").innerHTML='';
}

function openLocationModal(ModalId){
var modals = document.getElementsByClassName('modal-details');
for (var i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
}
document.getElementById(ModalId).style.display= "block"
}
function closeLocationModal(ModalId){
document.getElementById(ModalId).style.display= "none"
}
function postComment(){
    document.getElementById('submit-btn').addEventListener('click', function() {
        var commentBox = document.getElementById('comment-box');
        var commentsContainer = document.getElementById('comments-container');
        var newComment = document.createElement('div');
        
        newComment.textContent = commentBox.value; 
        newComment.classList.add('comment'); 
        
        commentsContainer.appendChild(newComment); 
        commentBox.value = ''; 
      });
    
}





