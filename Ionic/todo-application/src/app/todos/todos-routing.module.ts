import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosPage } from './todos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
  },
  {
    path: 'add-todo',
    loadChildren: () => import('./add-todo/add-todo.module').then( m => m.AddTodoPageModule)
  },
  {
    path: 'edit-todo/:id',
    loadChildren: () => import('./edit-todo/edit-todo.module').then( m => m.EditTodoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule {}
