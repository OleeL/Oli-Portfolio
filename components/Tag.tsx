import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, CSSProperties } from 'react';
import css from 'styled-jsx/css';

interface ITag {
    name: string;
    className?: string;
    style?: CSSProperties;
}

const styling = css.resolve`
    span {
        background-color: grey;
        user-select: none;
        font-size: 13px;
        color: white;
        padding: 5px 10px 5px 10px;
        border-radius: 20px;
    }
`;

export const Tag: FC<ITag> = ({ name, className, style = {} }) => {
    return (
        <span style={style} className={`${styling.className} ${className}`}>
            <FontAwesomeIcon style={style} icon={['fas', 'tag']} /> {name}
            {styling.styles}
        </span>
    );
};

export default Tag;
