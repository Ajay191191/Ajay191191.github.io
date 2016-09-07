PDFJS.getDocument('Resume_Ajay_Deshpande_CC.pdf').then(function(pdf){
	pdf.getPage(1).then(function(page) {
		var scale = 1.5;
		var viewport = page.getViewport(scale);

		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		
		var renderContext = {
			  canvasContext: context,
			  viewport: viewport
		};
		page.render(renderContext);
	});
});
