import Stars from "./Stars/Stars";
import propTypes from 'prop-types'

function Films(props) {
  return (
    <div className="Films">
      {props.films.map((f, idx) => {
        if (f.stars && f.stars < 6) 
          return(
            <div className="film-card" key={'film-card' + idx}>
                <img src={f.path} alt=""></img>
                <div className="film-description">
                    <div className="film-head">
                      <span className="material-icons">
                        favorite_border
                      </span>
                      <span class="material-icons">
                        call_made
                      </span>
                    </div>
                    <h3>{f.name}</h3>
                    <Stars count={f.stars} createStars={props.createStars}/>
                    <div className="btns">
                        <button className="btn-buy">Купить ${f.price}</button>
                        <button className="btn-descriptiom">Подробнее</button>
                    </div>
                </div>
            </div>
          )
          else return false
      })}
    </div>
  );
}

Films.propTypes = {
  films: propTypes.array
}

export default Films;
