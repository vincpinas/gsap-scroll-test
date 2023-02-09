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
    const tl = gsap.timeline();

    tl.to(this.video, {
      scrollTrigger: {
        trigger: this.video,
        start: "center center",
        end: "+=400%",
        pin: true,
      },
      duration: 1,
      delay: 0.5,
      width: "100%",
      height: "100%",
    })

    tl.to(this.video,
      {
        duration: 1,
        width: "80%",
        height: "80%",
      }, ">")
  }
}