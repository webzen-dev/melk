import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface VerificationCodeProps {
  setGoToApp: (value: boolean) => void;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({ setGoToApp }) => {
  const [code, setCode] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate(); // برای هدایت به مسیر جدید

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (
      event.key === "ArrowRight" &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const allFilled = code.every((digit) => digit !== "");

  const handleSubmit = () => {
    if (allFilled) {
      setGoToApp(true);
      navigate("/"); 
    }
  };

  return (
    <div id="verification-code">
      <div className="box">
        <div className="title">کد ارسال شده به شماره را وارد کنید</div>
        <div className="input-box">
          {code.map((digit, index) => (
            <input
              key={index}
              type="number"
              value={digit}
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={digit ? "filled" : ""}
            />
          ))}
        </div>
        <button onClick={handleSubmit} disabled={!allFilled}>
          تایید
        </button>
      </div>
    </div>
  );
};

export default VerificationCode;
