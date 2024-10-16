![client](https://www.imager200.io/assets/images/main-logo-compressed.png)


This package provides bindings for interacting with the imager200 API. It is auto-generated from the official open api specs: https://www.imager200.io/imager200.json

## Requirements:

Node >= 12
Typescript >= 4.0

## Installation

```sh
npm install imager200-javascript-sdk
```

## Example

you need to install typescript (unless you are using a node version >= v22.6.0) and node types:

```
node install typescript @types/node
```

```typescript

import { ResizeApi, ResizeApiApiKeys } from "imager200-javascript-sdk";
import { writeFile } from 'node:fs';
import { IncomingMessage } from "node:http";

const resizeApi = new ResizeApi()


resizeApi.setApiKey(ResizeApiApiKeys.ApiKeyAuth, "SET_YOUR_API_KEY_HERE")


resizeApi.resizeSyncGet("https://api-docs.imager200.io/images/examples/jpeg_image.jpg", 120, 130, "linear").
then((response: {response: IncomingMessage, body: Buffer}) => {
    console.log(response.response.statusCode)
    writeFile("result.jpeg", response.body, err => {
        if (err) {
            console.log(err)
        }
    })
}).catch((err: {response: IncomingMessage, body: Buffer}) => {
    console.log("received status: " + err.response.statusCode)
    console.log("received response: " + err.body.toString())
})

```


