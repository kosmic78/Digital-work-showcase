import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [
  { path: 'projects',  component: ProjectComponent,  canActivate : [] },
  { path: 'createproject',  component: CreateProjectComponent,  canActivate : [] },
  { path: 'updateproject/:id', component: UpdateProjectComponent,  canActivate : [] },
  { path: '', redirectTo: 'projects', pathMatch : 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
