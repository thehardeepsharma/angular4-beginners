import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';
import { BaseconvertorComponent } from './baseconvertor/baseconvertor.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    UsersComponent,
    AnimationComponent,
    BaseconvertorComponent
  ],
  imports: [
    BrowserModule,
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
    ])
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
