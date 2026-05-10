export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageConfig {
  title: string;
  lastUpdated: string;
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  sections: LegalSection[];
}

export interface LegalConfig {
  termsOfService: LegalPageConfig;
  privacyPolicy: LegalPageConfig;
}

// 04c373d6e3817b046da7316b5703d52a