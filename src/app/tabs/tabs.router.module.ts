import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'upload',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../upload/upload.module').then(m => m.UploadPageModule)
          }
        ]
      },
      {
        path: 'postView',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../post-view/post-view.module').then(m => m.PostViewPageModule)
          }
        ]
      }
      ,
      {
        path: 'messaging',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../messaging/messaging.module').then(m => m.MessagingPageModule)
          }
        ]
      }
      ,
      {
        path: 'messaging-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../messaging-list/messaging-list.module').then(m => m.MessagingListPageModule)
          }
        ]
      },
      {
        path: 'userfeed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../userfeed/userfeed.module').then(m => m.UserfeedPageModule)
          }
        ]
      }
      ,
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      }
      ,
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
