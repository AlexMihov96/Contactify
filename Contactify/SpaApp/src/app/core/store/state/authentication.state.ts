export interface AuthenticationState {
  token: string
  tokenExpiration: Date,
  isLoggedIn: boolean
  user: {
    id: number,
    username: string,
    role: string
  },
  redirectUrl: string
}
