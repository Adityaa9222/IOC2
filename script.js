let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.slide-text');
let slideInterval;

/*function showSlide(index) {
    // Remove active class from all slides and texts
    slides.forEach(slide => {
        slide.classList.remove('active');
        // Reset zoom on all images
        const img = slide.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
    texts.forEach(text => text.classList.remove('active'));

    // Add active class to current slide
    slides[index].classList.add('active');
    
    // Start zoom animation on current image
    const currentImg = slides[index].querySelector('img');
    if (currentImg) {
        // Small delay to ensure transition works
        setTimeout(() => {
            currentImg.style.transform = 'scale(1.1)';
        }, 50);
    }
    
    // Add active class to text after 2 seconds
    setTimeout(() => {
        texts[index].classList.add('active');
    }, 2000);
}  

*/

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize auto-slide
function startSlideshow() {
    // Clear existing interval if any
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(() => {
        nextSlide();
    }, 7000);
}

// Event Listeners
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    startSlideshow();
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    startSlideshow();
});

document.querySelector('.center').addEventListener('click', () => {
    document.querySelector('.wrapper-section').scrollIntoView({ behavior: 'smooth' });
});

// Start the slideshow
startSlideshow();
// Show initial text after 2 seconds
setTimeout(() => {
    texts[0].classList.add('active');
}, 2000); 


//Firsr page end //






// our purpose 3rd

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate');
            } else {
                // Remove animation class when element is out of view
                // This ensures animation plays again when scrolling back
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all elements with data-scroll-animation attribute
    document.querySelectorAll('[data-scroll-animation]').forEach(element => {
        observer.observe(element);
    });
});
 // our purpose 3rd





// footer 

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
  
    const applyAnimation = () => {
      footer.style.opacity = "0";
      footer.style.transform = "translateY(100px)";
  
      setTimeout(() => {
        footer.style.transition = "all 0.8s ease-out";
        footer.style.opacity = "1";
        footer.style.transform = "translateY(0)";
      }, 50);
    };
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          applyAnimation();
        }
      },
      { threshold: 0.1 }
    );
  
    observer.observe(footer);
  });

// footer end





  /*function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Trigger animations when section is in view
const section = document.getElementById('animated-section');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const heading = document.querySelector('.slide-in-heading');
const description = document.querySelector('.zoom-in-description');
const button = document.querySelector('.action-button');

function animateOnScroll() {
    if (isInViewport(section)) {
        // Left Box Animations
        leftBox.style.opacity = '1';
        leftBox.style.transform = 'translateX(0)';

        // Text Animations
        heading.style.opacity = '1';
        description.style.opacity = '1';
        button.style.opacity = '1';

        description.style.transform = 'scale(1)';
        button.style.transform = 'scale(1)';

        // Right Box Animation
        rightBox.style.opacity = '1';
        rightBox.style.transform = 'translateY(0)';
    } else {
        // Reset animations when out of view
        leftBox.style.opacity = '0';
        leftBox.style.transform = 'translateX(-50%)';

        heading.style.opacity = '0';
        description.style.opacity = '0';
        button.style.opacity = '0';

        description.style.transform = 'scale(0.8)';
        button.style.transform = 'scale(0.8)';

        rightBox.style.opacity = '0';
        rightBox.style.transform = 'translateY(50%)';
    }
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Run animation on page load if already in view
animateOnScroll();*/



//Second page know more

/*function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    const visualViewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
       
    );
}

// Function to detect if the user is scrolling down
let lastScrollTop = 0;
function isScrollingDown() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    

const scrollingDown = scrollTop > lastScrollTop;
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure it doesn't go negative
return scrollingDown;

}

// Trigger animations when section is in view and scrolling down
const section = document.getElementById('animated-section');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const heading = document.querySelector('.slide-in-heading');
const description = document.querySelector('.zoom-in-description');
const button = document.querySelector('.action-button');

function animateOnScroll() {
    if (isInViewport(section) && isScrollingDown()) {
        // Trigger animations
        leftBox.style.opacity = '1';
        leftBox.style.transform = 'translateX(0)';

        heading.style.opacity = '1';
        description.style.opacity = '1';
        button.style.opacity = '1';

        description.style.transform = 'scale(1)';
        button.style.transform = 'scale(1)';

        rightBox.style.opacity = '1';
        rightBox.style.transform = 'translateY(0)';
    }
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Run animation on page load if the section is in view
animateOnScroll();*/

