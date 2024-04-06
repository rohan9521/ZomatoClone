export interface UserData {
  name: string;
  email: string;
  address?: {
    houseNumber: string;
    area: string;
    locality: string;
    landmark: string;
    pincode: string;
    state: string;
    country: string;
  };
  password: string;
  mobileNumber: string;
  profilePic?: string;
  orderIdList?: string[];
}
