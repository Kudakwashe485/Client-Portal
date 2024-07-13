import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoutConfirmationComponent } from '../login/logout-confirmation/logout-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PastHelpComponent } from './past-help/past-help.component';
import { AuthService } from '../../services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  filteredorders: any[] = [];
  email!: string;
  role: string = "";
  orderActionLoading: boolean = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private userStore: UserStoreService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshPage();
    this.loadData();
  }

  refreshPage(): void {
    if (!sessionStorage.getItem('isRefreshed')) {
      sessionStorage.setItem('isRefreshed', 'true');
      window.location.reload();
    } else {
      sessionStorage.removeItem('isRefreshed');
    }
  }

  loadData(): void {
    this.userStore.getRoleFromStore().subscribe(val => {
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
    });

    this.userStore.getEmailFromStore().subscribe(val => {
      const EmailFromToken = this.auth.getEmailFromToken();
      this.email = val || EmailFromToken;
    });

    this.filteredorders = this.orders;
    console.log(this.filteredorders);
  }

  getOrder(email: string) {
    this.api.GetOrderInfor(email).subscribe(
      (data: Order[]) => {
        console.log(data);
        this.filteredorders = data;
      },
      (error: any) => {
        console.error('An error occurred:', error);
      }
    );
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.auth.signOut();
        this.snackBar.open('Logged out successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
      }
    });
  }

  openHelpModal(field: string): void {
    const dialogRef = this.dialog.open(PastHelpComponent, {
      width: '500px',
      data: { field }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
