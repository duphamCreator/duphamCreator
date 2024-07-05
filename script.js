document.addEventListener('DOMContentLoaded', function() {
    const products = [
        //Item 1:
        {
            images: ["assets/TuiRooShop.jpeg", "assets/TuiRooShop2.jpeg"],
            name: "Túi Du Lịch Thần Kỳ Gấp Gọn",
            description: "Vải Polyester Oxford chống thấm nước, chống trầy xước, phù hợp cho những chuyến du lịch bụi.",
            videoLink: "https://shopee.vn/product/1045355141/22362337205/",
            combo: "Combo: 1 Túi Thần Kỳ Gấp Gọn + 1 Túi Đựng Giầy + 1 Cần Kéo",
            beforeDiscount: "1,000,000",
            discount: "800,000",
            buyLink: "https://shopee.vn/product/1045355141/22362337205/"
        },
        //Item 2:
        {
            images: ["assets/TuiRooShop.jpeg", "assets/TuiRooShop2.jpeg"],
            name: "Túi Du Lịch Thần Kỳ Gấp Gọn",
            description: "Vải Polyester Oxford chống thấm nước, chống trầy xước, phù hợp cho những chuyến du lịch bụi.",
            videoLink: "https://shopee.vn/product/1045355141/22362337205/",
            combo: "Combo: 1 Túi Thần Kỳ Gấp Gọn + 1 Túi Đựng Giầy + 1 Cần Kéo",
            beforeDiscount: "1,000,000",
            discount: "", // Không có discount
            buyLink: "https://shopee.vn/product/1045355141/22362337205/"
        },
        // Thêm các sản phẩm khác vào đây
    ];

    const itemList = document.getElementById('item-list');

    products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        product.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            itemDiv.appendChild(img);
        });

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const infoContent = `
            <div>
                <h5>${product.name}</h5>
                <div class="btc">
                    <i class='bx bx-info-circle'></i>
                    <p>${product.description}</p>
                </div>
                <div class="btc">
                    <i class='bx bx-link'></i>
                    <a href="${product.videoLink}">Product Videos</a>
                </div>
                <div class="btc">
                    <i class='bx bx-box'></i>
                    <p>${product.combo}</p>
                </div>
            </div>
        `;

        infoDiv.innerHTML = infoContent;
        itemDiv.appendChild(infoDiv);

        const bidDiv = document.createElement('div');
        bidDiv.classList.add('bid');

        let bidContent = '';

        if (product.discount) {
            bidContent = `
                <p class="before-discount">${product.beforeDiscount}</p>
                <p class="discount">${product.discount}</p>
            `;
        } else {
            bidContent = `
                <p class="normal-price">${product.beforeDiscount}</p>
            `;
        }

        bidContent += `<a class="buy-btn" href="${product.buyLink}">Mua Ngay</a>`;
        bidDiv.innerHTML = bidContent;
        itemDiv.appendChild(bidDiv);

        itemList.appendChild(itemDiv);
    });

    const viewMoreBtn = document.getElementById('view-more-btn');
    const items = document.querySelectorAll('.item');
    const initialItemCount = 4;

    items.forEach((item, index) => {
        if (index >= initialItemCount) {
            item.style.display = 'none';
        }
    });

    if (items.length <= initialItemCount) {
        viewMoreBtn.style.display = 'none';
    }

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            items.forEach(item => {
                item.style.display = 'block';
            });
            viewMoreBtn.style.display = 'none';
        });
    } else {
        console.error('Element with id "view-more-btn" not found.');
    }
});

function formatDate(date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear().toString().padStart(2, '0');
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${y}${m}${d}${h}${min}`;
}

const version = formatDate(new Date());
document.write(`<script src="script.js?v=${version}"></script>`);
document.write(`<link rel="stylesheet" href="style.css?v=${version}">`);
