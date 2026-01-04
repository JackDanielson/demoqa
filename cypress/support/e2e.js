// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

beforeEach(() => {
  cy.intercept('GET', '**/adsbygoogle.js', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/securepubads.g.doubleclick.net/**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/google-analytics.com/**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/googlesyndication.com/**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/googletagmanager.com/**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/gampad/ads**', { statusCode: 200, body: {} });
  cy.intercept('POST', '**/collect**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/openx.net/**', { statusCode: 200, body: {} });
  cy.intercept('GET', '**/bcp.crwdcntrl.net/**', { statusCode: 200, body: {} });
});

// Ignora errores no capturados de scripts externos (ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error.')) {
    return false;
  }
  return true;
});