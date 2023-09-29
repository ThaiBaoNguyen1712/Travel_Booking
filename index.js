var services=[{
    "ID":1,
    "img":"hanoi.png",
    "place":"HA NOI",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":2,
        "img":"pnkebang.png",
        "place":"PHONG NHA KE BANG",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":3,
        "img":"hagiang.png",
        "place":"HA GIANG",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":4,
        "img":"nhatrang.png",
        "place":"NHA TRANG",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":5,
        "img":"phuquoc.png",
        "place":"PHU QUOC",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":6,
        "img":"hcm.png",
        "place":"HO CHI MINH",
    "detail":"With friendly people, numerous historical landmarks, and a diverse culinary scen."
    },
    {
        "ID":7,
        "img":"R 1.png",
        "place":"TEST",
    "detail":"As the sun set over the horizon, the sky transformed into a kaleidoscope of colors, painting a mesmerizing picture."
    },
]

var currentPage = 1; // Trang hiện tại
var itemsPerPage = 6; // Số lượng phần tử trên mỗi trang

function renderServices()
{
    let content = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
     for (let i = startIndex; i < endIndex && i < services.length; i++) {
        content += `
          <div class="card col-md-3 mx-4 mt-4">
            <img src="img/${services[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-title">${services[i].place}</h5>
              <p class="card-text">${services[i].detail}</p>
              <a href="#" class="btn btn-primary" onclick="Details(${services.ID})">VISIT NOW</a>
            </div>
          </div>
        `;
      }
    
   document.getElementById("servicesContainer").innerHTML = content;
   if (endIndex < services.length) {
    document.getElementById("nextButton").style.display = "block";
  } else {
    document.getElementById("nextButton").style.display = "none";
  }

  // Hiển thị nút "Return" nếu không phải trang đầu tiên
  if (currentPage > 1) {
    document.getElementById("returnButton").style.display = "block";
  } else {
    document.getElementById("returnButton").style.display = "none";
  }

}

renderServices();

function nextPage() {
    currentPage++;
    renderServices();
  }
  
  // Hàm để quay lại trang trước đó
  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      renderServices();
    }
  }