const ResCard = (props) =>{
    //console.log(props);
    const {resImg,resname,rating}= props;
    return(
      <div className="res_card">
        <div className="res_img">
      <img  src={resImg}/>
      </div>
      <h1>{resname}</h1>
      <p>{rating}</p>
      <p>Burgers,American</p>
      </div>
    )
  }
  export default ResCard;