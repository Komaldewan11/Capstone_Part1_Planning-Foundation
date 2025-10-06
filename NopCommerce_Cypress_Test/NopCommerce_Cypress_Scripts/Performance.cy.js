describe('Lighthouse Performance Testing', () => { 
	it('should pass nopCommerce website Lighthouse audits', () => { 
			cy.visit('http://localhost:8081/'); 
			cy.lighthouse ({ 
		    performance: 80, 
		    accessibility: 90, 
		    seo: 80, 
			}); 
		}); 
	});