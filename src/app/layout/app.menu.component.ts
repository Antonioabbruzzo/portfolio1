import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'I miei progetti',
                items: [
                    { label: 'IMDb', icon: 'pi pi-fw pi-cog', routerLink: ['imdb'] },
                    { label: 'Brewery', icon: 'pi pi-fw pi-cog', routerLink: ['brewery'] },
                    { label: 'Harry Potter', icon: 'pi pi-fw pi-cog', routerLink: ['harrypotter'] },
                    { label: 'Take a break', icon: 'pi pi-fw pi-cog', routerLink: ['game'] },
                    { label: 'Anime', icon: 'pi pi-fw pi-cog', routerLink: ['anime'] },
                    { label: 'Library', icon: 'pi pi-fw pi-cog', routerLink: ['libreria'] },
                    { label: 'Your university career.', icon: 'pi pi-fw pi-cog', routerLink: ['crea'] },
                    { label: 'Your baby tracker', icon: 'pi pi-fw pi-cog', routerLink: ['baby'] },
                ]
            },
            {
                label: 'Contatti',
                items: [
                    { label: 'Linkedin', icon: 'pi pi-fw pi-linkedin', url: "https://www.linkedin.com/in/antonio-abbruzzo-12a99718b/", target: "_blanck" },
                    { label: 'abbruzzo.antonio95@gmail.com', icon: 'pi pi-fw pi-envelope' }
                ]
            },
            {
                label: 'Settings'
            }

        ];

    }
    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
        console.log(' ciao');

    }
}
