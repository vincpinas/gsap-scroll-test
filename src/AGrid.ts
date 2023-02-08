import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default class AGrid {
  grid: HTMLElement | null;
  video: string;
  timeline: (GridTimelineItem | null)[] | undefined;

  constructor(grid: string) {
    this.grid = document.querySelector(grid);
    this.video = "";
    if (this.grid) {
      this.init();
      this.timeline = this.createTimelineItems(this.grid);
      this.createTimelineAnimation();
    }
  }

  init() {
    console.clear();
    console.log("Installing plugins..");
    gsap.registerPlugin(ScrollTrigger);
  }

  createTimelineItems(grid: HTMLElement) {
    console.log("Preparing timeline items..");
    const items = [...grid.children].map((item: any, index: number) => {
      if (item.className.includes("video")) {
        this.video = `.${item.className}`;
        return null;
      }
      else {
        item.classList.add(`item`);
        return {
          duration: item.dataset.duration && parseInt(item.dataset.duration),
          selector: `.item:nth-of-type(${index + 1})`,
          pause: item.dataset.pause && parseInt(item.dataset.pause),
          rect: item.getBoundingClientRect(),
        };
      }
    });
    return items.filter(item => item !== null)
  }

  createTimelineAnimation() {
    console.log(this.timeline);
    console.log("Creating timeline animation..");

    let tl = gsap.timeline();

    this.timeline?.forEach((item: GridTimelineItem | null, index: number) => {
      if (!item?.selector) return;
      tl.to(this.video, {
        scrollTrigger: {
          trigger: item?.selector,
          scrub: 1,
          start: "top bottom",
          end: "+=100%",
          toggleActions: "play none none none",
          
        },
        width: "100%",
        height: "100%",
      })
    });
  }


}