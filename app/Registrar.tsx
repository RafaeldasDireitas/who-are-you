"use client";
import { useState } from "react";
import FetchFindRegistrar from "./FetchFindRegistrar";
import { RegistrarInfo } from "@/types/RegistrarInfo";

export default function Registrar() {
  const [registrarInput, setRegistrarInput] = useState("");
  const [registrarInfo, setRegistrarInfo] = useState<RegistrarInfo>();

  const handleRegistrarInput = (e: any) => {
    const registrarInput = e.target.value;
    setRegistrarInput(registrarInput);
  };

  const sendRegistrarInput = () => {
    FetchFindRegistrar(setRegistrarInfo, registrarInput);
  };

  return (
    <div className="m-12">
      <h1 className="text-3xl">Registrar domain data:</h1>
      <p className="w-1/2 p-2">Here you'll find info about the registrar:</p>
      <div className="flex justify-center p-2">
        <label className="input input-bordered flex items-center justify-center gap-2 w-60 text-white">
          <input
            onChange={handleRegistrarInput}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            onClick={sendRegistrarInput}
            className="w-4 h-4 opacity-70 hover:-scale-x-110 hover:cursor-pointer duration-200"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex flex-col bg-black bg-opacity-90 rounded-lg">
        <div className="flex flex-col p-4">
          <h1 className="text-end text-white">JSON</h1>
          <h1 className="text-red-600 text-2xl">{`{`}</h1>
          <div className="text-white p-4">
            <h2>
              createdDate:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.createdDate}
            </h2>
            <h2>
              updatedDate:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.updatedDate}
            </h2>
            <h2>
              expiresDate:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.expiresDate}
            </h2>
            <h2>
              registrantCountry:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrant &&
                registrarInfo.WhoisRecord.registrant.country}
            </h2>
            <h2>
              registrantCountryCode:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrant &&
                registrarInfo.WhoisRecord.registrant.countryCode}
            </h2>
            <h2>
              registrantOrganization:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrant &&
                registrarInfo.WhoisRecord.registrant.organization}
            </h2>
            <h2>
              registrantRawText:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrant &&
                registrarInfo.WhoisRecord.registrant.rawText}
            </h2>
            <h2>
              registrantState:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrant &&
                registrarInfo.WhoisRecord.registrant.state}
            </h2>
            <h2>
              technicalContactCountry:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.technicalContact &&
                registrarInfo.WhoisRecord.technicalContact.country}
            </h2>
            <h2>
              technicalContactCountryCode:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.technicalContact &&
                registrarInfo.WhoisRecord.technicalContact.countryCode}
            </h2>
            <h2>
              domainName:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.domainName}
            </h2>
            <h2>
              nameServers:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.nameServers &&
                registrarInfo.WhoisRecord.nameServers.hostNames}
            </h2>
            <h2>
              nameServersIps:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.nameServers &&
                registrarInfo.WhoisRecord.nameServers.ips}
            </h2>
            <h2>
              rawText:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.nameServers &&
                registrarInfo.WhoisRecord.nameServers.rawTest}
            </h2>
            <h2>
              parseCode:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.parseCode}
            </h2>
            <h2>
              header:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.header}
            </h2>
            <h2>
              strippedText:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.strippedText}
            </h2>
            <h2>
              footer:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.footer}
            </h2>
            <h2>
              auditCreatedDate:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.audit &&
                registrarInfo.WhoisRecord.audit.createdDate}
            </h2>
            <h2>
              registrarName:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registrarName}
            </h2>
            <h2>
              registryData:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.registryData &&
                registrarInfo.WhoisRecord.registryData.createdDate}
            </h2>
            <h2>
              domainAvailability:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.domainAvailability}
            </h2>
            <h2>
              contactEmail:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.contactEmail}
            </h2>
            <h2>
              domainNameExt:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.domainNameExt}
            </h2>
            <h2>
              estimatedDomainAge:{" "}
              {registrarInfo &&
                registrarInfo.WhoisRecord &&
                registrarInfo.WhoisRecord.estimatedDomainAge}
            </h2>
            {registrarInfo &&
              registrarInfo.WhoisRecord &&
              registrarInfo.WhoisRecord.ips &&
              registrarInfo.WhoisRecord.ips.map((ip, key) => (
                <h2 key={key}>{ip}</h2>
              ))}
          </div>
          <h1 className="text-red-600 text-2xl">{`}`}</h1>
        </div>
      </div>
    </div>
  );
}
