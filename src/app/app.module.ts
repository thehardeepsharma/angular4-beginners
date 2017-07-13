import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { HeroService } from './hero.service';
import { ArticleComponent } from './article/article.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';
import { BaseconvertorComponent } from './baseconvertor/baseconvertor.component';
import { BookappComponent } from './bookapp/bookapp.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    UsersComponent,
    AnimationComponent,
    BaseconvertorComponent,
    BookappComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    ReactiveFormsModule,
    HttpModule,
	JsonpModule,
	BrowserAnimationsModule,
    RouterModule.forRoot([
    	{
			path: 'articles',
			component: ArticleComponent
		},
		{
			path: 'users',
			component: UsersComponent
		},
		{
			path: 'animation',
			component: AnimationComponent
		},
		{
			path: 'baseconvertor',
			component: BaseconvertorComponent
		},		
		{
			path: 'bookapp',
			component: BookappComponent
		},
		{
			path: 'hero',
			component: HeroComponent
		},
    ])
  ],
  providers: [ArticleService,HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
