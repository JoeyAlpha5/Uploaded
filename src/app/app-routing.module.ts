import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'upload', loadChildren: './upload/upload.module#UploadPageModule' },
  { path: 'post-view', loadChildren: './post-view/post-view.module#PostViewPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'messaging', loadChildren: './messaging/messaging.module#MessagingPageModule' },
  { path: 'messaging-list', loadChildren: './messaging-list/messaging-list.module#MessagingListPageModule' },
  { path: 'userfeed', loadChildren: './userfeed/userfeed.module#UserfeedPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
