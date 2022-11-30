import AOS from "aos";
import "aos/dist/aos.css";
import { itemSlider, itemNav } from './components/item-slider';
import { header } from './components/header';
import Glide, { Controls, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';
import { colorCheckbox } from './components/checkboxes-colors';
import { sizesCheckbox } from './components/checkboxes-sizes';
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";

const titleBreadcrumb = document.querySelector(".breadcrumb__title");
const wrapperCarousel = document.querySelector(".glide__slides");
const bulletsCarousel = document.querySelector(".glide__bullets");
const contentProduct = document.querySelector(".content");
const wrapperCheckboxesColor = document.querySelector(".form__checkboxes--color");
const wrapperCheckboxesSizes = document.querySelector(".form__checkboxes--sizes");
const descriptionProduct = document.querySelector(".description");
const form = document.querySelector(".form");
const inputValue = document.querySelector(".form__number");
const priceTotal = document.querySelector(".price-product");

const initApi = async () => {
  let dataProduct = []
  await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
  .then(response => response.json())
  .then( data => {
    console.log(data);
    const { title, price, compare_at_price, description, images, variants, options, vendor } = data;
    
    dataProduct.push({
      title, price, compare_at_price, description, images, variants, options, vendor
    })
    
    return dataProduct;
  });

  const {images, title, vendor, price, compare_at_price, options, description} = dataProduct[0];

  const discount = String(price).slice(0, 3);
  const valueTotal = String(compare_at_price).slice(0, 3);
  
  // Loop for images and bullets carousel
  images.map((e, index) => {
    wrapperCarousel.appendChild(itemSlider(e, title));
    bulletsCarousel.appendChild(itemNav(index))
  })

  //replace texts
  titleBreadcrumb.innerHTML = title

  //Add Header component
  contentProduct.prepend(header(vendor, title, discount, valueTotal))

  //Add checkboxes colors
  options[0].values.map((e) => {
    const value = e.toLowerCase()
    wrapperCheckboxesColor.appendChild(colorCheckbox(value))
  })

  //Add checkboxes sizes
  options[1].values.map((e) => {
    wrapperCheckboxesSizes.appendChild(sizesCheckbox(e))
  })

  //Replace text description
  descriptionProduct.innerHTML = description

  inputValue.addEventListener("keyup", () => {
    priceTotal.innerHTML = Number(discount) * inputValue.value
  })

  //submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const objData = {}
    formData.forEach((value, key ) => objData[key] = value)

    Swal.fire(
      {
        title: "Thanks for your purchase!!!!!",
        text: `${title} colour: ${objData.color} - size: ${objData.sizes}`,
        icon: "success",
      }
    )
  })
  
  // Start glide carousel 
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    dragThreshold: 120,
    perTouch: 3,
    autoplay: 3000,
  }).mount({Controls, Autoplay})

  AOS.init({
    duration: 700,
    easing: "ease-in-out",
    once: true,
  })
}

initApi();
