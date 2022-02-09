import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menus: string[] = [];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      data => {
        this.menus = data;
      },
      err => {
        this.menus = JSON.parse(err.error).message;
      }
    );
  }

  convertToJSON(products:any){
    return JSON.parse(products);
  }

}
