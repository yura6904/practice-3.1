import propTypes from 'prop-types'

function Stars(props) {
  return (
    <div className="Stars">
      <ul className="card-body-stars">
        {props.createStars(props.count)}
      </ul>
    </div>
  );
}

Stars.propTypes = {
  count: propTypes.number
}

export default Stars;
