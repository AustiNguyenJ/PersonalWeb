import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  console.log(element?.getBoundingClientRect())
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


}
