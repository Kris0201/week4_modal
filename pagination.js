export default{
    props:['pages', 'getProduct'], // 將 products.js 中 this.page 的資料傳入
    template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"
      :class="{ disabled: !pages.has_pre}"
      >
        <a class="page-link" href="#" aria-label="Previous"
        @click="getProduct(pages.current_page-1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item"
      :class="{ active: page === pages.current_page}" 
       v-for="page in pages.total_pages" :key="page + 'page'">
        <a class="page-link" href="#"
        @click.prevent="getProduct(page)"
        >{{page}}</a>
      </li>
      
      <li class="page-item"
      :class="{ disabled: !pages.has_next}"
      >
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="getProduct(pages.current_page+1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`
}