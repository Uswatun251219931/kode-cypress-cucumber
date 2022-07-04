const URL ='http://zero.webappsecurity.com/index.html'
const SEARCH = '[id= searchTerm]'


class searchpage {
    static visit () {
        cy.visit(URL)
    }
    static searchterm (search){
        cy.get(SEARCH).type(search)
    }
    
   
}
export default searchpage