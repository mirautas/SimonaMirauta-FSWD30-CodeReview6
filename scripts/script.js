var cds = [
		{
		Titel: "Dylan",
		Author: "Bob Dylan",
		Genre: "Rock",
		Publisher: "",
		Image: "Bob_Dylan.jpg",
		Rating: 4
		},

		{
		Titel: "Diamond Life",
		Author: "Sade",
		Genre: ["smooth soul", ""],
		Publisher: "Epic",
		Image: "sade-diamond-life.jpg",
		Rating: 5,
		}
	];

var books = [
		{
		Titel: "Harry Potter und der Stein der Weisen",
		Author: "J. K. Rowling",
		Genre: ["smooth soul", ""],
		Publisher: "Carlsen",
		Image: "HarryPotter1.jpg",
		Rating: 5,
		},

		{
		Titel: "Harry Potter und der Orden des Phönix",
		Author: "J. K. Rowling",
		Genre: ["smooth soul", ""],
		Publisher: "Carlsen",
		Image: "HarryPotter2.jpg",
		Rating: 3,
		},

		{
		Titel: "Harry Potter und der Feuerkelch",
		Author: "J. K. Rowling",
		Genre: ["smooth soul", ""],
		Publisher: "Carlsen",
		Image: "HarryPotter3.jpg",
		Rating: 4,
		}
	];

var dvds = [
		{
		Titel: "City lights",
   		Author: "Charlie Chaplin",
   		Genre: "romantic comedy",
   		Publisher: "United Artists",
   		Image: "citylights.jpg",
   		Rating: 4
		},

		{
		Titel: "Lawrence of Arabia",
  		Author: "T.E.Lawrence",
   		Genre: "historical drama",
   		Publisher: "Columbia Pictures",
   		Image: "Lawrence_of_arabia.jpg",
   		Rating: 2
		},

		{
		Titel: "Woodwalkers",
   		Author: "Katja Brandis",
   		Genre: "belletristik",
   		Publisher: "Bild",
   		Image: "woodwalkers.jpg",
   		Rating: 5
		},

		{
		Titel: "Foundation",
   		Author: "Isaac Asimov",
   		Genre: "fantasy science fiction",
   		Publisher: "Heyne",
   		Image: "fondation-asimov.jpg",
   		Rating: 2
		},

		{
		Titel: "The Sandman",
   		Author: "Neil Gaiman",
   		Genre: "fantasy",
   		Publisher: "Vertigo",
   		Image: "Sandman.jpg",
   		Rating: 3
		},

		{
		Titel: "Modesty Blaise",
   		Author: "Peter O'Donnell",
   		Genre: "mystery",
   		Publisher: "Titan Books",
   		Image: "modesty1.jpg",
   		Rating: 1
		}
	];

var comics = [
		{
		Titel: "Superwoman",
		Author: "Kate Perkins, Max Raynor",
		Genre: "Superhero",
		Publisher: "DC Comics",
		Image: "superwoman.jpg",
		Rating: 3,
		},

		{
		Titel: "Batman",
		Author: "Alan Grant",
		Genre: "Superhero",
		Publisher: "DC Comics",
		Image: "batman.jpg",
		Rating: 4,
		}
	];


for(var i=0; i<cds.length; i++) {
	if (i%3==0) /*the remainder of the division of i to 3 is 0 (i is a multiple of 3)*/{
		/*i is a multiple of 3, which means we need to create a new row*/
		 var row = $('<div class="row"></div>'); 
		 $("#cds").append(row);
	}
	var column = $('<div class="col-xs-12 col-md-4"></div>'); 
	var thumbnail = $('<div class="thumbnail"></div>');
	var img = $('<img src="img/' + cds[i].Image + '" style="height: 320px; width: 100%;"/>');
	thumbnail.append(img);
	var caption = $('<div class="caption"></div>');
	thumbnail.append(caption);
	var title = $('<h3>' + cds[i].Titel + '</h3>');
	caption.append(title);
	caption.append('von ');
	var author = $('<a href="#">' + cds[i].Author + '</a>');
	caption.append(author).append("<br/>");
	var rating = $('<input type="hidden" class="rating" data-readonly value="' + cds[i].Rating + '"/>');
	caption.append(rating);
	column.append(thumbnail);
	$("#cds > .row:last").append(column);
}


for (var i = 0; i< books.length; i++) {
	if (i%3 == 0) {
		var row = $('<div class="row"></div>');
		$("#books").append(row); //create row in html
	}
	var column = $('<div class="col-xs-12 col-md-4"></div>');
	var thumbnail = $('<div class="thumbnail"></div>');
	column.append(thumbnail);
	var img = $('<img src="img/' + books[i].Image + '" style="height: 320px; width: 100%;"/>');
	thumbnail.append(img);
	var caption = $('<div class="caption"></div>');
	thumbnail.append(caption);
	var title = $('<h3>'+ books[i].Titel +'</h3>');
	caption.append(title);
	caption.append('von ');
	var author = $('<a href="#">'+ books[i].Author +'</a><br/>');
	caption.append(author);
	var rating = $('<input type="hidden" class="rating" data-readonly value="'+ books[i].Rating +'"/>');
	caption.append(rating);

	$("#books > .row:last").append(column);

}

	for (var i = 0; i< dvds.length; i++) {
	if (i%3 == 0) {
		var row = $('<div class="row"></div>');
		$("#dvds").append(row); //am creat row in html
	}
	var column = $('<div class="col-xs-12 col-md-4"></div>');
	var thumbnail = $('<div class="thumbnail"></div>');
	column.append(thumbnail);
	var img = $('<img src="img/' + dvds[i].Image + '" style="height: 320px; width: 100%;"/>');
	thumbnail.append(img);
	var caption = $('<div class="caption"></div>');
	thumbnail.append(caption);
	var title = $('<h3>'+ dvds[i].Titel +'</h3>');
	caption.append(title);
	caption.append('von ');
	var author = $('<a href="#">'+ dvds[i].Author +'</a><br/>');
	caption.append(author);
	var rating = $('<input type="hidden" class="rating" data-readonly value="'+ dvds[i].Rating +'"/>');
	caption.append(rating);

	$("#dvds > .row:last").append(column);

}



for (var i = 0; i< comics.length; i++) {
	if (i%3 == 0) {
		var row = $('<div class="row"></div>');
		$("#comics").append(row);
	}
	var column = $('<div class="col-xs-12 col-md-4"></div>');
	var thumbnail = $('<div class="thumbnail"></div>');
	column.append(thumbnail);
	var img = $('<img src="img/' + comics[i].Image + '" style="height: 320px; width: 100%;"/>');
	thumbnail.append(img);
	var caption = $('<div class="caption"></div>');
	thumbnail.append(caption);
	var title = $('<h3> '+ comics[i].Titel + '</h3>');
	caption.append(title);
	caption.append('von ');
	var author = $('<a href="#">' + comics[i].Author + '</a><br/>');
	caption.append(author);
	var rating = $('<input type="hidden" class="rating" data-readonly value="'+ comics[i].Rating +'"/>');
	caption.append(rating);

	$("#comics > .row:last").append(column);

}

/*<div class="row">
		<div class="col-xs-6 col-md-4">
			<div class="thumbnail">
				<img src="img/Bob_Dylan.jpg"/>
				<div class="caption">
					<h3>Dylan</h3>
					von <a href="#">Bob Dylan</a><br/>
					<input type="hidden" class="rating" data-readonly value="4"/>
				</div>
			</div>
		</div>	
	</div>*/