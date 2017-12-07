export interface AuthenticationState {
  token : string
  tokenExpiration: Date,
  isLoggedIn: boolean
  user: {
    id: number,
    username: string,
    role: string,
    email: string,
    firstName: string,
    lastName: string,
    avatar: string,
    phoneNumber: string
  },
  redirectUrl: string
}
