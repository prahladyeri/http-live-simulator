# HTTP Live Simulator

`http-live-simulator` is a small http file server for local testing and development written in Node.JS. It is similar, for instance, to python's `http.server` module or PHP's built-in server (`php -S <end-point>`), but with one major difference: It adds a random time delay between 200-500 seconds for each requested resource in order to simulate a live environment where such delays are a common occurrence.

## Installation:

`npm install -g http-live-simulator`

## Usage:

```
$ http-live
Listening on port 8080
Current Directory:  /path/to/current/folder
```

## Uninstallation:

`npm uninstall -g http-live-simulator`
