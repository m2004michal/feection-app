import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TokenInterceptor } from './token-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';''
import {ToastrModule} from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { CategoryListComponent } from './shared/category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    CreateCategoryComponent,
    CreatePostComponent,
    PostTileComponent,
    CategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
