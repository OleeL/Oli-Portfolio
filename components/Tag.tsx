import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, CSSProperties } from 'react';

export type TagType = {
    id: number;
    name: string;
};

interface ITag {
    tag: TagType;
    className?: string;
    style?: CSSProperties;
}

export const Tag: FC<ITag> = ({ tag, className, style = {} }) => {
    return (
        <span style={style} className={`${className || 'default'}`}>
            <FontAwesomeIcon style={style} icon={['fas', 'tag']} /> {tag.name}
            <style jsx>{`
                span.default {
                    background-color: grey;
                    user-select: none;
                    font-size: 13px;
                    color: white;
                    padding: 5px 10px 5px 10px;
                    border-radius: 20px;
                }
            `}</style>
        </span>
    );
};

interface ITags extends Omit<ITag, 'tag'> {
    tags: TagType[];
}

export const DrawTags: FC<ITags> = ({ className, tags, style }) => {
    return (
        <>
            {tags.map((x, k) => (
                <Tag className={className} tag={x} key={k} style={style} />
            ))}
        </>
    );
};

export default Tag;
