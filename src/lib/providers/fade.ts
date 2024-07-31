'use client';

import { createContext, useContext } from 'react';
import { FadeCSS } from '../global_hooks/useFadeIn';

export const Fade = createContext<FadeCSS | null>(null);

export const useFade = () => useContext(Fade);
