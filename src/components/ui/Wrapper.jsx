function Wrapper({
  type = "horizontal",
  justify = "",
  gap = "",
  hideOnMobile,
  children,
}) {
  return (
    <div
      className={`wrapper wrapper-${type} ${
        justify && `wrapper-${justify}`
      } ${gap} ${hideOnMobile ? "wrapper-hidden" : ""}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
