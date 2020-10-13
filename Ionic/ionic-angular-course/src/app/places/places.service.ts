import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { take, map, tap, delay, switchMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Place } from "./places.model";

// new Place(
//   "p1",
//   "Trivandum",
//   "Kerala",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Double_Decker_bus_in_Trivandrum.jpg/220px-Double_Decker_bus_in_Trivandrum.jpg",
//   3000,
//   new Date("2020-01-01"),
//   new Date("2020-12-31"),
//   "admin"
// ),
// new Place(
//   "p2",
//   "Kollam",
//   "Kerala",
//   "https://www.kerala.com/userfiles/1548914155_neendakara-bridge.jpg",
//   1880,
//   new Date("2020-01-01"),
//   new Date("2020-12-31"),
//   "admin"
// ),
// new Place(
//   "p3",
//   "Eranakulam",
//   "Kerala",
//   "https://www.kerala.com/userfiles/1548910100_ernakulam.jpg",
//   3500,
//   new Date("2020-01-01"),
//   new Date("2020-12-31"),
//   "admin"
// ),

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  get places() {
    return this._places.asObservable();
  }

  fetchPlaces() {
    return this.http
      .get<{ [key: string]: PlaceData }>(
        "https://ionic-angular-course-50dc6.firebaseio.com/offered-places.json"
      )
      .pipe(
        map((respData) => {
          const places = [];
          for (const key in respData) {
            if (respData.hasOwnProperty(key)) {
              places.push(
                new Place(
                  key,
                  respData[key].title,
                  respData[key].description,
                  respData[key].imageUrl,
                  respData[key].price,
                  new Date(respData[key].availableFrom),
                  new Date(respData[key].availableTo),
                  respData[key].userId
                )
              );
            }
          }
          return places;
        }),
        tap((places) => {
          this._places.next(places);
        })
      );
  }

  constructor(private authService: AuthService, private http: HttpClient) {}

  getPlace(id: string) {
    return this.http
      .get<PlaceData>(
        `https://ionic-angular-course-50dc6.firebaseio.com/offered-places/${id}.json`
      )
      .pipe(
        map((placeData) => {
          return new Place(
            id,
            placeData.title,
            placeData.description,
            placeData.imageUrl,
            placeData.price,
            new Date(placeData.availableFrom),
            new Date(placeData.availableTo),
            placeData.userId
          );
        })
      );

    // return this.places.pipe(
    //   take(1),
    //   map((places) => {
    //     return { ...places.find((p) => p.id === id) };
    //   })
    // );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;

    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp7iYOD9E7Y188XjYIm8EMO_eOF72OquWF1w&usqp=CAU",
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );

    return this.http
      .post<{ name: string }>(
        "https://ionic-angular-course-50dc6.firebaseio.com/offered-places.json",
        { ...newPlace, id: null }
      )
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.places;
        }),
        take(1),
        tap((places) => {
          newPlace.id = generatedId;
          this._places.next(places.concat(newPlace));
        })
      );

    // return this.places.pipe(
    //   take(1),
    //   delay(2000),
    //   tap((places) => {
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updatePlace(placeId: string, title: string, description: string) {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1),
      switchMap((places) => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          return of(places);
        }
      }),
      switchMap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => pl.id === placeId);
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        return this.http.put(
          `https://ionic-angular-course-50dc6.firebaseio.com/offered-places/${placeId}.json`,
          { ...updatedPlaces[updatedPlaceIndex], id: null }
        );
      }),
      tap(() => {
        this._places.next(updatedPlaces);
      })
    );
  }
}
