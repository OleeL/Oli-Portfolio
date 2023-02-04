import router from 'next/router';

export const isBrowser = () => typeof window !== 'undefined';

export const nextOpen = (
    url?: string | URL,
    target?: string,
    features?: string,
): WindowProxy | null => {
    if (isBrowser()) {
        return window.open(url, target, features);
    }
    return null;
};

export const redirect = (url: string) => router.push(url);
