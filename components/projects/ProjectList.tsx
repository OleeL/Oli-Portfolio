import { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import { TagType } from '../Tag';
import { provideIds } from '../../lib/helpers/array';

export type Project = {
    id: number;
    name: string;
    description: ReactElement<any>;
    url: string;
    tags: TagType[];
    image?: ImageProps;
};

const defaultImage: Partial<ImageProps> = { width: 300, height: 200 };

export const ProjectList: Project[] = provideIds([
    {
        name: 'Turris',
        description: (
            <p>
                Turris is a tower defense game developed using LWJGL3, OpenGL,
                OpenAL, and Java, which results in high-performance and
                platform-independent gameplay.
            </p>
        ),
        url: 'https://github.com/OleeL/Turris/',
        tags: provideIds([{ name: 'Java' }, { name: 'LWJGL' }]),
        image: {
            src: '/images/projects/turris.png',
            alt: 'Turris image',
            ...defaultImage,
        },
    },
    {
        name: 'LoL PA',
        description: (
            <>
                <p>
                    Using the League of Legends API to provide players with
                    detailed statistics and insights on their in-game
                    performance, including win rates, KDA, item builds, and
                    summoner spell usage.
                </p>
            </>
        ),
        url: 'https://github.com/OleeL/LoLPerformanceAnalysis-Client',
        tags: provideIds([
            { name: 'React' },
            { name: 'Typescript' },
            { name: '.NET Core' },
            { name: 'C#' },
        ]),
        image: {
            src: '/images/projects/lolPerf.png',
            alt: 'An image of lolPerfTool',
            ...defaultImage,
        },
    },
    {
        name: 'Network Visualisation',
        description: (
            <p>
                A project to accelerate a force directed placement algorithm on
                the GPU (using CUDA) to outperform the same algorithm on the
                CPU.
            </p>
        ),
        url: 'https://github.com/OleeL/NetworkVisualisation-CUDA',
        tags: provideIds([
            { name: 'React' },
            { name: '.NET 3' },
            { name: 'C#' },
        ]),
        image: {
            src: '/images/projects/graphNodes.png',
            alt: 'Network Graph',
            ...defaultImage,
        },
    },
    {
        name: 'Arkanoid Clone',
        description: (
            <p>
                Created in jMonkeyEngine, to learn game development. Learnt how
                to create and implement game objects, physics and collisions,
                and creating user interface elements.
            </p>
        ),
        url: 'https://github.com/OleeL/Arkanoid',
        tags: provideIds([
            { name: 'React' },
            { name: '.NET 3' },
            { name: 'C#' },
        ]),
        image: {
            src: '/images/projects/arkanoid.png',
            alt: 'Arkanoid teaser image',
            ...defaultImage,
        },
    },
]);
