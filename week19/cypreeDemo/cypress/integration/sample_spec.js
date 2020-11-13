describe('my first test', () => {
    it('does not do much.', async () => {
        await cy.visit('https://www.baidu.com');

        await cy.get('.quickdelete-wrap input').type('hawei');

        await cy.get('input[value="百度一下"]').click();
    });
});