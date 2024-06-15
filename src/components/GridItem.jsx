export default function GridItem(props) {
  const { image, index, handleClick } = props

  return (
    <div className="GridItem">
      <img src={image} alt={`art${index}`} onClick={handleClick}/>
    </div>
  );
}
