// 获取导航项和内容区域
const navItems = document.querySelectorAll('.navbar ul li');
const contentSections = document.querySelectorAll('.content-section');

// 为每个导航项添加点击事件
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // 如果点击的是子菜单链接，则不执行内容切换
        if (e.target.closest('.submenu')) {
            return;
        }
        
        // 移除所有导航项的active类
        navItems.forEach(nav => nav.classList.remove('active'));
        // 给当前点击的导航项添加active类
        item.classList.add('active');
        
        // 获取目标内容区域ID
        const targetId = item.getAttribute('data-target');
        
        // 隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // 显示目标内容区域
        document.getElementById(targetId).classList.add('active');
    });
});

// 添加平滑滚动效果
document.querySelectorAll('.submenu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // 先确保目标板块处于激活状态
            const sectionId = targetElement.closest('.content-section').id;
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            // 平滑滚动到目标位置
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 默认激活第一个导航项
navItems[0].classList.add('active');