console.log('***** Music Collection *****')
let Collection= [];
// set Collection as new variable with empty array

function addToCollection (albumTitle, artist, yearPublished){
    let album = {
        albumTitle: albumTitle,
        artist: artist,
        yearPublished: yearPublished,
    };
    Collection.push(album);
    return album;
}
// End of Creating function addToCollection and added Collection to array

// Testing the "addToCollection" Function to add 6 albums
addToCollection('Thriller' , 'Michael Jackson', 1982);
console.log('Added Thriller Album' , Collection[0]);// Test 1 Worked

addToCollection('Ecstasy', 'Avant', 2002);
console.log("Added Ecstasy Album" , Collection[1]);// Test 2 Worked

addToCollection('For The Cool In You', 'Babyface', 1993);
console.log('Added For The Lover in You Album' , Collection[2]);//Test 3 Worked

addToCollection('Legacy', 'Boyz 2 Men', 1997);
console.log('Added Legacy Album', Collection[3]);//Test 4 Worked

addToCollection('TrapSoul', 'Bryson Tiller', 2015);
console.log('Added Trapsoul Album to Collection', Collection[4]);//Test 5 Worked

addToCollection('The Colour of Love', 'Celine Dion', 1993);
console.log('Added The Colour of Love', Collection[5]);//Test 6 Worked

//Finished adding Albums to Collection all the Functions Worked

console.log('Full Album Collection:' , Collection);// function worked in console. 6 albums added to array

function showFullCollection (array) {
    for (let i=0; i< array.length; i++){
        console.log(`${array[i].albumTitle} by ${array[i].artist}, publishes in ${array[i].yearPublished}`);
    }
};
//End of creating Function showFullCollection 

showFullCollection(Collection);

//show Collection works with Artist and year Created but not album title
// Fixed the array now it shows the album title
function findByArtist(artist){
    let artistSeach = [];
    for(let i = 0;i < Collection.length; i++){
        if(artist === Collection[i].artist){
            artistSeach.push(Collection[i])
            return artistSeach;

        }
    }
    return artistSeach;

}// created find by artist function
console.log(findByArtist('Avant'));// tested artist in my collection
console.log(findByArtist('Babyface'));// test artist is in my collection
console.log(findByArtist('Lady Gaga'));// test artist that was not in my collection

//tested find by artist function

function search(artist, yearPublished){
    let search = [showFullCollection];
        for (let i = 0; i< Collection.length; i++){
            if(artist, yearPublished === Collection[i.search]){
                return search;

            }

        }

    }

console.log(search('Full Collection'));



