import React, { ReactNode } from "react";

const Dialog = ({
  children,
  onClose,
}: {
  children?: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div
      className="z-auto absolute focus:outline-none block w-full lg:hidden"
      data-rac=""
      data-trigger="DialogTrigger"
      style={{
        top: 723,
      }}
      data-placement="bottom"
    >
      <div
        style={{
          border: 0,
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(50%)",
          height: 1,
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: 1,
          whiteSpace: "nowrap",
        }}
      >
        <button
          id="react-aria9093564625-:rb:"
          aria-label="Dismiss"
          onClick={onClose}
          tabIndex={-1}
          style={{ width: 1, height: 1 }}
        />
      </div>
      {children}
      <div
        style={{
          border: 0,
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(50%)",
          height: 1,
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: 1,
          whiteSpace: "nowrap",
        }}
      >
        <button
          id="react-aria9093564625-:rd:"
          aria-label="Dismiss"
          tabIndex={-1}
          style={{ width: 1, height: 1 }}
        />
      </div>
    </div>
  );
};

export default Dialog;
