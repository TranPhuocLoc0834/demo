
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
function infoValidate(){
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var phoneNum = document.getElementById('phoneNum').value;
        var checkPassword = document.getElementById('checkpassword').value;
        var usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        var phoneNumRegex = /^[0-9]{10,}$/;
        if (!usernameRegex.test(username)) {
            document.getElementById("regExName").style="color: red";
            document.getElementById("regExName").innerHTML='Tên đăng nhập không hợp lệ. Chỉ chấp nhận chữ cái, số, gạch dưới và gạch ngang, từ 3 đến 15 ký tự.';
            return;
        } else {
            document.getElementById("regExName").innerHTML='<span class="material-symbols-outlined">done </span>';
            document.getElementById('regExName').style="color:green";
        }
        if (!emailRegex.test(email)) {
            document.getElementById("regExEmail").style="color: red";
            document.getElementById("regExEmail").innerHTML='Email không hợp lệ. Vui lòng nhập đúng định dạng email.';
            return;
        } 
        else {
            document.getElementById("regExEmail").innerHTML='<span class="material-symbols-outlined">done </span>';
            document.getElementById('regExEmail').style="color:green";
        }
        if (!phoneNumRegex.test(phoneNum)) {
            document.getElementById("regExPhone").style="color: red";
            document.getElementById("regExPhone").innerHTML='Số điện thoại không hợp lệ, phải là số và có ít nhất 10 số';
            return;
        }else {
            document.getElementById("regExPhone").innerHTML='<span class="material-symbols-outlined">done </span>';
            document.getElementById('regExPhone').style="color:green";
        }
        if (!passwordRegex.test(password)) {
            document.getElementById("regExPassword").style="color: red";
            document.getElementById("regExPassword").innerHTML='Mật khẩu không hợp lệ. Phải có ít nhất 8 ký tự, bao gồm chữ cái và số.';
            return;
        } 
        else {
            document.getElementById("regExPassword").innerHTML='<span class="material-symbols-outlined">done </span>';
            document.getElementById('regExPassword').style="color:green";
        }
        if (password != checkPassword) {
            document.getElementById("confirmPassword").style="color: red";
            document.getElementById("confirmPassword").innerHTML='Mật khẩu không trùng khớp';
            return;
        }else {
            document.getElementById("confirmPassword").innerHTML='<span class="material-symbols-outlined">done </span>';
            document.getElementById('confirmPassword').style="color:green";
        }
        localStorage.setItem('userData', JSON.stringify({ username, email, password }));
        alert('Thông tin đăng ký đã được lưu trữ.');
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
function changeMap(Num){
    switch(Num){
        case 1:
            document.getElementById("ggmap").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.1794411091885!2d106.68955190477739!3d10.79745595411226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce48cfad8d%3A0xb819f18ffcab5b7c!2zMTIzIEhvYSBI4buTbmcsIFBoxrDhu51uZyA3LCBQaMO6IE5odeG6rW4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1713439756341!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        case 2:
            document.getElementById("ggmap").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9487873500593!2d106.66722197765417!3d10.815231231004564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291f1fc537db%3A0xb8c2f680c7a95272!2zNDU2IELhuqFjaCDEkOG6sW5nIFAuIDIsIFBoxrDhu51uZyAyLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1713440334114!5m2!1svi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        case 3:
            document.getElementById("ggmap").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5392567405434!2d106.68880007764999!3d10.769948231950654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4742c26a41%3A0xf609e1e707f70bba!2zxJAuIEzDqiBMYWksIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1713440506662!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        case 4:
            document.getElementById("ggmap").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.722573747662!2d106.67294697476616!3d10.755851359573473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efd6ffa22a9%3A0xf32db541824cb899!2zMzIxIMSQLiBOZ3V54buFbiBUcsOjaSwgUGjGsOG7nW5nIDcsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1713440571143!5m2!1svi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        case 5:
            document.getElementById("ggmap").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4919870870363!2d106.68790887476632!3d10.773580259246744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c9db7a413%3A0x1d8ce28190676b0b!2zNjU0IMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713440610366!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
            break;
        }
}
(function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
    w[o] ||
    function () {
        (w[o].q = w[o].q || []).push(arguments);
    };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
Botsonic("init", {
    serviceBaseUrl: "https://api-azure.botsonic.ai",
    token: "4439388c-a189-4617-98be-f7ee68d8c453",
});