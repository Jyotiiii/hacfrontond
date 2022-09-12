import { Routes } from '@angular/router';
import { ApprovallistComponent } from './approval-list/approval-list.component';
import { ApproveOrderComponent } from './approve-order/approve-order.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CalculateOrderPaymentComponent } from './calculate-order-payment/calculate-order-payment.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { DisplayDocumentComponent } from './display-document/display-document.component';
import { FindAllOrderComponent } from './find-all-order/find-all-order.component';
import { GrandAccessComponent } from './grand-access/grand-access.component';
import { ListorderComponent } from './listorder/listorder.component';
import { LoginComponent } from './login/login.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { MnoViewOrderListComponent } from './mno-view-order-list/mno-view-order-list.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterFunderComponent } from './register-funder/register-funder.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { RequestDocumentComponent } from './request-document/request-document.component';
import { TransactionListByReqidComponent } from './transaction-list-by-reqid/transaction-list-by-reqid.component';
import { TransactionListBytransidComponent } from './transaction-list-bytransid/transaction-list-bytransid.component';
import { UpdateUpdateMasterDataComponent } from './update-master-data/update-master-data.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ResetPasswordsuccessfullyComponent } from './reset-passwordsuccessfully/reset-passwordsuccessfully.component';

 
export const appRoutes: Routes = [
  // { path: '', component: RegisterSchoolComponent },
    // { path: 'registerschool', component: RegisterSchoolComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registerfunder', component: RegisterFunderComponent },
    { path: 'CalculateOrderPayment', component: CalculateOrderPaymentComponent},
    { path: 'listorder', component: ListorderComponent},
    { path: 'MasterData', component: MasterDataComponent},
    { path: 'FindOrders', component: FindAllOrderComponent},
    { path: 'UpdateMasterData', component: UpdateUpdateMasterDataComponent},
    { path: 'ConfirmOrder/:requestId', component: ConfirmOrderComponent},
    { path: 'ApproveOrder', component: ApproveOrderComponent},
    { path: 'MnoOrderViewList', component: MnoViewOrderListComponent},
    { path: 'Approvallist', component: ApprovallistComponent},
    { path: 'Payment', component: PaymentComponent},
    { path: 'TransactionListByreqid/:requestId', component: TransactionListByReqidComponent},
    { path: 'TransactionListBytransid/:transactionId', component: TransactionListBytransidComponent},
    { path: 'grandAccess', component: GrandAccessComponent},
    { path: 'requestDocument', component: RequestDocumentComponent},
    { path: 'authentication', component: AuthenticationComponent},
    { path: 'displayDocument', component: DisplayDocumentComponent},
    { path: 'uploadDocument', component: UploadDocumentComponent}




]
  