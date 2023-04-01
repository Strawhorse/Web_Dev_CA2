// function to add information to listing.html page
const content= [
    image = new Array(),
    video = new Array(),
    plot = new Array()
]
//        links to source info
image[0]="Images/1_Fight_Club.jpg";
image[1]="Images/2_The_Big_Short.jpg";
image[2]="Images/3_Lost_In_Translation.jpg";
image[3]="Images/4_Jaws.jpg";
image[4]="Images/5_Return_Of_The_Living_Dead.jpg";
image[5]="Images/6_Closer.jpg";
image[6]="Images/7_Scott_Pilgrim_Vs_The_World.jpg";
image[7]="Images/8_Reservoir_Dogs.jpg";
image[8]="Images/9_Shaun_Of_The_Dead.jpg";
image[9]="Images/10_Terminator2.jpg";
image[10]="Images/11_T2_Trainspotting.jpg";
image[11]="Images/12_Ghostbusters.jpg";

video[0]="videos/1_Fight_Club.mp4";
video[1]="videos/2_The_Big_Short.mp4";
video[2]="videos/3_Lost_in_Translation.mp4";
video[3]="videos/4_Jaws.mp4";
video[4]="videos/5_Return_of_the_Living_Dead.mp4";
video[5]="videos/6_Closer.mp4";
video[6]="videos/7_Scott_Pilgrim_vs_the_World.mp4";
video[7]="videos/8_Reservoir_Dogs.mp4";
video[8]="videos/9_Shaun_of_the_Dead.mp4";
video[9]="videos/10_Terminator_2.mp4";
video[10]="videos/11_T2_Trainspotting.mp4";
video[11]="videos/12_Ghostbusters.mp4";

plot[0]="A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.";
plot[1]="In 2008, Wall Street guru Michael Burry realizes that a number of subprime home loans are in danger of defaulting. Burry bets against the housing market by throwing more than $1 billion of his investors' money into credit default swaps. His actions attract the attention of banker Jared Vennett (Ryan Gosling), hedge-fund specialist Mark Baum (Steve Carell) and other greedy opportunists. Together, these men make a fortune by taking full advantage of the impending economic collapse in America.";
plot[2]="A lonely, aging movie star named Bob Harris (Bill Murray) and a conflicted newlywed, Charlotte (Scarlett Johansson), meet in Tokyo. Bob is there to film a Japanese whiskey commercial; Charlotte is accompanying her celebrity-photographer husband. Strangers in a foreign land, the two find escape, distraction and understanding amidst the bright Tokyo lights after a chance meeting in the quiet lull of the hotel bar. They form a bond that is as unlikely as it is heartfelt and meaningful.";
plot[3]="When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature.";
plot[4]="When foreman Frank (James Karen) shows new employee Freddy (Thom Mathews) a secret military experiment in a supply warehouse, the two klutzes accidentally release a gas that reanimates corpses into flesh-eating zombies. As the epidemic spreads throughout Louisville, Ky., and the creatures satisfy their hunger in gory and outlandish ways, Frank and Freddy fight to survive with the help of their boss (Clu Gulager) and a mysterious mortician (Don Calfa).";
plot[5]="Alice (Natalie Portman), an American stripper who has moved to London, meets Dan (Jude Law) on the street. While looking at him, a taxi hits her. After taking her to the hospital, Dan begins dating Alice. A year later, Dan -- who has written a novel about Alice -- is bored. He flirts with photographer Anna (Julia Roberts). Pretending to be her in a chat room, he leads dermatologist Larry (Clive Owen) to an accidental meeting with Anna. As the years pass, both relationships disintegrate.";
plot[6]="As bass guitarist for a garage-rock band, Scott Pilgrim (Michael Cera) has never had trouble getting a girlfriend; usually, the problem is getting rid of them. But when Ramona Flowers (Mary Elizabeth Winstead) skates into his heart, he finds she has the most troublesome baggage of all: an army of ex-boyfriends who will stop at nothing to eliminate him from her list of suitors.";
plot[7]="Six criminals with pseudonyms, and each strangers to one another, are hired to carry out a robbery. The heist is ambushed by police and the gang are forced to shoot their way out. At their warehouse rendezvous, the survivors, realising that they were set up, try to find the traitor in their midst.";
plot[8]="Shaun is a 30-something loser with a dull, easy existence. When he's not working at the electronics store, he lives with his slovenly best friend, Ed, in a small flat on the outskirts of London. The only unpredictable element in his life is his girlfriend, Liz, who wishes desperately for Shaun to grow up and be a man. When the town is inexplicably overrun with zombies, Shaun must rise to the occasion and protect both Liz and his mother.";
plot[9]="In this sequel set eleven years after 'The Terminator,' young John Connor (Edward Furlong), the key to civilization's victory over a future robot uprising, is the target of the shape-shifting T-1000 (Robert Patrick), a Terminator sent from the future to kill him. Another Terminator, the revamped T-800 (Arnold Schwarzenegger), has been sent back to protect the boy. As John and his mother (Linda Hamilton) go on the run with the T-800, the boy forms an unexpected bond with the robot.";
plot[10]="First there was an opportunity, then there was a betrayal. Twenty years later, Mark Renton (Ewan McGregor) returns to the only place that he can ever call home. There waiting for him are old buddies Spud (Ewen Bremner), Sick Boy (Jonny Lee Miller) and Begbie (Robert Carlyle). Sorrow, loss, joy, vengeance, hatred, love, fear, regret, self-destruction and mortal danger are also all lined up and ready to welcome him.";
plot[11]="After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become ghostbusters to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city. The Ghostbusters must now save New York from complete destruction.";

var choice = 0;
function swap() {
   var img = document.getElementById("slide");
   var vid = document.getElementById("video");
   var desc = document.getElementById("description");

img.src = image[choice];
vid.src = video[choice];
desc.innerHTML = plot[choice];
}

window.onload = function () {
choice = 0;
swap();
};

function next() {
    if (choice < image.length - 1)
        choice++;
    else
        choice = 0;
    swap();
}
function prev() {
    if (choice > 0)
        choice--;
    else
        choice = image.length - 1;
    swap();
}