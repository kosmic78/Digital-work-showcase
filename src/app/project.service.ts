import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectURL = "http://localhost:3000/projects";
  constructor(private http: HttpClient) {}

  getResults(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectURL}`);
  }

  createProject(project: Project): Observable<Object> {
    return this.http.post(`${this.projectURL}`, project);
  }

  deleteProject(id: any): Observable<Object> {
    return this.http.delete(`${this.projectURL}/${id}`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.projectURL}/${id}`);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.projectURL}/${project.id}`, project);
  }
}
