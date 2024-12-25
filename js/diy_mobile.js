// 初始化 fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: false,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    touchSensitivity: 15,
    scrollOverflow: false,
    responsiveWidth: 768,
    fitToSection: true,
    loopBottom: true,
    slidesNavigation: true,

});

// 创建云朵的函数
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    
    // 随机云朵大小
    const scale = 0.5 + Math.random() * 1;
    cloud.style.transform = `scale(${scale})`;
    
    // 随机垂直位置
    cloud.style.top = `${Math.random() * 100}%`;
    
    // 随机动画持续时间
    const duration = 15 + Math.random() * 30;
    cloud.style.animation = `float-cloud ${duration}s linear infinite`;
    
    // 随机透明度
    cloud.style.opacity = 0.4 + Math.random() * 0.4;
    
    // 为每个section添加云朵
    document.querySelectorAll('.section').forEach(section => {
        const cloudClone = cloud.cloneNode(true);
        section.appendChild(cloudClone);
        
        // 当云朵动画结束时移除并创建新的云朵
        cloudClone.addEventListener('animationend', () => {
            cloudClone.remove();
            section.appendChild(cloud.cloneNode(true));
        });
    });
}

// 初始化时创建多个云朵
for (let i = 0; i < 24; i++) {
    setTimeout(() => {
        createCloud();
    }, i * 2000); // 每隔5秒创建一个新云朵
}

// 定期创建新云朵
setInterval(createCloud, 15000); // 每15秒创建一个新云朵