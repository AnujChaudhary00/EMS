import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './featureComponent/header/header.component';
import { FooterComponent } from './featureComponent/footer/footer.component';
import { HomeComponent } from './featureComponent/home/home.component';
import { RoomComponent } from './featureComponent/productComponent/room/room.component';
import { LoginComponent } from './featureComponent/user/login/login.component';
import { RegistrationComponent } from './featureComponent/user/registration/registration.component';
import { MyAccountComponent } from './featureComponent/user/tenant/my-account/my-account.component';
import { MyProfileComponent } from './featureComponent/user/my-profile/my-profile.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptorInterceptor} from './interceptor/auth-interceptor.interceptor';
import { RouterModule } from '@angular/router';
import { OwnerDashboardComponent } from './featureComponent/user/owner/owner-dashboard/owner-dashboard.component';
import { TenantDashboardComponent } from './featureComponent/user/tenant/tenantdashboard/tenant-dashboard/tenant-dashboard.component';
import { FavouriteComponent } from './featureComponent/user/tenant/favourite/favourite/favourite.component';
import {AddPgComponent} from './featureComponent/user/owner/add-pg/add-pg.component';
import {PglistComponent} from './featureComponent/user/owner/pglist/pglist.component'
import {RoomDetailComponent} from './featureComponent/productComponent/room/room-detail/room-detail.component';
import {BookingPageComponent} from './featureComponent/productComponent/room/booking-page/booking-page.component';
import { GrivencesComponent } from './featurecomponent/user/owner/grivences/grivences.component'
import { TenantListComponent } from './featureComponent/user/owner/tenant-list/tenant-list.component';
import { ForgotComponent } from './featureComponent/user/forgot/forgot.component';
import { MembersComponent } from './featureComponent/user/owner/members/members.component';
import { AboutusComponent } from './featureComponent/aboutus/aboutus.component';
import { ContactusComponent } from './featureComponent/contactus/contactus.component';
import { OrganisationComponent } from './featureComponent/productComponent/organisation/organisation.component';
import { AboutOrganisationComponent } from './featureComponent/productComponent/organisation/about-organisation/about-organisation.component';
import { ApplyComponent } from './featureComponent/productComponent/organisation/apply/apply.component';
import { ManageOrganisationComponent } from './featureComponent/user/owner/manage-organisation/manage-organisation.component';
import {CancelBookingComponent} from './featureComponent/user/tenant/cancel-booking/cancel-booking.component'
// import {AngularFireModule} from '@angular/fire';
// import {environment} from '../environments/environment';
// import {AngularFireAuthModule} from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoomComponent,
    LoginComponent,
    RegistrationComponent,
    MyAccountComponent,
    MyProfileComponent,
    OwnerDashboardComponent,
    TenantDashboardComponent,
    FavouriteComponent,
    AddPgComponent,
    PglistComponent,
    RoomDetailComponent,
    BookingPageComponent,
    MyAccountComponent,
    GrivencesComponent,
    TenantListComponent,
    ForgotComponent,
    MembersComponent,
    AboutusComponent,
    ContactusComponent,
    OrganisationComponent,
    AboutOrganisationComponent,
    ApplyComponent,
    ManageOrganisationComponent,
    CancelBookingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
