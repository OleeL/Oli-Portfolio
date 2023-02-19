declare namespace NodeJS {
    export interface ProcessEnv {
        readonly EMAIL_ADDRESS: string;
        readonly EMAIL_ADDRESS_TO: string;
        readonly EMAIL_PASSWORD: string;
        readonly EMAIL_TYPE: string; // "gmail", "hotmail"
        readonly GOOGLE_RECAPTCHA_KEY: string;
        readonly NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: string;
    }
}
