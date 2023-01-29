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

const defaultImage = { width: 300, height: 200 };

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
            alt: 'An image of turris',
            ...defaultImage,
        },
    },
    {
        name: 'LoL Performance Analysis',
        description: (
            <>
                <p>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
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
        image: { src: '', alt: 'An image of lolPerfTool', ...defaultImage },
    },
    {
        name: 'LoL Performance Analysis Tool',
        description: (
            <p>
                Developed on and helped to achieve a successful project
                implementing unit tests, code reviews and a CI/CD pipeline on
                Azure.
            </p>
        ),
        url: 'https://www.github.com/',
        tags: provideIds([
            { name: 'React' },
            { name: '.NET 3' },
            { name: 'C#' },
        ]),
        image: { src: '', alt: 'An image of lolPerfTool', ...defaultImage },
    },
    {
        name: 'LoL Performance Analysis Tool',
        description: (
            <>
                <p>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
                </p>
            </>
        ),
        url: 'https://www.github.com/',
        tags: provideIds([
            { name: 'React' },
            { name: '.NET 3' },
            { name: 'C#' },
        ]),
        image: { src: '', alt: 'An image of lolPerfTool', ...defaultImage },
    },
]);
