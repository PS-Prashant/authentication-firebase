import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/confiq';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		TopbarComponent,
		SidemenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
		FirestoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
