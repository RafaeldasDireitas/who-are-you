"use client";
import { endpoints } from "@/endpoints/endpoints";
import { IpInfo } from "@/types/IpInfo";
import { useEffect, useState } from "react";
import FetchFindIp from "./FetchFindIp";

export default function OwnData() {
  const [userIp, setUserIp] = useState("");
  const [ipInfo, setIpInfo] = useState<IpInfo>();

  const token = process.env.NEXT_PUBLIC_IP_INFO_TOKEN;

  useEffect(() => {
    FetchFindIp(setUserIp);
  }, []);

  const handleUserIp = (e: any) => {
    const userIp = e.target.value;
    setUserIp(userIp);
  };

  const grabIpInfo = async () => {
    const grabInfo = await fetch("/api/ip-info", {
      method: "POST",
      headers: {
        "Application-Type": "application/json",
      },
      body: JSON.stringify({ userIp, token }),
    });

    if (grabInfo.ok) {
      const response = await grabInfo.json();
      setIpInfo(response);
    } else {
      console.error("There was an error with the API");
    }
  };

  return (
    <div className="m-12">
      <h1 className="text-3xl">Your data:</h1>
      <p className="w-1/2 p-2">Here you'll find your geo data:</p>
      <div className="flex justify-center p-2">
        <label className="input input-bordered flex items-center justify-center gap-2 w-60 text-white">
          <input
            type="text"
            onChange={handleUserIp}
            value={userIp}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 hover:-scale-x-110 hover:cursor-pointer duration-200"
            onClick={grabIpInfo}
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
            <h2 className="ml-2">ip: {ipInfo && ipInfo.ip}</h2>
            <h2 className="ml-2">hostname: {ipInfo && ipInfo.hostname}</h2>
            <h2 className="ml-2">city: {ipInfo && ipInfo.city}</h2>
            <h2 className="ml-2">country: {ipInfo && ipInfo.country}</h2>
            <h2 className="ml-2">loc: {ipInfo && ipInfo.loc}</h2>
            <h2 className="ml-2">org: {ipInfo && ipInfo.org}</h2>
            <h2 className="ml-2">postal: {ipInfo && ipInfo.postal}</h2>
            <h2 className="ml-2">timezone: {ipInfo && ipInfo.timezone}</h2>
          </div>
          <h1 className="text-red-600 text-2xl">{`}`}</h1>
        </div>
      </div>
    </div>
  );
}
