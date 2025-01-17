customElements.define('custom-nav', class extends HTMLElement {
  constructor() {
    super();

    // Initialize the navigation bar
    this.links = [];
    this.render();
  }

  // Method to update links
  updateLinks(links) {
    this.links = links;
    this.render();
  }

  // Render the navigation bar
  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">AndersonTopTech</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${this.links
        .map(
          link =>
            `<li class="nav-item"><a class="nav-link active" aria-current="page"  href="${link.href}" target="_self">${link.name}</a></li>`
        )
        .join('')}
              </ul>
            </div>
          </div>
        </nav>
      `;
  }

})