var projectImages = document.querySelectorAll(".project-image img");
var galleryLeftImg = document.querySelector(".gallery-left-image img");
var gallery = document.querySelector(".gallery");
var close = document.querySelector(".gallery-close");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var lightDark = document.querySelector(".toggle");

const data = [
  {
    id: 1,
    name: "Giới thiệu nhà hàng Nhật",
    decscription:
      "Sau khi hoàn thành khóa học Front-end cơ bản trên F8-fullstack",
    technologies:" HTML, CSS, JS",
    function: "Create Modal, Image Gallery, Filter Elements, REPONSIVE, AOS ANIMATION",
    create: "2022",
    demo: "https://anhnguyenvnqn.github.io/nihon-restourant/",
    img1: "https://anhnguyenvnqn.github.io/nihon-restourant/image/nha-hang-nhat-8.jpg",
    img2: "https://anhnguyenvnqn.github.io/nihon-restourant/image/aboutimage.jpg",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fnihon-restouran3.png?alt=media&token=adb628d7-e700-4429-bd1c-8e3940f7c920",
  },
  {
    id: 2,
    name: "React Blog News",
    decscription: "Blog tin tức",
    technologies: " HTML, CSS, JS, REACT.JS",
    function: "Styled components, Skeleton Loading, Tailwind, Yup, Hook, Google Firebase,... ",

    create: "23/07/2022",
    demo: "https://react-blog-news.vercel.app/",
    img1: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog3.png?alt=media&token=260c1de0-9b25-4da0-9b55-652d22e0b60b",
    img2: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog2.png?alt=media&token=5c0b0178-8ce7-4f53-864d-c15d1aeeb6f0",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog3.png?alt=media&token=260c1de0-9b25-4da0-9b55-652d22e0b60b",
  },
  {
    id: 3,
    name: "My Portfolio ",
    decscription: "Profile, Project cá nhân",
    technologies: "HTML, CSS, JS",
    function: "Image Gallery,Slideshow, REPONSIVE, AOS ANIMATION",
    create: "2022",
    demo: "https://anhnguyenvnqn.github.io/profile-anhnguyen/",
    img1: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject1.png?alt=media&token=e590bacb-50a3-4157-97dd-89162f9cd6d7",
    img2: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject2.png?alt=media&token=dd4598db-578a-4da3-98c9-53b303cd6625",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject.png?alt=media&token=ff7a99a0-c287-4a8c-bb74-ee0b6c7773c9",
  },
];
// validate form contact
var yourname = document.querySelector("#yourname");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.innerText = message;
}
function showSusses(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  small.innerText = "";
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  console.log(input.value.length);
  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} kí tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} kí tự`);
    return true;
  }
  showSusses(input);
  return false;
}
function checkEmptyInvalid(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    // check input rỗng !input.value hoặc input.value = '';
    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSusses(input);
    }
  });
  return isEmptyError;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyInvalid([yourname, email]);
  let isNameLengthError = checkLengthError(yourname, 6, 8);

  if (isEmptyError || isNameLengthError) {
    // do no thing
  } else {
    alert("Thanks for message");
  }
});

// time
const run = () => {
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".min");

  const now = new Date();
  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();

  if (hour.innerText.Length === 1) hour.innerText = `0${now.getHours()}`;
  if (min.innerText.Length === 1) min.innerText = `0${now.getMinutes()}`;
};
setInterval(() => {
  run();
}, 1000);

// light/dark mode
lightDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
//close
close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

function renderData(data) {
  var details = document.querySelector(".gallery-right");
  var galeryListImg = document.querySelector(".gallery-left-listimg");

  var detailsHtmls = `
        <h2>DETAILS</h2>
        <h3>${data.name}</h3>
        <p>${data.decscription} </p>
        <ul>
        <li>
        Technologies:<span>${data.technologies}</span>
        </li>
        <li>
        Functions such as: <span>${data.function}</span>
        </li>
        
        <li>
          Create: <span>${data.create}</span>
        </li>
          <li>
            Demo: <a href="${data.demo}">${data.demo} </a>
          </li>
        </ul>
        `;
  var galeryListImgHtmls = `
               <div class="image_item">
                <img
                  src="${data.img1}"
                  alt=""
                ></img>
              </div>
              <div class="image_item">
                <img
                  src="${data.img2}"
                  alt=""
                ></img>
              </div>
              <div class="image_item">
                <img
                  src="${data.img3}"
                  alt=""
                ></img>
              </div>
  `;
  details.innerHTML = detailsHtmls;
  galeryListImg.innerHTML = galeryListImgHtmls;

  var listImg = document.querySelectorAll(".image_item img");

  listImg.forEach((imgElement, index) => {
    imgElement.addEventListener("click", (e) => {
      galleryLeftImg.style.opacity = "0";
      setTimeout(() => {
        updateImgByIndex(index);
        galleryLeftImg.style.opacity = "1";
      }, 500);
    });
  });
  function updateImgByIndex(index) {
    galleryLeftImg.src = listImg[index].src;
  }
}

curentIndex = 0;
function showGallery() {
  galleryLeftImg.src = projectImages[curentIndex].src;
  gallery.classList.add("show");
}

function findData(dataId) {
  for (const key in data) {
    if (data[key].id == dataId) {
      return data[key];
    }
  }
}

projectImages.forEach(function (item, index) {
  item.addEventListener("click", function () {
    curentIndex = index;
    showGallery();
    var dataId = this.dataset.id;
    var data = findData(dataId);
    renderData(data);
  });
  item.dataset.id = index + 1;
});
