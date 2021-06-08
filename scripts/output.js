const fs = require('fs');

function getServerlessEndPointHash(data) {
   return data.ServiceEndpoint.split('https://')[1].split('.')[0]
}

function handler (data, serverless, options) {
   console.log("writing data to file");

   fs.writeFileSync('./deploy-output.json', JSON.stringify({
      apiHash: getServerlessEndPointHash(data)
   }));
}


module.exports = { handler };
