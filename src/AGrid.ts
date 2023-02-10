import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class AGrid {
  grid: HTMLElement | null;
  video: string;
  timeline: (GridTimelineItem | null)[] | undefined;

  constructor(grid: string, video: string) {
    console.clear();
    this.grid = document.querySelector(grid);
    this.video = video;
    if (this.grid) {
      this.init();
      this.createTimelineAnimation();
    }
  }

  init() {
    console.log("Installing plugins..");
    gsap.registerPlugin(ScrollTrigger);
  }

  createTimelineAnimation() {
    console.log("Creating timeline animation..");
    gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(this.video)?.parentElement,
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=100%",
      }
    })
      .from(this.video, {
        scale: 0.5,
        ease: "none",
      })
      .to(this.video, {
        scrollTrigger: {
          trigger: document.querySelector(this.video)?.parentElement,
          scrub: 1,
          start: "center top",
          end: "+=25%",
        },
        scale: 0.5,
        ease: "none",
      })

  }
}