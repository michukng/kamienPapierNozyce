document.addEventListener('readystatechange', (myEvent) => {
    if (myEvent.target.readyState === 'complete') {
        initApp();
    };
});

const initApp = () =>{
    takeName.style.display = 'flex';
    playGame.style.display = 'none';
    gameResult.style.display = 'none';
    playAgain.style.display = 'none';
    buttonAgree.style.display = 'none';
    myFormFunc();
    const rockChoice = document.getElementById('rockChoice');
    const paperChoice = document.getElementById('paperChoice');
    const scissorsChoice = document.getElementById('scissorsChoice');
    rockChoice.addEventListener('click', () => {
        const playerChoose = 'Kamień';
        const computerChoose = computerChoice();
        const result = resultOfTheGame(playerChoose, computerChoose);
        resultView(result);        
    });
    paperChoice.addEventListener('click', () => {
        const playerChoose = 'Papier';
        const computerChoose = computerChoice();
        const result = resultOfTheGame(playerChoose, computerChoose);
        resultView(result);
    });
    scissorsChoice.addEventListener('click', () => { 
        const playerChoose = 'Nożyce';
        const computerChoose = computerChoice();
        const result = resultOfTheGame(playerChoose, computerChoose,);
        resultView(result); 
    });
    }; 

const myFormFunc = () => {
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', (myEvent) => {
        myEvent.preventDefault();
        const nameOfThePlayer = createPlayer();
        if (nameOfThePlayer) {
            myEvent.target.textContent = `Witaj ${nameOfThePlayer}!`;
            playGame.style.display = 'flex';
        } else {
            myEvent.target.textContent = 'Nie podałeś imienia, w  związku z tym gra nie może być kontunowana.';
            buttonAgree.style.display = 'flex';
            const clickButtonAgree = document.getElementById('buttonAgree')
            clickButtonAgree.addEventListener('click', () =>{
                location.reload();
            });
        };
    });
    myForm.addEventListener('reset', (myEvent) => {
        myEvent.preventDefault();
        const button = document.createElement('button');
        myEvent.target.textContent = `W takim razie do zobaczenia!`;
        buttonAgree.style.display = 'flex';
            const clickButtonAgree = document.getElementById('buttonAgree')
            clickButtonAgree.addEventListener('click', () =>{
                location.reload();
            });
    });    
};

class Player {
    constructor(name) {
        this.name = name;
    };

    getName () {
        this.name = this.name.split(" ").join("");
        return this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    };

    setName(playerName) {
        this.name = playerName;
    }

};

const createPlayer = () => {
    let playerName = document.getElementById('myNameInput').value;
    takeName = new Player(playerName);
    takeName.setName(takeName.name);
    return takeName.getName();
};

const computerChoice = () => {
    const arrayChoice = ['Kamień', 'Papier', 'Nożyce'];
    const whichChoice = Math.floor(Math.random() * 3);
    const computerChoice = arrayChoice[whichChoice];
    return computerChoice;
};

const resultOfTheGame = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        const resultArray = [`Wybrałeś: ${playerChoice} `, `Komputer wybrał: ${computerChoice}`, `Remis!`]
        return resultArray; 
    } else if (playerChoice === 'Kamień' && computerChoice === 'Papier') {
        const resultArray = [`Wybrałeś: ${playerChoice}`, `Komputer wybrał: ${computerChoice}`, `Komputer wygrał!`]
        return resultArray;
    } else if (playerChoice === 'Papier' && computerChoice === 'Nożyce') {
        const resultArray = [`Wybrałeś: ${playerChoice}`, `Komputer wybrał: ${computerChoice}`, `Komputer wygrał!`]
        return resultArray;
    } else if (playerChoice === 'Nożyce' && computerChoice === 'Kamień') {
        const resultArray = [`Wybrałeś: ${playerChoice}`, `Komputer wybrał: ${computerChoice}`, `Komputer wygrał!`]
        return resultArray;
    } else {
        const resultArray = [`Wybrałeś: ${playerChoice}`, `Komputer wybrał: ${computerChoice}`, `Wygrałeś!`];
        return resultArray;
    };
};

const resultView = (result) => {
    playGame.style.display = 'none';
    gameResult.style.display = 'flex';
    playAgain.style.display = 'flex';
    const resultText = document.getElementById('gameResult');
    for (i=0; i<result.length; i++) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(result[i]));
        resultText.appendChild(p);
        resultText.appendChild(document.createElement('br'));
    };
    askToPlayAgain();
};

const askToPlayAgain = () => {
    const choiceYes = document.getElementById('agree');
    choiceYes.addEventListener('click', () => {
        location.reload();
    });
};