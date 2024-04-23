export default async function FetchFindIp(setUserIp: any) {
  const grabIp = await fetch("https://api.ipify.org", {
    method: "GET",
  });

  if (!grabIp) {
    console.error("No ip found");
    return;
  }

  const userIp = await grabIp.text();
  setUserIp(userIp);
}
