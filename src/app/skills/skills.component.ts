import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],

})

export class SkillsComponent {
  showContent: boolean = false;

  toggle(){
    this.showContent = !this.showContent;
  }

  skillsMap: any[]=[
    {name: 'Python',      icon: 'devicon-python-plain',     desc:'This is sample text'},
    {name: 'Java',        icon: 'devicon-java-plain',       desc:'This is sample text'},
    {name: 'C++',         icon: 'devicon-cplusplus-plain',  desc:'This is sample text'},
    {name: 'Typescript',  icon: 'devicon-typescript-plain', desc:'This is sample text'},
    {name: 'Css',         icon: 'devicon-css3-plain',       desc:'This is sample text'},
    {name: 'Html',        icon: 'devicon-html5-plain',      desc:'This is sample text'},
    {name: 'AngularJS',   icon: 'devicon-angularjs-plain',  desc:'This is sample text'},
  ]

}
