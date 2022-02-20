export class User { // réactive method

  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string,
    public firstname: string,
    public lastname: string,
    public firm: string,
    public genre: string,
    public country: string,
    public address: string,
    public birthDate: string,
    public zipCode: string,
    public city: string,
    public phoneNumber: string,
    public smartphoneNumber: string
  ) {}
}
