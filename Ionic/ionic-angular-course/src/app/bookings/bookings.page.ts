import { Component, OnDestroy, OnInit } from "@angular/core";
import { IonItemSliding, LoadingController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Booking } from "./booking.model";
import { BookingService } from "./booking.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"],
})
export class BookingsPage implements OnInit, OnDestroy {
  public loadedBookings: Booking[];
  private bookingSub = new Subscription();
  isLoading = false;

  constructor(private bookingService: BookingService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.bookingSub = this.bookingService.bookings.subscribe((bookings) => {
      this.loadedBookings = bookings;
    });
    console.log(this.loadedBookings);
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.bookingService.fetchBooking().subscribe(() => {
      this.isLoading = false;
    });
  }

  onCancelBooking(bookingId: string, slidingBooking: IonItemSliding) {
    slidingBooking.close();
    this.loadingCtrl.create({message: 'Cancelling...'}).then(loadingEl => {
      loadingEl.present();
      this.bookingService.cancelBooking(bookingId).subscribe(() => loadingEl.dismiss());
    })
    // cancel booking with offer id
  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }
}
