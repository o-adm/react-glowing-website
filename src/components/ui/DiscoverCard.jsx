import Button from "../forms/Button";

function DiscoverCard({ discover: { image }, index }) {
  return (
    <div className="discover__card">
      <figure className="discover__image">
        <img src={image} alt={`Blog ${index}`} />
      </figure>
      <div className="discover__content">
        <h3 className="discover__title">Find store</h3>
        <Button type="link">Our store &rarr;</Button>
      </div>
    </div>
  );
}

export default DiscoverCard;
