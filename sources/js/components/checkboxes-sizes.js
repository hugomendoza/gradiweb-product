export const sizesCheckbox = (values) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("form__sizes")
  wrapper.innerHTML = `
    <input type="radio" name="sizes" id="${values}" value="${values}">
    <label for="${values}"}">${values}</label>
  `

  return wrapper;
}