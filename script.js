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

function changeContent1() {
    document.querySelector(".text1").innerText = "Этот фон представляет собой большую тыкву, \nтыква пугающе смотрит на вас";
    document.querySelector(".image1").src = "Happy Halloween/pumkin.png";
}

function changeContent2() {
    document.querySelector(".text1").innerText = "Этот фон представляет собой украшенную стену тыквами, \nс чёрным фоном";
    document.querySelector(".image1").src = "Happy Halloween/Decoration.png";
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