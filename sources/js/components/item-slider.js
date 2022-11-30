export const itemSlider = (src, title) => {
  let figure = document.createElement("figure");
  figure.classList.add("carousel__figure", "glide__slide");
  figure.innerHTML = `
    <img
      src="${src}"
      alt="${title}"
      class="carousel__image"
    >
  `
  return figure;
}

export const itemNav = (index) => {
  let button = document.createElement("button");
  button.classList.add("glide__bullet");
  button.setAttribute("data-glide-dir", `=${index}`)
  return button;
} 