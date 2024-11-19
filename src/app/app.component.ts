import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Fix styleUrls typo
})
export class AppComponent {
  title = 'BugTracker';
  BugName: string = '';
  Description: string = '';
  Priority: string = '';
  Lead: string = '';

  // Bugs array with leads
  toggle: boolean = true;
  bugs: any[] = [
    { lead: 'Lead 1', bug: 'none', description: 'none', priority: 'none' },
    { lead: 'Lead 2', bug: 'none', description: 'none', priority: 'none' },
    { lead: 'Lead 3', bug: 'none', description: 'none', priority: 'none' },
    { lead: 'Lead 4', bug: 'none', description: 'none', priority: 'none' },
  ];
  cur_bug: { bug_name: string; description: string; priority: string } = {
    bug_name: '',
    description: '',
    priority: '',
  };

  lead_bug: String = '';
  selectBug() {
    console.log(this.lead_bug);
    for (let i = 0; i < this.bugs.length; i++) {
      if (this.bugs[i].lead === this.lead_bug) {
        this.cur_bug.bug_name = this.bugs[i].bug;
        this.cur_bug.description = this.bugs[i].description;
        this.cur_bug.priority = this.bugs[i].priority;
      }
      console.log(this.cur_bug);
    }
  }

  submitBug() {
    for (let i = 0; i < this.bugs.length; i++) {
      if (this.bugs[i].lead === this.Lead) {
        this.bugs[i].bug = this.BugName;
        this.bugs[i].description = this.Description;
        this.bugs[i].priority = this.Priority;
      }
    }
    console.log(this.bugs);
  }
}
