import { config } from "dotenv";

export function loadEnv(): void {
    config();
    const requiredEnvVars: string[] = [];

    const notFound: string[] = [];

    for (const required of requiredEnvVars) {
        if (process.env[required] === undefined) {
            notFound.push(required);
        }
    }

    if (notFound.length > 0) {
        console.warn(
            `Required environment variables '${notFound.join(
                ", "
            )}' are not set. Please consult the README.`
        );
        process.exit(1);
    }
}
