import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './featureComponent/home/home.component';
import {RoomComponent} from './featureComponent/productComponent/room/room.component';
import {LoginComponent} from './featureComponent/user/login/login.component';
import {RegistrationComponent} from './featureComponent/user/registration/registration.component'
import {MyProfileComponent} from './featureComponent/user/my-profile/my-profile.component';
import{RouterGuardGuard} from './routeGuard/router-guard.guard';
import{OwnerGuard} from './routeGuard/owner-guard/owner.guard';
import {OwnerDashboardComponent} from './featureComponent/user/owner/owner-dashboard/owner-dashboard.component';
import {AddPgComponent} from './featureComponent/user/owner/add-pg/add-pg.component';
import {PglistComponent} from './featureComponent/user/owner/pglist/pglist.component';
import { TenantListComponent } from './featureComponent/user/owner/tenant-list/tenant-list.component';
import {TenantDashboardComponent} from './featureComponent/user/tenant/tenantDashboard/tenant-dashboard/tenant-dashboard.component';
import {MyAccountComponent} from './featureComponent/user/tenant/my-account/my-account.component';
import {FavouriteComponent} from './featureComponent/user/tenant/favourite/favourite/favourite.component';
import {TenantGuard} from './routeGuard/tenant-guard/tenant.guard';
import {RoomDetailComponent} from './featureComponent/productComponent/room/room-detail/room-detail.component';
import { from } from 'rxjs';
import { BookingPageComponent } from './featureComponent/productComponent/room/booking-page/booking-page.component';
import { GrivencesComponent } from './featurecomponent/user/owner/grivences/grivences.component';
import { ForgotComponent } from './featureComponent/user/forgot/forgot.component';
import { OrganisationComponent } from './featureComponent/productComponent/organisation/organisation.component';
import { ContactusComponent } from './featureComponent/contactus/contactus.component';
import { AboutusComponent } from './featureComponent/aboutus/aboutus.component';
import { MembersComponent } from './featureComponent/user/owner/members/members.component';
import { AboutOrganisationComponent } from './featureComponent/productComponent/organisation/about-organisation/about-organisation.component';
import { ApplyComponent } from './featureComponent/productComponent/organisation/apply/apply.component';
import { PageNotFoundComponent } from './featureComponent/page-not-found/page-not-found.component';
import { ManageOrganisationComponent } from './featureComponent/user/owner/manage-organisation/manage-organisation.component';
import { CancelBookingComponent } from './featureComponent/user/tenant/cancel-booking/cancel-booking.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    children:[
      {
        path:'login/:id',
        component:LoginComponent
      },
      {
        path:"**",
        component:LoginComponent
      }
    ]
  },
  {
    path:'forgot-password',
    component:ForgotComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'home',
   component:HomeComponent
  },
  {
    path:'user',
    component:MyAccountComponent
  },
  {
    path:'organisations',
    children:[
      {
        path:'about/:id',
        children:[
          {
            path:'apply',
            component:ApplyComponent,
            canActivate:[RouterGuardGuard]
          },
          {
            path:"**",
            component:AboutOrganisationComponent
          }
        ]
      },
      {
        path:"**",
        component:OrganisationComponent
      }
    ]
  },
  {
    path:'contact-us',
    component:ContactusComponent
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'dashboard',
    component:OwnerDashboardComponent,
    children:[
      {
        path:'my-profile',
        component:MyProfileComponent
      },
      {
        path:'add-Event',
        component:AddPgComponent
      },
      {
        path:'event-List',
        component:PglistComponent
      },
      {
        path:'participants',
        component:TenantListComponent
      },
      {
        path:'members',
        component:MembersComponent
      },
      {
        path:'my-organisation',
        component:ManageOrganisationComponent
      },
      {
        path:'grivences',
        component:GrivencesComponent
      }
    ],
    canActivate:[OwnerGuard]
  },
  {
    path:'student-dashboard',
    component:TenantDashboardComponent,
    children:[
      {
        path:'my-account',
        component:MyAccountComponent
      },
      {
        path:'applications',
        component:CancelBookingComponent
      },
      {
        path:'my-profile',
        component:MyProfileComponent
      },
      {
        path:'my-ticket',
        component:FavouriteComponent
      }
    ],
    canActivate:[TenantGuard]
  },
  {
      path:'events',
      children:[
      {
        path:' /:id',
        children:[
          {
            path:'register',
            component:BookingPageComponent,
            canActivate:[RouterGuardGuard]  
          },
          {
            path:"**",
            component:RoomDetailComponent
          }
        ]
      },
      {
          path:"**",
          component:RoomComponent,
      }
    ]
  },
  // {
  //   path:'food',
  //   component:FoodComponent
  // },
  // {
  //   path:'vehicle',
  //   component:VehicleComponent
  // },
  // {
  //   path:'laundry',
  //   component:LaundryComponent
  // },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
