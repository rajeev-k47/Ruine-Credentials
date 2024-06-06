const express = require('express');
const app = express();
const port = 3000;

app.get('/.well-known/assetlinks.json', (req, res) => {
    const jsonData = [
  {
    "relation" : [
      "delegate_permission/common.handle_all_urls",
      "delegate_permission/common.get_login_creds"
    ],
    "target" : {
      "namespace" : "android_app",
      "package_name" : "com.example.ruine",
      "sha256_cert_fingerprints" :  "F6:31:00:3A:83:49:E3:B9:F9:48:03:E8:97:2C:28:BA:3B:33:FA:F5:E4:29:53:67:13:54:92:84:20:6F:4A:FD"
      
    }
  }
]

    res.setHeader('Content-Disposition', 'attachment; filename="assetlinks.json');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData, null, 2));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

