class RequestPage {
    constructor() {
        this.event()
    }

    event() {
        document.addEventListener('click', e => {
            const el = e.target

            e.preventDefault()


            const pageLink = document.querySelectorAll('a')

            for (let links of pageLink) {

                const hrefAttr = links.getAttribute('href')

                if (el === links) {
                    this.requestContent(hrefAttr)
                    return
                }
            }

        })
    }

    async requestContent(hrefAttr) {

        try {

            const response = await fetch(hrefAttr)

            if (response.status !== 200) throw new Error('Request error ')

            const htmlLoaded = await response.text()
            this.loadContent(htmlLoaded)

        } catch (err) {
            console.log(err)
        }
        
    }

    loadContent(content) {
        const requestResult = document.querySelector('.resultado')
        requestResult.innerHTML = content
    }

}

const request = new RequestPage()