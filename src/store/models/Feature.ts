export interface Feature {
  id: string;
  name: string;
  enabled: boolean;
  features: { [key: string]: Feature };
  value?: number;
}
