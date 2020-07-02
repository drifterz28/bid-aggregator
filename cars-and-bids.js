const fetch = require('isomorphic-unfetch');

// fetch("https://carsandbids.com/v1/autos/auctions?sort=1&limit=50&timestamp=1593618495421&signature=75272fb3be8f037fa930bcbd9ec052b4502bc1e2", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "__cfduid=d518e9f6679e343602307dbea2dd95c7a1591651447; __stripe_mid=fd34711e-9cbc-441c-bc7b-ace050dbcc7a; _ga=GA1.2.1964374987.1591651448; __stripe_sid=72b6ce51-3224-4284-8e70-bb512e18db9c; _gid=GA1.2.1483109650.1593616930; _sstk_=\"gAAAAABe_KohkhMmejY6-5QuYLRG8SaLUdG9QreMDI2uRMh8y8L83q-ODr8LoU8gVlSSnyCE1lIcVWQ4llhj0VqJ4QlM73JXkO8sNWyMYK-gdF3aixP8M9on8n-zUmLlwRGfaCMwB8KdlTH72WIhRr-YQ_NZQgeI0m0lwZt9YbTxfs96SCeVUZEhjcjQqOsLkSP41klEYD2VmOrOucnwNS1FqDMHCWcXvojjR88oKHoEu8boeTnNFEdecEpjt7bCQv2QtMN_bj8rCOD8OsXUY1HXMm2p3aOaOoNLiVTN4h0E34lTqHwythTFqc0eGfDWDOZZu5JHkpN_C6sA6EHz3sufLBwHLwjDK7vRMm2GB89M7QXi3mgk7ETZyzi6TL1_7tftZtsY2EtxyYtJ11wsRMuSkde5hCjOOV95p33aEPAqxTVr5Qb6Y34=\"; _gat=1"
//   },
//   "referrer": "https://carsandbids.com/",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// }).then(res => res.json()).then(json => {
//   console.log(json)
// });

module.exports = (req, res) => {
  res.status(200).json({status: 'done'});
}