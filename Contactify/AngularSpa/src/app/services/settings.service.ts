import {Injectable} from "@angular/core"
import {environment} from "../../environments/environment";

@Injectable()

export class SettingsService {
  public apiBaseUrl: string;
  public authBaseUrl: string;
  public appBaseUrl: string;
  public tokenStorageKey: string;
  public userStorageKey: string; // stores ITokenResult

  constructor() {
    if (environment.production) {
      //       this.apiBaseUrl = "./api/";
      //  this.appBaseUrl = "/";

    } else {
      this.apiBaseUrl = 'http://localhost:50912/api/';
      this.appBaseUrl = 'http://localhost:4200/';
    }
    this.tokenStorageKey = 'vacation-token';
    this.userStorageKey = 'user-info';
  }
}
