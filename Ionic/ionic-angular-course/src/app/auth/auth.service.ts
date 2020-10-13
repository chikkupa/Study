import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { throwError } from "rxjs";
import { Place } from "../places/places.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userId = "abc";

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor() {}

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
