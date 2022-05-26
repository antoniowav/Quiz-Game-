import { gsap } from 'gsap';

const timeline = gsap.timeline();
timeline.from('#root ', 0.5,{
    opacity: 0,
    y: "-200%",
    stagger: {
        amount: .4
    }
});