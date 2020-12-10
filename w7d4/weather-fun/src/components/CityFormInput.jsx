export default function CityFormInput(props) {

  return (
    <>
      <label htmlFor="city"></label>
      <input type="text" name="city" placeholder="Enter your cityyy" onChange={handleChange} />
    </>
  )
}