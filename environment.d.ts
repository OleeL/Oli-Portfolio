declare namespace NodeJS {
    export interface ProcessEnv {
        readonly EMAIL_ADDRESS: string;
        readonly EMAIL_PASSWORD: string;
        readonly EMAIL_TYPE: string; // "gmail", "hotmail"
    }
}
