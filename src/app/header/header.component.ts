import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  filmIcon = faFilm;
  isShowMenu = true;  
  
    openMenu() {  
      this.isShowMenu = !this.isShowMenu;  
    } 

}