// second psge end kmow more




function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const visualViewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = rect.bottom - rect.top;

    // Check if at least 10% of the element is visible
    return rect.top < visualViewportHeight * 0.9 && rect.bottom > 0;
}

// Function to detect if the user is scrolling down
let lastScrollTop = 0;
function isScrollingDown() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingDown = scrollTop > lastScrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure it doesn't go negative
    return scrollingDown;
}

// Trigger animations when section is in view and scrolling down
const section = document.getElementById('animated-section');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const heading = document.querySelector('.slide-in-heading');
const description = document.querySelector('.zoom-in-description');
const button = document.querySelector('.action-button');

function animateOnScroll() {
    if (isInViewport(section) && isScrollingDown()) {
        // Trigger animations
        leftBox.style.opacity = '1';
        leftBox.style.transform = 'translateX(0)';

        heading.style.opacity = '1';
        description.style.opacity = '1';
        button.style.opacity = '1';

        description.style.transform = 'scale(1)';
        button.style.transform = 'scale(1)';

        rightBox.style.opacity = '1';
        rightBox.style.transform = 'translateY(0)';
    }
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Run animation on page load if the section is in view
animateOnScroll();








// promise + our partner logo 

document.addEventListener('DOMContentLoaded', () => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with 'hidden' class
    document.querySelectorAll('.hidden').forEach(section => {
        observer.observe(section);
    });

    // Trigger initial animation
    setTimeout(() => {
        document.querySelectorAll('.hidden').forEach(section => {
            section.classList.add('show');
        });
    }, 100);

    // Re-trigger animations on page reload
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.querySelectorAll('.hidden').forEach(section => {
                section.classList.remove('show');
                setTimeout(() => {
                    section.classList.add('show');
                }, 100);
            });
        }
    });
});
// promise + partner logo end






/*principles*/
document.addEventListener('DOMContentLoaded', () => {
    const valueItems = document.querySelectorAll('.ldh-value-item');
    const valuesSection = document.querySelector('.ldh-values-section');
    let currentIndex = 0;
    
    // Function to highlight values sequentially
    const highlightValues = () => {
        valueItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('ldh-highlighted');
            } else {
                item.classList.remove('ldh-highlighted');
            }
        });
        
        currentIndex = (currentIndex + 1) % valueItems.length;
    };

    // Initial animation on page load
    setTimeout(() => {
        valuesSection.classList.add('ldh-show');
        highlightValues();
        
        // Start the highlight rotation
        setInterval(highlightValues, 4000);
    }, 500);

    // Intersection Observer for scroll-based animations
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ldh-show');
                // Reset and restart highlighting when section comes into view
                currentIndex = 0;
                highlightValues();
            } else {
                entry.target.classList.remove('ldh-show');
            }
        });
    };

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(valuesSection);

    // Handle page refresh/reload
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            valuesSection.classList.remove('ldh-show');
            setTimeout(() => {
                valuesSection.classList.add('ldh-show');
                currentIndex = 0;
                highlightValues();
            }, 500);
        }
    });
});

// / principles end



let lastScrollY = window.scrollY; // Track the last scroll position
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});














function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

}





function showSlide(index) {
    // Remove active class from all slides and texts
    slides.forEach(slide => slide.classList.remove('active'));
    texts.forEach(text => text.classList.remove('active'));
  
    // Add active class to current slide and text
    slides[index].classList.add('active');
    texts[index].classList.add('active');
  
    // Check screen size and apply zoom effect if larger than 750px
    const img = slides[index].querySelector('img');
    if (img && window.innerWidth > 750) {
      img.style.transform = 'scale(1.1)';
    } else if (img) {
      img.style.transform = 'scale(1)';
    }
  }
