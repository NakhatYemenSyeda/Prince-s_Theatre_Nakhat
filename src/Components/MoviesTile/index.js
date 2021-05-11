import React from "react";
import Proptypes from 'prop-types';
import styles from './MovieTile.module.css'

const checkHighLow = (p1, p2) => {
    if (p1 == -1 || p2 == -1)
        return -1
    else if (p1>p2)
        return p1
    else
        return p2
}


const MoviesTile = ({title, image, cinemaworld, filmworld}) => {
    if (title && image && cinemaworld && filmworld) {
        return (
            <div className={styles.card}>
                <img src={image} alt="Poster image" width="100%" height="50%" />
                <div className={styles.title}>
                    {title}
                </div>
                <table className={styles.theatres}>
                    <tr>
                        <td> Cinemaworld: </td>
                        <td> { cinemaworld == -1 ? '-' : cinemaworld }</td>
                        <td> { checkHighLow(cinemaworld, filmworld) == -1 ? 'undefined' : checkHighLow(cinemaworld, filmworld) == cinemaworld ? 'High' : 'Low'}</td>
                    </tr>
                    <tr>
                        <td> Filmworld: </td>
                        <td> { filmworld == -1 ? '-' : filmworld }</td>
                        <td> { checkHighLow(filmworld, cinemaworld) == -1 ? 'undefined' : checkHighLow(filmworld, cinemaworld) == filmworld ? 'High' : 'Low'}</td>
                    </tr>
                </table>

            </div>
        )
    }
}

MoviesTile.propTypes = {
    title: Proptypes.string,
    image: Proptypes.string,
    cinemaworld: Proptypes.number,
    filmworld: Proptypes.number,
};

MoviesTile.defaultProps = {
	title: "",
    image: "",
    cinemaworld: -1,
    filmworld: -1,
};

export default MoviesTile