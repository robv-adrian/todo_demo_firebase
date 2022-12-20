const updateStateWithProps = (func, key, e) => {
  func({ [key]: e });
};

export default updateStateWithProps;
