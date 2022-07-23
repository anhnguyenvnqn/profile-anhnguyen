var images = document.querySelectorAll(".project-image img");
var galleryLeftImg = document.querySelector(".gallery-left-image img");
var gallery = document.querySelector(".gallery");
var close = document.querySelector(".gallery-close");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");

const data = [
  {
    id: 1,
    name: "Giới thiệu nhà hàng",
    decscription: "Sau khi hoàn thành khóa học Front-end cơ bản trên F8-fullstack",
    technologies:"HTML, CSS, JS",
    function: "ANIMATION, REPONSIVE",
    create: "04/2022",
    demo: "https://anhnguyenvnqn.github.io/nihon-restourant/",
    img1: "https://anhnguyenvnqn.github.io/nihon-restourant/image/nha-hang-nhat-8.jpg",
    img2: "https://anhnguyenvnqn.github.io/nihon-restourant/image/aboutimage.jpg",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fnihon-restouran3.png?alt=media&token=adb628d7-e700-4429-bd1c-8e3940f7c920",
  },
  {
    id: 2,
    name: "React Blog News",
    decscription: "Mô tả 2",
    technologies:"",
    function: "",

    create: "23/07/2022",
    demo: "https://react-blog-news.vercel.app",
    img1: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog3.png?alt=media&token=260c1de0-9b25-4da0-9b55-652d22e0b60b",
    img2: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog2.png?alt=media&token=5c0b0178-8ce7-4f53-864d-c15d1aeeb6f0",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fblog3.png?alt=media&token=260c1de0-9b25-4da0-9b55-652d22e0b60b",
  },
  {
    id: 3,
    name: "Profile cá nhân",
    decscription: "Mô tả 3",
    technologies:"HTML, CSS, JS",
    function: "",
    create: "2022",
    demo: "youtube.com",
    img1: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject1.png?alt=media&token=e590bacb-50a3-4157-97dd-89162f9cd6d7",
    img2: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject2.png?alt=media&token=dd4598db-578a-4da3-98c9-53b303cd6625",
    img3: "https://firebasestorage.googleapis.com/v0/b/blogging-556e1.appspot.com/o/images%2Fproject.png?alt=media&token=ff7a99a0-c287-4a8c-bb74-ee0b6c7773c9",
  },
];

function renderData(data) {
  var details = document.querySelector(".gallery-right");
  var galeryListImg = document.querySelector(".gallery-left-listimg");

  var detailsHtmls = `
        <h2>DETAILS</h2>
        <h3>${data.name}</h3>
        <p>${data.decscription} </p>
        <ul>
        <li>
        Technologies - <span>${data.technologies}</span>
        </li>
        <li>
        Functions such as - <span>${data.function}</span>
        </li>
        
        <li>
          Create - <span>${data.create}</span>
        </li>
          <li>
            Demo - <a href="/">${data.demo} </a>
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
  galleryLeftImg.src = images[curentIndex].src;
  gallery.classList.add("show");
}

function findData(dataId) {
  for (const key in data) {
    if (data[key].id == dataId) {
      return data[key];
    }
  }
}

images.forEach(function (item, index) {
  item.addEventListener("click", function () {
    curentIndex = index;
    console.log(curentIndex);
    showGallery();
    var dataId = this.dataset.id;
    var data = findData(dataId);
    renderData(data);
  });
  item.dataset.id = index + 1;
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});
