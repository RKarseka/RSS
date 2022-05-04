export default () => {
  const lang = localStorage.getItem("page_lang");

  if (!lang) {
    localStorage.setItem("page_lang", "ru");
    return "ru";
  }

  return lang;
};
