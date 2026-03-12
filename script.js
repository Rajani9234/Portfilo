/**
 * Scroll Animation Logic
 * Yeh script elements ko tab dikhata hai jab user scroll karke un tak pahunchta hai.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer setup for scroll reveal effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jab element screen par aaye, use visible kar do
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { 
        threshold: 0.1 // 10% element dikhne par trigger hoga
    });

    // Sabhi glass cards, badges aur timeline elements par animation apply karein
    const animatedElements = document.querySelectorAll('.glass-card, .skill-badge, .exp-badge, .edu-card');
    
    animatedElements.forEach(el => {
        // Initial hidden state
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        
        // Start observing
        observer.observe(el);
    });
});