export class Company {
  companyName: string;
  companyOwner: string;
  companyDescription: string;
  companyAddress: string;
  companyPhone: number;
  companyEmail: string;
  companyLogo: string;
  companyProjects?: object;
  created?: Date;
  createdBy?: string;
}