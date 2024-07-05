document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
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
        })
        .catch(error => console.error('Error fetching products:', error));
});
