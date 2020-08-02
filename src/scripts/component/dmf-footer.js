class DmfFooter extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="footer">&#169;
        2020 <br> Made with <span>&#10084;</span> by <a href="https://github.com/abdulazizahwan" target="_blank">Abdul
            Aziz Ahwan</a><br>Learn from <a href="https://dicoding.id" target="_blank">Dicoding Academy</a>
        </footer>
        `;
    }
}

customElements.define("dmf-footer", DmfFooter);