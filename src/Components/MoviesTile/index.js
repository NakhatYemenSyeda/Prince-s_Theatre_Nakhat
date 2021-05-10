import React from "react";
import Proptypes from 'prop-types';


const MoviesTile = ({title, image, cinemaworld, filmworld}) => {
    console.log("Here2",title);
    if (title && image && cinemaworld && filmworld) {
        return (
            <div>
                <img src={image} alt="Poster image" width="100%" height="50%" />
                <div>
                    {title}
                </div>
                <div>Cinemaworld: {cinemaworld}</div>
                <div>Filmworld: {filmworld}</div>
            </div>
        );
    }
    else{
        return (<div></div>);
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