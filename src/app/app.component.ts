import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  showCompletedTasks: boolean = false;

  private list = new TodoList('Peter', [
    new TodoItem('Learn Angular'),
    new TodoItem('Learn VueJS'),
    new TodoItem('Learn Advanced React', true),
    new TodoItem('Install Ruby on your Windows machine', false),
    new TodoItem('Build an Angular web app.', false),
    new TodoItem('Record Youtube tutorial video'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number | string {
    return this.list.items.filter((item) => !item.completed).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showCompletedTasks || !item.completed
    );
  }

  addItem(task: string) {
    if (task != '') {
      this.list.addItem(task);
    }
  }
}
