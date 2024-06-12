# customer.io + React bindings proof of concept

This repo contains a demonstration of a proof of concept for wrapping
customer.io's [cdp-analytics-browser][0] package into React bindings.

<img width="1181" alt="image" src="https://github.com/joequery/customerio-react-example/assets/503584/295cbe8f-7332-42c8-ad64-992541514e13">

[0]: https://github.com/customerio/cdp-analytics-js/tree/main/packages/browser#readme

* `src/lib` holds the proof of concept that would comprise the React package 
* `src/components/Demo.tsx` Demonstrates how one would use the package

## Technology used for this project

* [Vite + React][1]
* Typescript
* [customer.io cdp api][2]
* [Docker + Devcontainers][3]

[1]: https://github.com/SafdarJamal/vite-template-react
[2]: https://www.customer.io/docs/api/cdp/#operation/track
[3]: https://code.visualstudio.com/docs/devcontainers/containers

# How to Run

### Using VSCode Devcontainers

* Install the [Dev Containers][4] extension
* Clone this repo `git clone https://github.com/joequery/customerio-react-example.git`
* Press F1 within VSCode and run `>Dev Containers: Open Folder in Container` and open the project directory
* Once the container builds and the terminal opens, run `npm run dev` and navigate to http://localhost:5173/

### Running natively

(Some extra work may involved in getting node-gyp functional, so the
devcontainer approach above is generally preferred)

* `git clone https://github.com/joequery/customerio-react-example.git`
* `cd customerio-react-example`
* `npm install`
* `npm run dev`
*  navigate to http://localhost:5173/

[4]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
