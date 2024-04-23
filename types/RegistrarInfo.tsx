export type RegistrarInfo = {
  WhoisRecord: {
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    registrant: Registrant;
    administrativeContact: administrativeContact;
    technicalContact: technicalContact;
    domainName: string;
    nameServers: nameServers;
    status: string;
    rawText: string;
    parseCode: number;
    header: string;
    strippedText: string;
    footer: string;
    audit: audit;
    customField1Name: string;
    customField1Value: string;
    registrarName: string;
    registrarIANAID: string;
    createdDateNormalized: string;
    updatedDateNormalized: string;
    expiresDateNormalized: string;
    customField2Name: string;
    customField3Name: string;
    customField2Value: string;
    registryData: registryData;
    domainAvailability: string;
    contactEmail: string;
    domainNameExt: string;
    estimatedDomainAge: number;
    ips: string[];
  };
};

type Registrant = {
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
};

type administrativeContact = {
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
};

type technicalContact = {
  organization: string;
  state: string;
  country: string;
  countryCode: string;
  rawText: string;
};

type nameServers = {
  rawTest: string;
  hostNames: string[];
  ips: string[];
};

type audit = {
  createdDate: string;
  updatedDate: string;
};

type registryData = {
  createdDate: string;
  updatedDate: string;
  expiresDate: string;
  domainName: string;
  nameServers: {
    rawText: string;
    hostNames: string[];
  };
  ips: string[];
};
