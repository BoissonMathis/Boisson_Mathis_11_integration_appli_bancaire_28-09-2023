import "./Features.scss"

function Features(props) {
    return (
        <div className="feature-item">
            <img src={props.src}
            alt={props.alt} 
            className="feature-icon"
            height={"100"}
            width={"151"} 
            />
            <h3 className="feature-item-title"> {props.title} </h3>
            <p> {props.p} </p>
        </div>
    );
  }

export default Features;