let songs = [
    "Prisoner of Love - Perry Como",
    "Near You - Francis Craig",
    "Twelfth Street Rag - Pee Wee Hunt",
    "Riders in the Sky - Vaughn Monroe Orchestra",
    "Goodnight, Irene - Gordon Jenkins and The Weavers",
    "Too Young - Nat King Cole",
    "Blue Tango - Leroy Anderson",
    "Song from Moulin Rouge - Percy Faith",
    "Little Things Mean a Lot - Kitty Kallen",
    "Cherry Pink and Apple Blossom White - Perez Prado",
    "Heartbreak Hotel - Elvis Presley",
    "All Shook Up - Elvis Presley",
    "Nel Blu Dipinto di Blu (Volare) - Domenico Modugno",
    "The Battle of New Orleans - Johnny Horton",
    "Theme from 'A Summer Place' - Percy Faith",
    "Tossin' and Turnin' - Bobby Lewis",
    "Stranger on the Shore - Mr. Acker Bilk",
    "Sugar Shack - Jimmy Gilmer and the Fireballs",
    "Surfin' U.S.A. - The Beach Boys",
    "I Want to Hold Your Hand - The Beatles",
    "Wooly Bully - Sam the Sham & the Pharaohs",
    "The Ballad of the Green Berets - SSgt. Barry Sadler",
    "California Dreamin' - The Mamas and the Papas",
    "To Sir with Love - Lulu",
    "Hey Jude - The Beatles",
    "Sugar, Sugar - The Archies",
    "Bridge over Troubled Water - Simon & Garfunkel",
    "Joy to the World - Three Dog Night",
    "The First Time Ever I Saw Your Face - Roberta Flack",
    "Tie a Yellow Ribbon 'Round the Ole Oak Tree - Tony Orlando and Dawn",
    "The Way We Were - Barbra Streisand",
    "Love Will Keep Us Together - Captain & Tennille",
    "Silly Love Songs - Wings",
    "Tonight's the Night (Gonna Be Alright) - Rod Stewart",
    "Shadow Dancing - Andy Gibb",
    "My Sharona - The Knack",
    "Call Me - Blondie",
    "Bette Davis Eyes - Kim Carnes",
    "Physical - Olivia Newton-John",
    "Every Breath You Take - The Police",
    "When Doves Cry - Prince",
    "Careless Whisper - Wham!",
    "That's What Friends Are For - Dionne & Friends",
    "Walk Like an Egyptian - The Bangles",
    "Faith - George Michael",
    "Look Away - Chicago",
    "Hold On - Wilson Phillips",
    "(Everything I Do) I Do It for You - Bryan Adams",
    "End of the Road - Boyz II Men",
    "I Will Always Love You - Whitney Houston",
    "The Sign - Ace of Base",
    "Gangsta's Paradise - Coolio featuring L.V.",
    "Macarena (Bayside Boys Mix) - Los del Río",
    "Candle in the Wind 1997/Something About the Way You Look Tonight - Elton John",
    "Too Close - Next",
    "Believe - Cher",
    "Breathe - Faith Hill",
    "Hanging by a Moment - Lifehouse",
    "How You Remind Me - Nickelback",
    "In Da Club - 50 Cent",
    "Yeah! - Usher featuring Lil Jon and Ludacris",
    "We Belong Together - Mariah Carey",
    "Bad Day - Daniel Powter",
    "Irreplaceable - Beyoncé",
    "Low - Flo Rida featuring T-Pain",
    "Boom Boom Pow - The Black Eyed Peas",
    "Tik Tok - Kesha",
    "Rolling in the Deep - Adele",
    "Somebody That I Used to Know - Gotye featuring Kimbra",
    "Thrift Shop - Macklemore & Ryan Lewis featuring Wanz",
    "Happy - Pharrell Williams",
    "Uptown Funk - Mark Ronson featuring Bruno Mars",
    "Love Yourself - Justin Bieber",
    "Shape of You - Ed Sheeran",
    "God's Plan - Drake",
    "Old Town Road - Lil Nas X featuring Billy Ray Cyrus",
    "Blinding Lights - The Weeknd",
    "Levitating - Dua Lipa",
    "Heat Waves - Glass Animals"
];

let djs = [
    {
        name: "DJ Funk",
        age: 27,
        listed: false
    },
    {
        name: "DJ Music",
        age: 19,
        listed: false
    },
    {
        name: "Joe",
        age: 45,
        listed: false
    }
];

function generalSearch(context) {
    let searchText = context["generalSearchInput"].value;
    
    if(searchText.length < 1 || searchText.trim() === "") {
        alert("Please enter a search term before searching!");
        return false;
    }

    return true;
}

function searchSongListeners() {
    let playlistSongs = document.getElementById('listofsongs').children;

    // Search Songs
    let searchSongs = document.getElementById('searchsongs').children;
    for (i = 0; i < searchSongs.length; i++) {
        let element = searchSongs[i];

        if(element.children[0].innerHTML.indexOf("➕") !== -1) {
            element.addEventListener('click', function() {
                playlistSongs[playlistSongs.length - 1].after(element);
                element.innerHTML = element.innerHTML.replace("➕", "➖");

                element.addEventListener('click', function() {
                    element.remove();
                });
            });
        }
    }
}

addEventListener("DOMContentLoaded", (event) => {
    // hiding elements (turned off)
    // document.getElementsByClassName('timeslot')[0].style.visibility = "hidden";
    // document.getElementsByClassName('playlist')[0].style.visibility = "hidden";
    // document.getElementsByClassName('songadd')[0].style.visibility = "hidden";
    // document.getElementById('save').style.visibility = "hidden";

    // Load DJs
    let djList = document.getElementById("listofdjs");
    for(let i = 0; i < djs.length; i++) {
        djs[i].listed = true;

        let djListItem = document.createElement("li");
        djListItem.appendChild(document.createTextNode(djs[i].name));
        djList.appendChild(djListItem);
    }

    // DJ's Playlist
    let playlistSongs = document.getElementById('listofsongs').children;
    for (i = 0; i < playlistSongs.length; i++) {
        let element = playlistSongs[i];

        if(element.children[0].innerHTML.indexOf("➖") !== -1) {
            element.addEventListener('click', function() {
                element.remove();
            });
        }
    }

    let searchInput = document.getElementById('songsearchinput');
    searchInput.addEventListener("keyup", function() {
        let searchTerm = searchInput.value;

        if(searchTerm.length < 1 || searchTerm.value === "banana") return;

        let results = [];
        songs.forEach((value, index) => {
            if(value.toLowerCase().includes(searchTerm)) {
                results.push(index);
            }
        });
        
        let currentSearches = document.getElementById("searchsongs").children;
        currentSearches[0].style.visibility = "hidden";
        for(let i = 1; i < currentSearches.length; i++) {
            currentSearches[i].remove();
        }

        // add new songs
        for(let i = 0; i < results.length; i++) {
            let songList = document.getElementById("searchsongs");
            let songItem = document.createElement("li");
            let songSpan = document.createElement("span");

            songSpan.setAttribute("class", "listicon");
            songSpan.appendChild(document.createTextNode("➕"));

            songItem.appendChild(document.createTextNode(songs[results[i]]));
            songItem.appendChild(songSpan);

            songList.appendChild(songItem);
        }

        searchSongListeners();
    });

    searchSongListeners();
});