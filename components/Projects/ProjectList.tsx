import { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import { TagType } from '../Tag';

type Project = {
    id: number;
    name: string;
    description: ReactElement<any>;
    url: string;
    tags: TagType[];
    image?: ImageProps;
};

export const ProjectList: Project[] = [
    {
        id: 1,
        name: 'Turris',
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
                </li>
            </ul>
        ),
        url: 'https://www.turris.com/',
        tags: [{ id: 1, name: 'Java' }],
        image: { src: '', alt: 'An image of turris' },
    },
    {
        id: 2,
        name: 'LoL Performance Analysis Tool',
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
                </li>
            </ul>
        ),
        url: 'https://www.github.com/',
        tags: [
            { id: 1, name: 'React' },
            { id: 2, name: '.NET 3' },
            { id: 3, name: 'C#' },
        ],
        image: { src: '', alt: 'An image of lolPerfTool' },
    },
    {
        id: 3,
        name: 'LoL Performance Analysis Tool',
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
                </li>
            </ul>
        ),
        url: 'https://www.github.com/',
        tags: [
            { id: 1, name: 'React' },
            { id: 2, name: '.NET 3' },
            { id: 3, name: 'C#' },
        ],
        image: { src: '', alt: 'An image of lolPerfTool' },
    },
    {
        id: 4,
        name: 'LoL Performance Analysis Tool',
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project
                    implementing unit tests, code reviews and a CI/CD pipeline
                    on Azure.
                </li>
            </ul>
        ),
        url: 'https://www.github.com/',
        tags: [
            { id: 1, name: 'React' },
            { id: 2, name: '.NET 3' },
            { id: 3, name: 'C#' },
        ],
        image: { src: '', alt: 'An image of lolPerfTool' },
    },
];
