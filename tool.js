
var bag_of_letters = {
	"A":13,
	"B":3,
	"C":3,
	"D":6,
	"E":18,
	"F":3,
	"G":4,
	"H":3,
	"I":12,
	"J":2,
	"K":2,
	"L":5,
	"M":3,
	"N":8,
	"O":11,
	"P":3,
	"Q":2,
	"R":9,
	"S":6,
	"T":9,
	"U":6,
	"V":3,
	"W":3,
	"X":2,
	"Y":3,
	"Z":2,
	removeLetter: function(letter){
		return --bag_of_letters[letter]
	}
}
wordsArr = ['test','bacon','eggs', 'chicken','chorizo','red velvet cake']
var rand = wordsArr[Math.floor(Math.random() * wordsArr.length)];

function draw(tile_letter, tile_width, x, y){
      var drawing = document.getElementById("canvas");
      var con = drawing.getContext("2d");
      //set background
      con.fillStyle = "blanchedalmond";
      con.fillRect(x,y, tile_width, tile_width);
      // draw font in black
      con.fillStyle = "black";
      con.textAlign = "center"
      var font_size = tile_width*0.96
      con.font = font_size+"pt sans-serif";
      con.fillText(tile_letter, x+tile_width/2, y+font_size);
    }

function send_word(word, tile_width, start_x, start_y, direction) {
	var word_caps = word.toUpperCase()
	word_caps = word_caps.split('')

	var tile_spaced_offset_amnt = tile_width * 1.2
	for (i = 0; i < word_caps.length; i++) {
		draw(word_caps[i], tile_width, start_x, start_y)
		switch (direction) { 
			case 'v': 
				start_y += tile_spaced_offset_amnt; 
				break;
			case 'h':
				start_x += tile_spaced_offset_amnt;
				break;
			}
	}
}
send_word(rand,30, 50, 50,'h')

