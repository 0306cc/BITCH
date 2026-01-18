// 圖片資料
const images = [
    {
        src: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop',
        caption: '比特幣已成為數位黃金的代名詞'
    },
    {
        src: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
        caption: '技術分析是投資決策的重要工具'
    },
    {
        src: 'https://images.unsplash.com/photo-1640826514546-7d2fbda5b7b6?w=800&h=600&fit=crop',
        caption: '多元化投資組合是風險管理的關鍵'
    },
    {
        src: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop',
        caption: '選擇安全的錢包保護您的資產'
    },
    {
        src: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?w=800&h=600&fit=crop',
        caption: '網路安全是保護數位資產的第一道防線'
    },
    {
        src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
        caption: '區塊鏈技術確保交易的透明與安全'
    }
];

let currentImageIndex = 0;

// 開啟燈箱
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.classList.add('active');
    lightboxImg.src = images[index].src;
    lightboxCaption.textContent = images[index].caption;
    
    // 防止背景滾動
    document.body.style.overflow = 'hidden';
}

// 關閉燈箱
function closeLightbox(event) {
    // 只在點擊背景或關閉按鈕時關閉
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        event.stopPropagation();
    }
}

// 切換圖片
function changeImage(direction, event) {
    event.stopPropagation();
    
    currentImageIndex += direction;
    
    // 循環顯示
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // 添加淡出淡入效果
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = images[currentImageIndex].src;
        lightboxCaption.textContent = images[currentImageIndex].caption;
        lightboxImg.style.opacity = '1';
    }, 200);
}

// 鍵盤控制
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox.classList.contains('active')) {
        if (event.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1, event);
        } else if (event.key === 'ArrowRight') {
            changeImage(1, event);
        }
    }
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 添加滾動動畫
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 當 DOM 載入完成時
document.addEventListener('DOMContentLoaded', function() {
    // 為所有文章卡片添加動畫
    const cards = document.querySelectorAll('.article-card, .feature-card, .stat-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
