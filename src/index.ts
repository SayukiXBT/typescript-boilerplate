import log from "electron-log";
import { loadEnv } from "./utils/loadEnv";

// load the environment variables
loadEnv();

async function main() {
    log.info("This is the main entry point of the program.");
    const test = {
        value: "test",
        ab: "test",
    };
    log.debug(test.value);
}

main();
