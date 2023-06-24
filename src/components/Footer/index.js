import "./footer.css";
import linkedIn from "../../assets/LI-In-Bug.png";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="icon">
        <img src={linkedIn} width={40} height={40} />
      </a>
    </footer>
  );
}
