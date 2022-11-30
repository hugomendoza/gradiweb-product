export const colorCheckbox = (values) => {
  let wrapper = document.createElement("div");
  wrapper.classList.add("form__colors")
  wrapper.innerHTML = `
    <input type="radio" name="color" id="${values}" value="${values}">
    <label for="${values}" class="bg-${values}${values === "black" ? "" : "-500"}"></label>
  `

  return wrapper;
}