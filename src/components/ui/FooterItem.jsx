function FooterItem({ item, index }) {
  const { title, items } = item;
  return (
    <li className="footer__item">
      <h4 className="footer__item-title">{title}</h4>
      <ul className="footer__item-list">
        {items.map((item) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default FooterItem;
