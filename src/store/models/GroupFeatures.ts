import { Feature } from "./Feature";

export interface GroupFeatures {
  id: string;
  name: string;
  features: { [key: string]: Feature };
}
