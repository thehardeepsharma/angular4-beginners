import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { HeroService } from './hero.service';
import { ArticleComponent } from './article/article.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';
import { BaseconvertorComponent } from './baseconvertor/baseconvertor.component';
import { BookappComponent } from './bookapp/bookapp.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { SigninComponent } from './signin/signin.component';

import { DatatableComponent } from './datatable/datatable.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    UsersComponent,
    AnimationComponent,
    BaseconvertorComponent,
    BookappComponent,
    HeroComponent,
    HeroDetailsComponent,
    HomeComponent,
    ChildComponent,
	DatatableComponent,
	SigninComponent,
	ConfirmComponent,
	TabsComponent	
  ],
  entryComponents: [
	ConfirmComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    ReactiveFormsModule,
    HttpModule,
	JsonpModule,
	BrowserAnimationsModule,
	DataTableModule,
	BootstrapModalModule.forRoot({container:document.body}),
    RouterModule.forRoot([
    	{
			path: 'home',
			component: HomeComponent
		},
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
		{
			path: 'child',
			component: ChildComponent
		},
		{
			path: 'datatable',
			component: DatatableComponent
		},
		{
			path: 'signin',
			component: SigninComponent
		},
		{
			path: 'tabs',
			component: TabsComponent
		},
    ])
  ],
  providers: [ArticleService,HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
