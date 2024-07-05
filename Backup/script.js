document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    const items = document.querySelectorAll('.item');
    const initialItemCount = 4; // Số lượng sản phẩm ban đầu hiển thị

    // Ẩn các sản phẩm ngoại trừ số lượng ban đầu
    items.forEach((item, index) => {
        if (index >= initialItemCount) {
            item.style.display = 'none';
        }
    });

    // Kiểm tra nếu tổng số lượng sản phẩm ít hơn hoặc bằng số lượng ban đầu thì ẩn nút "View More"
    if (items.length <= initialItemCount) {
        viewMoreBtn.style.display = 'none';
    }

    // Xử lý sự kiện click vào nút "View More"
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // Hiển thị tất cả các sản phẩm
            items.forEach(item => {
                item.style.display = 'block';
            });

            // Ẩn nút "View More"
            viewMoreBtn.style.display = 'none';
        });
    } else {
        console.error('Element with id "view-more-btn" not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các ảnh trong danh sách sản phẩm
    const items = document.querySelectorAll('.item-shop .item-list .item img');

    // Duyệt qua từng ảnh và thêm sự kiện click hoặc touchstart
    items.forEach(img => {
        img.addEventListener('click', toggleZoom);
        img.addEventListener('touchend', toggleZoom);
    });

    // Hàm xử lý sự kiện phóng to
    function toggleZoom(event) {
        // Ngăn chặn hành vi mặc định của sự kiện
        event.preventDefault();

        // Lấy ảnh hiện tại
        const img = event.target;

        // Kiểm tra xem ảnh đã phóng to chưa
        const isZoomed = img.classList.contains('zoomed');

        // Nếu chưa phóng to thì thêm lớp zoomed, ngược lại thì loại bỏ
        if (!isZoomed) {
            img.classList.add('zoomed');
            img.classList.add('fullscreen');
        } else {
            img.classList.remove('zoomed');
            img.classList.remove('fullscreen');
        }
    }
});
function formatDate(date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-based index
    const y = date.getFullYear().toString().padStart(2, '0');
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${y}${m}${d}${h}${min}`;
}
const version = formatDate(new Date());
document.write(`<script src="script.js?v=${version}"></script>`);
document.write(`<link rel="stylesheet" href="style.css?v=${version}">`);




