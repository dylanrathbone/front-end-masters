    let characters = ["John", "Walter", "Cornelius", "Petunia", "Grace"];
    let weapons = ["Lead pipe", "Candlestick", "Revolver", "Poison"];
    let rooms = ["Foyer", "Conservatory", "Grand Hall", "West Wing"];
    let clueCard = {murderer: characters[1], room: rooms[3], weapon: weapons[2]};

    let boardGame = {
        card: clueCard 
    };

    boardGame.characters = characters;
    boardGame.weapons = weapons;
    boardGame.rooms = rooms;

    boardGame.weapons.push("Tomahawk");

