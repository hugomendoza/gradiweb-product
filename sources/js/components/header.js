export const header = (vendor, title, discount, totalValue) => {
  let header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <div data-aos="fade-left">
      <h2 class="header__subtitle">${vendor}</h2>
      <h1 class="header__title">${title}</h1>
      <p class="header__price">
        $ ${discount}.00
        <span class="header__discount">
          $ ${totalValue}.00
        </span>
      </p>
    </div>
  `
  return header
}