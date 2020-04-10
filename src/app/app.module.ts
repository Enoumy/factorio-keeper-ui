import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { BlueprintsListComponent } from './blueprints-list/blueprints-list.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { UploadBlueprintComponent } from './upload-blueprint/upload-blueprint.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BlueprintsListComponent, ProfileViewComponent, ProfileMenuComponent, UploadBlueprintComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
