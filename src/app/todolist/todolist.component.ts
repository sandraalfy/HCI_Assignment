import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [
    { taskName: 'HCI Assignment', description: 'Create a task management App', dueDate: '2024-04-11', isCompleted: false, isEditable: false }
  ];

  descriptionInTable: string = '';
  dueDateInTable: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      description: form.controls['description'].value,
      dueDate: form.controls['dueDate'].value,
      isCompleted: false,
      isEditable: false
    });

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;

    this.descriptionInTable = this.taskArray[index].description;
    this.dueDateInTable = this.taskArray[index].dueDate;
  }

  onSave(index: number, newTask: string, newDescription: string, newDueDate: string) {
    const editedTask = this.taskArray[index];
    if (newTask.trim() !== '') {
      editedTask.taskName = newTask;
    }
    if (newDescription.trim() !== '') {
      editedTask.description = newDescription;
    }
    if (newDueDate.trim() !== '') {
      editedTask.dueDate = newDueDate;
    }
    editedTask.isEditable = false;
  }
}
