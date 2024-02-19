import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    translatedTexts: { [key: string]: string; } = {};
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private translate: TranslateService) {
        this.translate.addLangs(['it', 'en']);
        this.translate.use('en');
    }

    languages: any[] = [
        { label: 'EN', value: 'en', flag: './../../assets/layout/translate/en.png' },
        { label: 'IT', value: 'it', flag: './../../assets/layout/translate/it.png' },
    ];

    changeLanguage(val: any) {
        const selectedLanguage = val.value.value;


        this.translate.use(selectedLanguage);
    }


}
