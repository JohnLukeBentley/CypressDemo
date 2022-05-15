import * as Maths from "../../script/maths.js";
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
describe('The Home Page Tests', () => {
  // Running initializing shared code before each it test.
  before(()=> {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
    // Or
    // cy.visit('/');     
  });

  it('Page visit', () => {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
  });

  it('Check that text exists on a page', () => {
    cy.contains('Lorem');
  });

  it('Assert that a URL looks good', () => {
    cy.url().should('include', 'index');
  });

  it('Type some test into a form field and check it', () => {
    cy.get('[name="FirstName"')
      .type('Joe Blow')
      .should('have.value', 'Joe Blow');
  });

  it('Insert lorem into delivery instructions', ()=> {
    cy.get('[name="DeliveryInstructions"]')
      .type(lorem.generateSentences(2));
  });

  it('Reset button click', ()=> {
    cy.get("input[type='reset']")
      .click();
  });
});

describe('JavaScript Unit Testing', ()=> {
  before(()=> {
    // Assumes, e.g. "baseUrl": "http://127.0.0.1:5500" set in cypress.json
    cy.visit('index.html'); 
    // Or
    // cy.visit('/');     
  });  

  it('... via ES6/ES2015 export/import', ()=> {
    expect(Maths.sum(2,3)).to.equal(5);
  });
  
  it('Test HTML embedded JavaScript function', () => {
    // See https://stackoverflow.com/questions/72137229/can-we-directly-unit-test-html-embedded-javascript-functions
    // Ensure foo is in a <script>, not a <script type='module'>
    cy.window().then(win => {
      expect(win.foo()).to.eq('bar');
    });
  });  
});
