
const shared = {
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}

const app = {
    ...shared,
    target: 'web',
    entry: "./app/hydrate.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/public"
    }
};

const server = {
    ...shared,
    target: 'node',
    entry: './server/index.ts',
    output: {
        filename: "index.js",
        path: __dirname + "/dist/server"
    }
};

module.exports = [app, server];