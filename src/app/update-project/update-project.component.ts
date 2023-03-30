import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  id!: number;
  project: Project = new Project();
  constructor(private router: ActivatedRoute, private service: ProjectService, private route: Router) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.service.getProjectById(this.id).subscribe(data => {
      this.project = data;
    });
  }

  onSubmit() {
    this.service.updateProject(this.project).subscribe(data => {
      console.log(data);
      this.route.navigate(['projects']);
    });
    alert("Project has been succesfully updated!")
  }
  cancel() {
    this.route.navigate(['/projects'])
  }
}
