import { endpoints } from "@/endpoints/endpoints";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { userIp, token } = await req.json();

  const grabIpInfo = await fetch(endpoints.grabIpInfo(userIp, token), {
    method: "GET",
    headers: {
      "Application-type": "application/json",
    },
  });

  const grabIpInfoJson = await grabIpInfo.json();

  return NextResponse.json(grabIpInfoJson);
}
