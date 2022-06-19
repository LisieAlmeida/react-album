import { Link } from "react-router-dom";
import { typePhoto } from "../../types/typePhoto"
import style from "./photoItem.module.css"

type Props = {
    data:typePhoto
}

export const PhotoItem = ({data}: Props) => {
    return (
        <Link to={`/photo/${data.id}`} className={style.photo}>
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );  
}