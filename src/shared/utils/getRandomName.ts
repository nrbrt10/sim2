import { getRandomInt } from "./getRandomInt";

export function getRandomName(pool: readonly string[] = namePool): string {
    if (pool.length === 0) { throw new Error("Name pool is empty") };

    const name = pool[getRandomInt(pool.length)];
    if (name === undefined) { throw new Error("Random index out of bounds")}

    return name;
}

const namePool = [
    'Amirae',
    'Kalino',
    'Suryel',
    'Navira',
    'Talika',
    'Mirano',
    'Avenit',
    'Rishan',
    'Elora',
    'Sanika',
    'Valino',
    'Arjunel',
    'Kamira',
    'Devion',
    'Lirasa',
    'Aneto',
    'Samirae',
    'Rohil',
    'Nalira',
    'Varunet',
    'Rowan',
    'Caleb',
    'Thorne',
    'Miles',
    'Archer',
    'Nolan',
    'Everett',
    'Silas',
    'Grant',
    'Wesley',
    'Holden',
    'Beckett',
    'Logan',
    'Marshall',
    'Owen',
    'Fletcher',
    'Reid',
    'Dalton',
    'Sawyer',
    'Callum',
    'Joravio',
    'Maelco',
    'Bravio',
    'Stiago',
    'Arvando',
    'Luiken',
    'Roelio',
    'Karmel',
    'Davren',
    'Iñigoen',
    'Talco',
    'Mirten',
    'Xandor',
    'Elvaroen',
    'Renkel',
    'Sorell',
    'Marcio',
    'Velken',
    'Javiën',
    'Corluis'
] as const;