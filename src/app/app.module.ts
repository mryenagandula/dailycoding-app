import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthModule } from './auth/auth/auth.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HttpinterceptorInterceptor } from './interceptors/httpinterceptor.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthenticationService } from './auth/authentication.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UsersComponent } from './components/users/users.component';
import { ImageSlideShowComponent } from './components/image-slide-show/image-slide-show.component';
import { AdminDirectiveDirective } from './directives/admin-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AuditsComponent } from './components/audits/audits.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { UserdetailsSideNavComponent } from './components/userdetails-side-nav/userdetails-side-nav.component';
import { MatRadioModule} from '@angular/material/radio';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTabsModule} from '@angular/material/tabs'
import { ProfileComponent } from './components/profile/profile.component';
import { DatePipe } from '@angular/common';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AuditdetailsSidenavComponent } from './components/auditdetails-sidenav/auditdetails-sidenav.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CreateblogComponent } from './components/createblog/createblog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ProductsComponent,
    AboutusComponent,
    BlogsComponent,
    ForbiddenComponent,
    UsersComponent,
    ImageSlideShowComponent,
    AdminDirectiveDirective,
    AuditsComponent,
    UserdetailsSideNavComponent,
    ProfileComponent,
    BlogListComponent,
    BlogDetailsComponent,
    AuditdetailsSidenavComponent,
    TermsandconditionsComponent,
    SettingsComponent,
    CreateblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    PdfViewerModule
  ],
  providers: [
    DatePipe,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpinterceptorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
