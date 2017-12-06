import {Injectable} from "@angular/core"

@Injectable()

export class StorageService {
  public retrieve(key: string): any {
    let json = localStorage.getItem(key)

    if (!json) {
      return null
    }
    return JSON.parse(json)
  }

  public store(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public remove(key: string) {
    localStorage.removeItem(key)
  }
}
