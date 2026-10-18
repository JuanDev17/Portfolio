import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 activeSelection = signal('about');
  selectedNarrative = signal<number | null>(null);
  
  navLinks = [ 
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Enhancements', id: 'enhancements' },
    { label: 'Contact', id: 'contact' }
  ]
  
  setActiveSelection(select: string) {
    this.activeSelection.set(select);
  }




openNarrative(id: number): void {
  this.selectedNarrative.set(id);
  this.setActiveSelection('narrative');
}

backToEnhancements(): void {
  this.selectedNarrative.set(null);
  this.setActiveSelection('enhancements');
}

}

