interface GridTimelineItem {
  duration: number | undefined;
  selector: string;
  pause?: number | undefined;
  next: string | false;
}
