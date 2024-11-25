document.querySelector(".text-menu-catalog").addEventListener("click", function() {
    const target = document.querySelector(".text-catalog");
    target.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".text-see-more").addEventListener("click", function() {
    const target = document.querySelector(".text-catalog");
    target.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".text-menu-catalog-backline").addEventListener("click", function() {
    const target = document.querySelector(".text-download");
    target.scrollIntoView({ behavior: "smooth" });
});





document.querySelector('.text-download').addEventListener('click', function() {
    var audio = document.querySelector('.sound-pumkin');
    audio.play();
});





function downloadCurrentImage() {
    const imgSrc = document.getElementById('Image').src;
    
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'downloaded_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





function changeContent1() {
    document.querySelector(".text1").innerText = "Этот фон представляет собой большую тыкву, \nтыква пугающе смотрит на вас";
    document.querySelector(".image1").src = "Happy Halloween/pumkin.png";
}

function changeContent2() {
    document.querySelector(".text1").innerText = "Этот фон представляет собой украшенную стену тыквами, \nс чёрным фоном";
    document.querySelector(".image1").src = "Happy Halloween/Decoration.png";
}

function changeContent3() {
    document.querySelector(".text1").innerText = "Этот фон представляет собой множество монстров, \n(видимо они голодные)";
    document.querySelector(".image1").src = "Happy Halloween/monsters.png";
}




let bloodInterval;
let bloodActive = true;

function createBlood() {
    const blood = document.createElement('div');
    blood.classList.add('blood');

    const randomX = Math.random() * (window.innerWidth - 20);

    blood.style.left = `${randomX}px`;
    blood.style.top = '0px';

    document.body.appendChild(blood);

    setTimeout(() => {
        blood.style.transition = 'transform 6s linear, opacity 6s linear';
        blood.style.transform = 'translateY(300vh)';
        blood.style.opacity = '0';
    }, 100);

    setTimeout(() => {
        blood.remove();
    }, 21000);
}

function toggleBlood() {
    const button = document.querySelector(".toggleBlood");
    
    if (bloodActive) {
        clearInterval(bloodInterval);
        button.querySelector('img').src = 'Happy Halloween/toggle-icon-active.png';
        bloodActive = false;
        button.setAttribute('alt', 'Включить кровь');
    } else {
        bloodInterval = setInterval(createBlood, Math.random() * 1500 + 800);
        button.querySelector('img').src = 'Happy Halloween/toggle-icon.png';
        bloodActive = true;
        button.setAttribute('alt', 'Выключить кровь');
        
        createBlood();
    }
}

document.querySelector('.toggleBlood').addEventListener('click', toggleBlood);

window.onload = function() {
   if (bloodActive) {
       createBlood();
       bloodInterval = setInterval(createBlood, Math.random() * 1500 + 800);
       bloodActive = True;
   }
};






document.getElementById('openModalSait').onclick = function() {
    document.getElementById('modal-sait').style.display = 'block';
}

document.getElementById('closeModalSaitBtn').onclick = function() {
    document.getElementById('modal-sait').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-sait');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('openModalLink').onclick = function() {
    document.getElementById('modal-link').style.display = 'block';
}

document.getElementById('closeModalLinkBtn').onclick = function() {
    document.getElementById('modal-link').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-link');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('openModalBackline').onclick = function() {
    document.getElementById('modal-backline').style.display = 'block';
}

document.getElementById('closeModalBacklineBtn').onclick = function() {
    document.getElementById('modal-backline').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-backline');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}