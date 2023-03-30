import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project:Project = new Project();
  constructor(private service:ProjectService, private router:Router) { }

  ngOnInit(): void {

  }
  saveProject(){
    this.service.createProject(this.project).subscribe( data =>{
      console.log(data);
      console.log(this.project);
    },
    error => console.log(error));
    alert("Project has been succesfully added!");
    this.router.navigate(['/projects'])
  }
  onSubmit(){
    this.saveProject();
  }
  cancel(){
    this.router.navigate(['/projects'])
  }
}
