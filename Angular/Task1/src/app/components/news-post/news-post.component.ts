import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() imageSrc: string;
  @Input() imageAlt: string;

  constructor() {
    this.title = '';
    this.content = '';
    this.imageSrc = '';
    this.imageAlt = '';
  }

  randomDate(): string {
    const start = new Date(2022, 0, 1); // Replace with a relevant start date for your news posts
    const end = new Date(); // Use the current date as the end date
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toDateString();
  }
}
