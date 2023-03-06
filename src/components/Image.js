import React from 'react';

const Image = (props) => {
    return (
        <div className="imageBox">
            <img src={require(`../img/${props.src}`)} className={props.className} alt={"check "+props.src}
                 onClick={(e)=>{
                     props.changeImage(props.src);
                     // props.changeImage(props.src);
                     // console.log(this.props.src)
                 }
                 }/>
        </div>
    );
};

export default Image;