import { Component, HostListener } from '@angular/core';
import { Skill } from '../app/models/skill.interface';
import { Project } from '../app/models/project.interface';
import { Experience } from '../app/models/experience.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';

  public fixedHeader: boolean = false;

  public languages_first: Skill[] = [
    {name: "JavaScript", svg: "../../../assets/svgs/javascript.svg"},
    {name: "TypeScript", svg: "../../../assets/svgs/typescript.svg"},
    {name: "Java", svg: "../../../assets/svgs/java.svg"}
  ];

  public languages_second: Skill[] = [
    {name: "Python", svg: "../../../assets/svgs/python.svg"},
    {name: "Elm", svg: "../../../assets/svgs/elm.svg"}
  ];

  public frameworks_first: Skill[] = [
    {name: "Angular", svg: "../../../assets/svgs/angular.svg"},
    {name: "Ionic", svg: "../../../assets/svgs/ionic.svg"},
    {name: "NodeJS", svg: "../../../assets/svgs/node-dot-js.svg"}
  ];

  public frameworks_second: Skill[] = [
    {name: "Flask", svg: "../../../assets/svgs/flask.svg"},
    {name: "SQLite", svg: "../../../assets/svgs/sqlite.svg"}
  ];

  public github_projects: Project[] = [
    {name: "Ostratum", description: "Ostratum is a web-based application that supports developers to manage their app translations.", url: "https://github.com/SerQuicky/ostratum-translation-manager"},
    {name: "Elmlord", description: "Elmlord is a turn-based singleplayer strategy game, which is completely developed in the programming language Elm.", url: "https://github.com/flofe104/elmlord"},
    {name: "More projects", description: "There are also some smaller projects and tools for different topics, check them out :)", url: "https://github.com/SerQuicky"}
  ];

  public experiences: Experience[] = [
    {title: "Bachelor at the University of Applied Sciences Flensburg", description: "Studied topics in software engineering, algorithms, security and mathematics. (Grade: 1.5)", timeline: "September 2016 - April 2020", image: "../../../assets/images/flensburg.png", code: "flensburg"},
    {title: "Working Student at Tacoss Software GmbH", description: "Developing mobile- and web-applications in Ionic and Angular.", timeline: "September 2018 - today", image: "../../../assets/images/tacoss.png", code: "tacoss"},
    {title: "Master at the University of Applied Sciences Flensburg", description: "Studying topics in mobile computing, security and human computer interactions.", timeline: "April 2020 - today", image: "../../../assets/images/flensburg.png", code: "flensburg"}
  ]

  constructor() {}

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public openLink(): void {
    window.open("https://github.com/SerQuicky", '_blank');
  }

  @HostListener('window:scroll', ['$event']) 
  checkPageOffset(event) {
    this.fixedHeader = window.pageYOffset > 110;
  }
}
