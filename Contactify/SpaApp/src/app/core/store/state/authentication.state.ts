export interface AuthenticationState {
  token : string
  tokenExpiration: Date,
  isLoggedIn: boolean
  user: {
    id: number,
    fullName: string,
    userRole: string,
  },
  redirectUrl: string
}
