import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account/service/account.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionService } from './transaction/service/transaction.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user/service/user.service';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './user/service/token.interceptor';
import { AuthenticationGuard } from './app-guard.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './account/modal/modal/modal.component';
import {MatSelectModule} from '@angular/material/select';
import { DeleteModalComponent } from './account/modal/delete/delete-modal/delete-modal.component';
import { RaportComponent } from './transaction/modal/raport/raport.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TransactionComponent,
    UserComponent,
    LoginComponent,
    ModalComponent,
    DeleteModalComponent,
    RaportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule, 
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AccountService, TransactionService, UserService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
