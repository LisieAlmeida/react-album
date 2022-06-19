
import style from "./albumItem.module.css"
import { Link } from 'react-router-dom';




type Props = {
    id: number,
    title: string
}
export const AlbumItem = ({id, title}: Props) => {
    return (
        <Link to={`/album/${id}`} className={style.link}>
            <div className={style.album}>
                <h3 className={style.h3}>{title}</h3>
            </div>
        </Link>
    );

}