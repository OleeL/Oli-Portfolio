import router from 'next/router';

export class BulokeWindow {
    public static isBrowser = () => typeof window !== 'undefined';

    public static nextOpen = (
        url?: string | URL,
        target?: string,
        features?: string,
    ): WindowProxy | null => {
        if (BulokeWindow.isBrowser()) {
            return window.open(url, target, features);
        }
        return null;
    };

    public static redirect = (url: string) => router.push(url);
}
