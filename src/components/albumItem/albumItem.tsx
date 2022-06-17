import { TypeAlbums } from "../../types/typeAlbums"
import style from "./albumItem.module.css"


type Props = {
    data: TypeAlbums,
}
export const AlbumItem = ({data}:Props) => {
    return (
        <div className={style.album}>
            <h3 className={style.h3}>{ data.title }</h3>
        </div>
    );

}