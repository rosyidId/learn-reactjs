import React from "react";


const PlayList = ({playValue}) => {
    return(
        <div>
            {!playValue ? "default playList" : playValue}
        </div>
    )
}
export default PlayList;