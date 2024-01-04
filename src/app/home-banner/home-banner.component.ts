import { Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent {


  isShowDiv1 = true;  
  isShowDiv2 = true;  
  isShowDiv3 = true;  
   displaydivopen1='';
   displaydivopen2='';
   displaydivopen3='';
     
  toggleDisplayDiv1() {  
    this.isShowDiv1 = !this.isShowDiv1; 
    this.isShowDiv2 = true; 
    this.isShowDiv3= true; 
    if(!this.isShowDiv1){
      this.displaydivopen1='open';
      this.displaydivopen2='';
      this.displaydivopen3='';
    }
    else{
      this.displaydivopen1='';
    }
  
  }
  toggleDisplayDiv2() {  
    this.isShowDiv2 = !this.isShowDiv2;  
    this.isShowDiv1 = true; 
    this.isShowDiv3= true; 
    if(!this.isShowDiv2){
      this.displaydivopen2='open';
      this.displaydivopen3='';
      this.displaydivopen1='';
    }
    else{
      this.displaydivopen2='';
    }

  }
  toggleDisplayDiv3() {  
    this.isShowDiv3 = !this.isShowDiv3; 
    this.isShowDiv1 = true; 
    this.isShowDiv2= true; 
    if(!this.isShowDiv3){
      this.displaydivopen3='open';
      this.displaydivopen2='';
      this.displaydivopen1='';
    }
    else{
      this.displaydivopen3='';

    } 

  }

}
