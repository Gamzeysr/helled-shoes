import MainStyle from "../../Sass/Main.scss";


const Main = ({ data }) => {
  console.log(data);
  return (
    <div className="card-container" >
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h1>{title}</h1>
            </div>

            <img src={image} alt="" />

            <div className="card-over">
              <p>
                {desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Main;