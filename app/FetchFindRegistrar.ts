export default async function FetchFindRegistrar(
  setRegistrarInfo: any,
  registrarInput: any
) {
  const grabRegistrar = await fetch(
    `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&domainName=${registrarInput}&outputFormat=JSON`
  );

  if (grabRegistrar.ok) {
    const registrarJson = await grabRegistrar.json();
    setRegistrarInfo(registrarJson);
  }
}
