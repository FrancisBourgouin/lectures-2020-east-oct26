export default function GalleryItem(props) {

  const handleClick = () => {
    props.selectImage(props.id)
  }
  return <article onClick={handleClick}>
    <img src={props.path} alt={props.name} />
    <h1>{props.name}</h1>
  </article>
}