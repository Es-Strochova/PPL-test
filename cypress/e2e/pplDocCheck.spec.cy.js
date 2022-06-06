
describe('spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('https://www.ppl.cz/osobni-udaje')
    cy.get(".onetrust-close-btn-handler").click()
    cy.contains('Osobní údaje')
    cy.get("a[href='https://www.ppl.cz/documents/20122/1890438/PPL_CZ_GDPR_zasady_zpracovani_osobnich_udaju.pdf/df961391-e5ca-ec79-5453-b4748e319280?version=4.2&t=1649266616966&download=true']");
    cy.get("a[href='https://www.ppl.cz/documents/20122/1890438/PPL_CZ_seznam_zpracovatelu_osobnich_udaju.pdf/4675dc2b-38eb-6676-643a-b040efe4e5da?version=1.2&t=1649266694470&download=true']");
    cy.get("a[href='https://www.ppl.cz/documents/20122/1890438/PPL_CZ_prehled_cookies_2021.pdf/65c2d122-c5ed-2c33-09f9-97f7ef6bdb08?version=2.2&t=1649266667063&download=true']");
    cy.get("a[href='https://www.ppl.cz/documents/20122/1890438/DPDHL_data_privacy_policy.pdf/93ca9639-95db-db62-ebf4-9c31c9e90195?version=1.3&t=1649266586050&download=true']");
  })
})
