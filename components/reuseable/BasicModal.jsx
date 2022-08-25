import React from "react";

export function Modal(props) {
  return <div>{props.children}</div>;
}

export function ModalBtn(props) {
  const { open, setOpen, children } = props;
  return (
    <div
      className="cursor-pointer"
      onClick={() => setOpen({ ...open, modal: true })}
    >
      {children}
    </div>
  );
}

export function ModalBody(props) {
  const { open, setOpen, className, children } = props;
  return (
    open.modal && (
      <div className={`fixed z-[1000] inset-0`}>
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)]"
          onClick={() => {
            setOpen({ ...open, modal: false });
          }}
        />
        <ModalContent className={className}>{children}</ModalContent>
      </div>
    )
  );
}

function ModalContent(props) {
  const { className, children } = props;
  return (
    <div
      className={`modal-body bg-[#fcfcfc] z-[1001] top-1/2 left-[60%] transform -translate-y-1/2 -translate-x-1/2 m-auto max-h-[80%] 2xs:max-h-[90%] min-h-[20rem] p-8 w-[768px] fixed overflow-auto rounded-xl ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
