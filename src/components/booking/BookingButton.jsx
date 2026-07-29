import { useNavigate } from "react-router-dom";

export default function BookingButton({ doctor, className = "", children = "Book appointment" }) {
  const navigate = useNavigate();
  return <button type="button" onClick={() => navigate("/book-appointment", { state: { doctor } })} className={className}>{children}</button>;
}
