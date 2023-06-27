import "./footer.css";
import linkedIn from "../../assets/LI-In-Bug.png";

export default function Footer() {
  return (
    <footer>
      <button><a href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={40} height={40} />
      </a></button>
    </footer>
  );
}
