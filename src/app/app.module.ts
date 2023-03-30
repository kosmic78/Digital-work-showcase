import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './update-project/update-project.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
