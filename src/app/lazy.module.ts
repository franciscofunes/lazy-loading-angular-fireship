import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

import { Routes, RouterModule } from '@angular/router';

//define an array of routes
const routes: Routes = [
  {
    // imperative loads the lazy parent component
    path: 'load-me',
    component: LazyParentComponent,
  },
];

@NgModule({
  declarations: [LazyParentComponent, LazyChildComponent],
  // forChild function for iterating and passing the array we created above to the router module
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
