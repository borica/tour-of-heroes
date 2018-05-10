import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const heroes = [
     {
       id: 0,
       name: 'Ana',
       image: 'ana.png'
     },
     {
       id: 1,
       name: 'Bastion',
       image: 'bastion.png'
     },
     {
       id: 2,
       name: 'Brigitte',
       image: 'brigitte.png'
     },
     {
       id: 3,
       name: 'D.Va',
       realName: 'Hana Song',
       occupation: 'Pro Gamer, Mech Pilot',
       baseOfOp: 'Busan, South Korea',
       affiliation: 'Korean Army',
       image: 'dva.png',
       role: 'Tank',
       desc: "D.Va's mech is nimble and powerful-its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.",
       skills: [
         {
           id: 1,
           name: 'Fusion Cannons',
           image: 'dva-cannon.png',
           desc: "D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va's movement   while they're active."
         },
         {
           id: 2,
           name: 'Light Gun',
           image: 'dva-lightgun.png',
           desc: "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster."
         },
         {
           id: 3,
           name: 'Boosters',
           image: 'dva-boosters.png',
           desc: "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back."
         },
         {
           id: 4,
           name: 'Defense Matrix',
           image: 'dva-matrix.png',
           desc: "D.Va can maintain this forward-facing targeting array for a short period of time; while active, it'll stop incoming projectiles."
         },
         {
           id: 5,
           name: 'Micro Missiles',
           image: 'dva-missiles.png',
           desc: "D.Va launches a volley of explosive rockets."
         },
         {
           id: 6,
           name: 'Self-Destruct',
           image: 'dva-destruct.png',
           desc: "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents."
         },
         {
           id: 7,
           name: 'Call Mech',
           image: 'dva-mech.png',
           desc: "If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray."
         }
       ]
     },
     {
       id: 4,
       name: 'Doomfist',
       image: 'doomfist.png'
     },
     {
       id: 5,
       name: 'Genji',
       image: 'genji.png'
     },
     {
       id: 6,
       name: 'Hanzo',
       image: 'hanzo.png'
     },
     {
       id: 7,
       name: 'Junkrat',
       image: 'junkrat.png'
     },
     {
       id: 8,
       name: 'Lucio',
       image: 'lucio.png'
     },
     {
       id: 9,
       name: 'McCree',
       image: 'mccree.png'
     },
     {
       id: 10,
       name: 'Mei',
       image: 'mei.png'
     },
     {
       id: 11,
       name: 'Mercy',
       image: 'mercy.png'
     },
     {
       id: 12,
       name: 'Moira',
       image: 'moira.png'
     },
     {
       id: 13,
       name: 'Orisa',
       image: 'orisa.png'
     },
     {
       id: 14,
       name: 'Pharah',
       image: 'pharah.png'
     },
     {
       id: 15,
       name: 'Reaper',
       image: 'reaper.png'
     },
     {
       id: 16,
       name: 'Reinhardt',
       image: 'reinhardt.png'
     },
     {
       id: 17,
       name: 'Roadhog',
       image: 'roadhog.png'
     },
     {
       id: 18,
       name: 'Soldier: 76',
       image: 'soldier76.png'
     },
     {
       id: 19,
       name: 'Sombra',
       image: 'sombra.png'
     },
     {
       id: 20,
       name: 'Symmetra',
       image: 'symmetra.png'
     },
     {
       id: 21,
       name: 'Torbjorn',
       image: 'torbjorn.png'
     },
     {
       id: 22,
       name: 'Tracer',
       image: 'tracer.png'
     },
     {
       id: 23,
       name: 'Widowmaker',
       image: 'widowmaker.png'
     },
     {
       id: 24,
       name: 'Winston',
       image: 'winston.png'
     },
     {
       id: 25,
       name: 'Zarya',
       image: 'zarya.png'
     },
     {
       id: 26,
       name: 'Zenyatta',
       image: 'zenyatta.png'
     }
   ];
    return {heroes};
  }
}
