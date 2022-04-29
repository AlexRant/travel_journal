export default function Destination(props) {
  return (
    <div className='card'>
      <div className='destination--picture'>
        <img className='image' src={props.card.imageUrl} alt='landscape' />
      </div>

      <div className='destination--info'>
        <div className='destination--country'>
          <img
            className='destination--tag'
            src='../images/tag.png'
            alt='tag icon'
          />
          <h3>{props.card.location}</h3>
          <a href={props.card.googleMapsUrl} target='_blank'>
            View on Google Maps
          </a>
        </div>
        <h2 className='card--title'>{props.card.title}</h2>
        <h3 className='card--dates'>
          {props.card.startDate} - {props.card.endDate}
        </h3>
        <p className='card--description'>{props.card.description}</p>
      </div>
    </div>
  );
}
