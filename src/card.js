function Card(props) {
    return <div class="card" style={{width:'18rem'}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <h4>{props.price}</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
}


export default Card;
