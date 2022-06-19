import { TypeAlbums } from "../../types/typeAlbums"
import style from "./albumItem.module.css"
import { Link } from 'react-router-dom';
import { Api } from "../../api";



type Props = {
    data: TypeAlbums,
}
export const AlbumItem = ({data}:Props) => {
    return (
        <Link to='/albums/album' className={style.link}>
            <div className={style.album}>
                <h3 className={style.h3}>{ data.title }</h3>
            </div>
        </Link>
    );

}