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
import { BlueprintsListComponent } from "./blueprints-list/blueprints-list.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { UploadBlueprintComponent } from "./upload-blueprint/upload-blueprint.component";
import { MissingPageComponent } from "./missing-page/missing-page.component";
import { HomepageComponent } from "./homepage/homepage.component";

const appRoutes: Routes = [
  { path: "blueprints", component: BlueprintsListComponent },
  { path: "profile", component: ProfileMenuComponent },
  { path: "profile/:profile_id", component: ProfileViewComponent },
  { path: "upload", component: UploadBlueprintComponent },
  { path: "", component: HomepageComponent },
  { path: "**", component: MissingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlueprintsListComponent,
    ProfileViewComponent,
    ProfileMenuComponent,
    UploadBlueprintComponent,
    MissingPageComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
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
