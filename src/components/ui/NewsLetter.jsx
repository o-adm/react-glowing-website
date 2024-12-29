import Input from "../forms/Input";
import Button from "../forms/Button";

function NewsLetter() {
  return (
    <div className="footer__email">
      <h4 className="footer__newwletter-title">Good emails.</h4>
      <p className="footer__newsletter-text">
        Enter your email below to be the first to know about new collections and
        product launches.
      </p>
      <div className="footer__cta">
        <Input placeholder="Enter your email address" />
        <Button type="black">Subscribe</Button>
      </div>
    </div>
  );
}

export default NewsLetter;
