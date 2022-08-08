
describe('Projeto 2', () => {
  it('Visita ao site', () => {
    cy.visit('https://front.serverest.dev/login')

  })
})
describe('Projeto 2', function () {
 
  const email = 'brunacristinaribeiro20@hotmail.com'
  const password = 'Br012345'

  context('Login', () => {
    it('Login reaizado com sucesso', () => {
      cy.request({
        url: 'https://front.serverest.dev/login',
        auth: {
          email, password,
        },
      }).its('status').should('equal', 200)
   
    it('Email/ Senha invalido', () => {
      cy.request({
        url: 'https://front.serverest.dev/login',
        failOnStatusCode: false,
      }).its('status').should('equal', 401)
    })

   
    })
  })
})