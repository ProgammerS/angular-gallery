import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  imageUrls: string[] = []; // Array to store multiple image URLs
  numberOfImages = 30; // Default number of images to load

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadImages(); // Load initial set of images when the component initializes
  }

  // Method to load a new set of random images
  loadImages(): void {
    for (let i = 0; i < this.numberOfImages; i++) {
      this.postService.getRandomImage().subscribe((blob) => {
        const imageUrl = URL.createObjectURL(blob); // Create a URL from the Blob
        this.imageUrls.push(imageUrl); // Add the new image URL to the array
      });
    }
  }

  // Method to handle the "Load More" button click
  loadMoreImages(): void {
    this.loadImages(); // Append more images to the gallery
  }
}
