class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

   //creating a getters for title, isCheckedOut and ratings
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

    //creating a method toggleCheckOutStatus that changes the valuse saved to the _isCheckedOut property
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
    //creating a method getAverageRating that returns an average value of ratings array
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length;
    return ratingsSum.toFixed(2);
  }

  //creating a method addRating
  addRating(rating) {
    if (rating >=1 && rating <= 5) {
    this._ratings.push(rating);
  } else {
    console.log('Invalid rating value');
  }
}


  //create a method Shuffle for CD class that returns randomly sorted array of all songs in the songs property
  shuffle() {

  }

  //create a setter for isCheckedOut property
  set isCheckedOut(newCheckedOut) {
    this._isCheckedOut = newCheckedOut;
  }
}


//creating a Book class that extends Media/parent class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  //creating a getters for author and pages
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}


//creating a Movie class that extends Media/parent class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  //creating a getters for director and runTime
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

//create a CD class that extends Media
class CD extends Media {
  constructor(title, artist, song) {
    super(title);
    this._artist = artist;
    this._song = song;
  }

  //getter
  get artist() {
    return this._artist;
  }

  get song() {
    return this._song;
  }
}





////////////////////////////////////////////



//creating a Book instance with the following properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);

//call .addRating on historyOfEverything and get Average
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

//log the Average
console.log(historyOfEverything.getAverageRating());


//creating a Movie instance with the following properties
const speed = new Movie('Jan de Bont', 'Speed', 116);

//calling .toggleCheckOutStatus() on speed instance
speed.toggleCheckOutStatus();

//log the value saved to the isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);

//call .addRating on speed and get Average
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addRating(7);
speed.getAverageRating();

//log the Average
console.log(speed.getAverageRating());
