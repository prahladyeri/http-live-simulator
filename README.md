# HTTP Live Simulator

`http-live-simulator` is a simple http file server for local development written in Node.JS. It is similar, for instance, to python's `http.server` module or node's `http-server`, but with one major difference: It adds a random time delay of 200-500 milliseconds before serving each request in order to simulate a live hosted environment where such delays are a common occurrence.

## Installation:

`npm install -g http-live-simulator`

## Usage:

```
$ http-live
start    Serving Directory: /your/current/path
watching Port: 8080
```

You can change the behaviour of http live server with following optional arguments:

```
Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -p PORT, --port PORT  Port number for running the server
  -m MIN_DELAY, --min-delay MIN_DELAY
                        Minimum delay in milliseconds
  -x MAX_DELAY, --max-delay MAX_DELAY
                        Maximum delay in milliseconds
```

## Uninstallation:

`npm uninstall -g http-live-simulator`

## Development
```
git clone git@github.com:prahladyeri/http-live-simulator.git
cd http-live-simulator/
npm install -g
npm link
```

`npm install -g` Will links the script to a location on our path, so we can use it like any other shell command.
