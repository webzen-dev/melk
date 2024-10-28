import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const StepTwo: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (phone.length !== 11) {
      setError("شماره تماس باید دقیقاً ۱۱ رقم باشد");
      return;
    }

    setError("");
    navigate("/step-three");
  };

  return (
    <div className="step-two">
      <div className="box">
        <span>شماره تماس خود را وارد کنید </span>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <IoCallOutline />
            <input
              type="text" 
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setPhone(value);
                }
              }}
              placeholder="شماره تماس"
              maxLength={11} 
            />
          </div>
          <button type="submit">ثبت</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
