class NavbarComponent extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="bg-red-500 text-white p-6 w-full flex justify-between">
        <h1 class="font-bold text-xl">My Website</h1>
        <div class="flex gap-5">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">setting</a>
        </div>
    </nav>
     `;
    }
}

 customElements.define("navbar-component", NavbarComponent);