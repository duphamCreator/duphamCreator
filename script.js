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
