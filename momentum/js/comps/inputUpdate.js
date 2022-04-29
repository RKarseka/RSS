let nameVal = "";

const nameUpdate = (e, localStorageFiel) => {
  nameVal = e.target.value;

  localStorage.setItem(localStorageFiel, nameVal);
};

export default (input, localStorageFiel) => {
  input.addEventListener("input", (e) => nameUpdate(e, localStorageFiel));
  //
};
