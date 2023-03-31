import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Project } from '../project';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:Project[] = [];
  constructor(private service:ProjectService, private router:Router) { }
//
  ngOnInit(): void {
    this.service.getResults().subscribe(data=>{
      this.projects=data;
    });
  }
  deleteProject(project_id: any){
    this.service.deleteProject(project_id).subscribe((data)=>{
      console.log(data)
    })
    alert("Project has been succesfully deleted!");
  }
  updateProject(project_id:any){
    this.router.navigate(['updateproject',project_id])
    console.log(project_id)
  }
  hideProject(project: Project) {
    project.hidden = true;
  }

  unhideProject(project: Project) {
    project.hidden = false;
  }
  
}
