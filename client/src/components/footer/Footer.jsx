import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className=" " />
      <div className="fLists">
        <ul className="fList">
          <h2>Categories</h2>
          <li className="fListItem"></li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Cabins</li>
          <li className="fListItem">Resort</li>
        </ul>
        <ul className="fList">
          <h2>Company</h2>
          <li className="fListItem">Privacy Policy </li>
          <li className="fListItem">Terms and Conditions </li>
          <li className="fListItem">FAQ </li>
          <li className="fListItem">About Us</li>
        </ul>
        <ul className="fList">
          <h2>Services</h2>
          <li className="fListItem">Flight Booking</li>
          <li className="fListItem">Reserve Packages</li>
          <li className="fListItem">Hotel Booking </li>
        </ul>
        <ul className="fList">
          <h2>Get Help</h2>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Help Center</li>
          <li className="fListItem">Sign In </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 COBSCCOMP212P-060</div>
    </div>
  );
};

export default Footer;
