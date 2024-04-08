import '../support/commands';
describe('MetaMask testing', () => {
  before(() => {
    cy.viewport(1920, 1080)
  })
    it('connects wallet', () => {
      cy.visit('https://app.holograph.xyz')
      cy.get('#web-network-dropdown').find('div').first().as('span').click()
      cy.wait(1000)
      cy.get('#ConnectWalletModal > :nth-child(3) > .flex-col > :nth-child(1)').click()
      cy.window().then((win) => {
        
      })
      
      cy.window().then((win) => {
        win.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            // Assuming successful connection
            cy.get('.metamask-connected').should('be.visible');

            cy.window().then(() => {
              cy.wait(3000);
              cy.task('switchWindow', 'MetaMask')
            })
          });
      });
    });
  /*
    it('signs transaction', () => {
      cy.window().then((win) => {
        win.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: '0x...', // Replace with your address
              to: '0x...', // Replace with recipient address
              value: '1',
            },
          ],
        })
          .then((txHash) => {
            // Wait for transaction confirmation
            cy.get('.transaction-confirmed').should('be.visible');
          });
      });
    });
  
    it('authorizes wallet action', () => {
      cy.window().then((win) => {
        win.ethereum.request({
          method: 'eth_requestAccounts', // Assuming action requires account access
        })
          .then((accounts) => {
            // Perform other actions based on authorization
            cy.get('.action-authorized').should('be.visible');
          });
      });
    });*/
  });