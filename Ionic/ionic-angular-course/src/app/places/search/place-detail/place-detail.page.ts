import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { BookingService } from "src/app/bookings/booking.service";
import { CreateBookingsComponent } from "../../../bookings/create-bookings/create-bookings.component";
import { Place } from "../../places.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  placeSub: Subscription;
  bookingSub: Subscription;
  isBookable = false;
  isLoading = false;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController,
    private bookingService: BookingService,
    private loadingCtl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.placeSub = this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/search");
        return;
      }
      this.isLoading = true;
      this.placesService.getPlace(paramMap.get("placeId")).subscribe(
        (place) => {
          this.place = place;
          this.isBookable = place.userId !== this.authService.userId;
          this.isLoading = false;
        },
        (error) => {
          this.alertCtrl
            .create({
              header: "An error occured!",
              message: "Could not load place",
              buttons: [
                {
                  text: "Okay",
                  handler: () => {
                    this.router.navigate(["/places/tabs/search"]);
                  },
                },
              ],
            })
            .then((alertEl) => alertEl.present());
        }
      );
    });
  }

  onBookPlace() {
    this.actionSheetController
      .create({
        header: "Choose an action",
        buttons: [
          {
            text: "Select Date",
            handler: () => {
              this.openBookingModal("select");
            },
          },
          {
            text: "Random Date",
            handler: () => {
              this.openBookingModal("random");
            },
          },
          {
            text: "Cancel",
            role: "destructive",
          },
        ],
      })
      .then((actionSheetEl) => {
        actionSheetEl.present();
      });
  }

  openBookingModal(mode: "select" | "random") {
    console.log(mode);

    this.modalCtrl
      .create({
        component: CreateBookingsComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData);
        this.loadingCtl.create({ message: "Booking ..." }).then((loadingEl) => {
          loadingEl.present();

          if (resultData.role === "confirm") {
            this.bookingSub = this.bookingService
              .addBooking(
                this.place.id,
                this.place.title,
                this.place.imageUrl,
                resultData.data.bookingData.firstName,
                resultData.data.bookingData.lastName,
                resultData.data.bookingData.guestNumber,
                resultData.data.bookingData.startDate,
                resultData.data.bookingData.endDate
              )
              .subscribe(() => {
                loadingEl.dismiss();
              });
          }
        });
      });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }

    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }
}
