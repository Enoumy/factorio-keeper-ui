import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

import { BlueprintsListComponent } from "./blueprints-list/blueprints-list.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { UploadBlueprintComponent } from "./upload-blueprint/upload-blueprint.component";
import { MissingPageComponent } from "./missing-page/missing-page.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { BlueprintViewComponent } from "./blueprint-view/blueprint-view.component";
import { SummaryCardComponent } from "./summary-card/summary-card.component";

import { BlueprintsService } from "./blueprints.service";
import { UsersService } from "./users.service";

const appRoutes: Routes = [
  { path: "blueprints", component: BlueprintsListComponent },
  { path: "blueprint/:blueprint_id", component: BlueprintViewComponent },
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
    HomepageComponent,
    BlueprintViewComponent,
    SummaryCardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [BlueprintsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
