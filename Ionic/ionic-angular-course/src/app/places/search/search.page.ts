import { Component, OnDestroy, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Place } from "../places.model";
import { PlacesService } from "../places.service";
import { SegmentChangeEventDetail } from "@ionic/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  relevantPlaces: Place[];
  placesSub: Subscription;
  isLoading = true;

  constructor(
    private placesService: PlacesService,
    private menuCtr: MenuController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() => (this.isLoading = false));
  }

  onOpenMenu() {
    this.menuCtr.toggle("m1");
  }

  onFilterUpdated(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
    if (event.detail.value === "all") {
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(
        (place) => place.userId !== this.authService.userId
      );
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    }
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
