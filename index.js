class Collapse {
    constructor() {
        this.container = document.querySelector('.container-for-collapse');
    }

    init() {
        this.container.addEventListener('click', (event) => {
            const btn = this.container.querySelector('.btn-collapse');
            if (!btn) return;

            if (event.target === btn) {
                const text = this.container.querySelector('.text-collapse');
                text.classList.toggle('show'); 
            }
        })
    }
}

const collapse = new Collapse();
collapse.init();