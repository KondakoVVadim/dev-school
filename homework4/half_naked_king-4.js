class PaginationHelper {
  constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
      return this.collection.length;
  }

  pageCount() {
      return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
      if (pageIndex >= 0 && pageIndex < this.pageCount()) {
          if (pageIndex < this.pageCount() - 1) {
              return this.itemsPerPage;
          } else {
              return this.collection.length % this.itemsPerPage || this.itemsPerPage;
          }
      } else {
          return -1;
      }
  }

  pageIndex(itemIndex) {
      if (itemIndex >= 0 && itemIndex < this.itemCount()) {
          return Math.floor(itemIndex / this.itemsPerPage);
      } else {
          return -1;
      }
  }
}