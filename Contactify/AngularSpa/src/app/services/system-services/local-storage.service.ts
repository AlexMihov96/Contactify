import {Injectable} from "@angular/core"

@Injectable()

export class LocalStorageService {
  public retrieve(key: string, session = false): any {
    let json = (session ?
      sessionStorage.getItem(key) :
      localStorage.getItem(key))

    if (!json) {
      return null
    }
    return JSON.parse(json)
  }

  public store(key: string, value: any, session) {
    if (session) {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  public remove(key: string, session = false) {
    if (session) {
      sessionStorage.removeItem(key)
    } else {
      localStorage.removeItem(key)
    }
  }
}
