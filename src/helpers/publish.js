let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "./pacts")],
    pactBroker: "http://localhost:9080/",
    consumerVersion: "1.0.0",
    providerVersion: "1.0.0",
    tags: "dev"
}

publisher.publishPacts(opts)