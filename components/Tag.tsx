import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, CSSProperties } from 'react';

interface ITag {
    name: string;
    className?: string;
    style?: CSSProperties;
    id?: string;
}

export const Tag: FC<ITag> = ({ name, className, style = {}, id }) => {
    return (
        <span id={id} style={style} className={`${className || 'default'}`}>
            <FontAwesomeIcon style={style} icon={['fas', 'tag']} /> {name}
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

export default Tag;
