(() => {
    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search-btn");
    const map = document.querySelector(".map iframe");

    searchBtn.addEventListener("click", () => {
        const searchValue = encodeURIComponent(searchInput.value.trim());

        map.src = `https://maps.google.com/maps?hl=en&q=%20${searchValue}%20&t=&z=12&ie=UTF8&iwloc=B&output=embed`;
    });
})();
