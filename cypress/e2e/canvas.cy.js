describe("canvas", () => {
    beforeEach(() => {
      cy.visit("http://www.htmlcanvasstudio.com/");
    });
  
    it("should draw a line, rectangle, erase it, draw a circle, and erase it", () => {
      // Step 2: Click on "Draw a line"
      cy.xpath("//input[@title='Draw a line']").click();
  
      // Step 3: Draw a horizontal line
      // cy.get('#imageTemp').trigger("mousedown", {button: 0, clientX: 100, clientY: 100 }, {force: true})
      //   .trigger("mousemove", {button: 0, clientX: 300, clientY: 100}, {force: true})
      //   .trigger("mouseup", { force: true })
      // Step 3: Draw a horizontal line
      cy.get('#imageTemp').click(100, 100)
      .click(300, 100).wait(1000)

      // Step 4: Draw a vertical line
      cy.get('#imageTemp').click(200, 0)
      .click(200, 190).wait(1000)

      // Step 5: Click on "Draw a rectangle"
      cy.xpath("//input[@title='Draw a rectangle']").click()
      cy.get('#imageTemp').click(101, 239)
      .click(307, 334).wait(1000)

  
      // Step 7: Click "Use eraser"
      cy.get('.eraser').click({force: true});
      cy.xpath("//a[@class='ui-slider-handle ui-state-default ui-corner-all']").invoke('val', 100).trigger('input', {force: true})
      cy.get('#slider').click({force: true})
  
      // Step 7: Erase the horizontal line
      // cy.get('#imageTemp').trigger("mousemove")
      // .trigger("mousedown", { which: 1 })
      // .trigger("mousemove", {
      //   clientX: 300,
      //   clientY: 100,
      // })
      // .trigger("mouseup", { force: true });
      
      cy.get('#imageTemp').drag("#imageTemp", { x: 100, y: 100}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 300, y: 100}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 100, y: 99}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 300, y: 99}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 100, y: 98}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 300, y: 98}, {force: true})
  
 // Step 8: Click on "Draw a circle"
    cy.xpath("//input[@title='Draw an ellipse or a circle']").click()

    // Step 9: Draw a circle
    cy.get('#imageTemp').click(459, 85)
    .click(499, 122)

      // Step 9: Erase the circle
      // cy.get("#imageTemp").trigger("mousedown", { which: 1, pageX: 459, pageY: 85 })
      //   .trigger("mousemove", { which: 1, pageX: 499, pageY: 85 })
      //   .trigger("mousemove", { which: 1, pageX: 499, pageY: 122 })
      //   .trigger("mousemove", { which: 1, pageX: 459, pageY: 122 })
      //   .trigger("mouseup", { force: true });

      cy.get('.eraser').click({force: true});
      cy.xpath("//a[@class='ui-slider-handle ui-state-default ui-corner-all']").invoke('val', 100).trigger('input', {force: true})
      cy.get('#slider').click({force: true})

      cy.get('#imageTemp').drag("#imageTemp", { x: 459, y: 85}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 459, y: 122}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 499, y: 85}, {force: true})
      cy.get('#imageTemp').drag("#imageTemp", { x: 499, y: 122}, {force: true})




    
    });
  });
