import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  langs: String[] = [];
  constructor(
  private translate: TranslateService
  ) {this.translate.setDefaultLang('en');
  this.translate.use('es');
  this.translate.addLangs(['es', 'en']);
  this.langs = this.translate.getLangs(); }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {
  }

}
