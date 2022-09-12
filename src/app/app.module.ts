
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { VerifyComponent } from './verify/verify.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
// import { UserformComponent } from './userform/userform.component';
import { CommonModule } from '@angular/common';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { LoginComponent } from './login/login.component';
import { RegisterFunderComponent } from './register-funder/register-funder.component';
import { CalculateOrderPaymentComponent } from './calculate-order-payment/calculate-order-payment.component';
import { ListorderComponent } from './listorder/listorder.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { FindAllOrderComponent } from './find-all-order/find-all-order.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import {  UpdateUpdateMasterDataComponent } from './update-master-data/update-master-data.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ApproveOrderComponent } from './approve-order/approve-order.component';
import { MnoViewOrderListComponent } from './mno-view-order-list/mno-view-order-list.component';
import { PaymentComponent } from './payment/payment.component';
import { TransactionListByReqidComponent } from './transaction-list-by-reqid/transaction-list-by-reqid.component';
import { TransactionListBytransidComponent } from './transaction-list-bytransid/transaction-list-bytransid.component';
import { GrandAccessComponent } from './grand-access/grand-access.component';
import { RequestDocumentComponent } from './request-document/request-document.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DisplaydocumentComponent } from './displaydocument/displaydocument.component';
import { DisplayDocumentComponent } from './display-document/display-document.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
// import { ApprovalListComponent } from './approval-list/approval-list.component';


@NgModule({
  imports:      [ BrowserModule, NgxPaginationModule,FormsModule ,ReactiveFormsModule,CommonModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, RegisterSchoolComponent, LoginComponent, RegisterFunderComponent, CalculateOrderPaymentComponent, ListorderComponent, MasterDataComponent, FindAllOrderComponent, PaginationComponent, UpdateUpdateMasterDataComponent, ConfirmOrderComponent, ApproveOrderComponent, MnoViewOrderListComponent, PaymentComponent, TransactionListByReqidComponent, TransactionListBytransidComponent, GrandAccessComponent, RequestDocumentComponent, AuthenticationComponent, DisplaydocumentComponent, DisplayDocumentComponent, UploadDocumentComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



