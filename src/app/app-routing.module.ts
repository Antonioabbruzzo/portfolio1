import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('../app/pages/landingPage/landing.module').then(m => m.LandingModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'imdb', loadChildren: () => import('../app/pages/imdb/imdb.module').then(m => m.ImdbModule) },
                    { path: 'brewery', loadChildren: () => import('../app/pages/brewery/brewery.module').then(m => m.BreweryModule) },
                    { path: 'harrypotter', loadChildren: () => import('../app/pages/HarryPotter/harry-potter.module').then(m => m.HarryPotterModule) },
                    { path: 'anime', loadChildren: () => import('../app/pages/Anime/anime.module').then(m => m.AnimeModule) },
                    { path: 'libreria', loadChildren: () => import('../app/pages/libreria/libreria.module').then(m => m.LibreriaModule) },
                    { path: 'game', loadChildren: () => import('../app/pages/game/game.module').then(m => m.GameModule) }
                ]
            },

            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            // { path: 'notfound', component: NotfoundComponent },
            // { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
