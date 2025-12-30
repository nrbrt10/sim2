export const playersSeedDML = `
INSERT INTO players_seed
(id, name, population, pop_init_x, pop_init_y)
values
('1', 'Iven', 5, 100, 0),
('2', 'Rohan', 6, 0, 200),
('3', 'Mark', 3, 250, 250)
`

export const settlementsSeedDML = `
INSERT INTO stg_settlements
(player_id, name, x, y)
VALUES
('1', 'Alecjo', 100, 0),
('2', 'AltaSolejo', 0, 200),
('3', 'Ethelmere', 250, 250)
`

export const mobNamesDML = `
INSERT INTO mob_names
(name, culture)
VALUES
('Amirae',''),
('Kalino',''),
('Suryel',''),
('Navira',''),
('Talika',''),
('Mirano',''),
('Avenit',''),
('Rishan',''),
('Elora',''),
('Sanika',''),
('Valino',''),
('Arjunel',''),
('Kamira',''),
('Devion',''),
('Lirasa',''),
('Aneto',''),
('Samirae',''),
('Rohil',''),
('Nalira',''),
('Varunet',''),
('Rowan',''),
('Caleb',''),
('Thorne',''),
('Miles',''),
('Archer',''),
('Nolan',''),
('Everett',''),
('Silas',''),
('Grant',''),
('Wesley',''),
('Holden',''),
('Beckett',''),
('Logan',''),
('Marshall',''),
('Owen',''),
('Fletcher',''),
('Reid',''),
('Dalton',''),
('Sawyer',''),
('Callum',''),
('Joravio',''),
('Maelco',''),
('Bravio',''),
('Stiago',''),
('Arvando',''),
('Luiken',''),
('Roelio',''),
('Karmel',''),
('Davren',''),
('Iñigoen',''),
('Talco',''),
('Mirten',''),
('Xandor',''),
('Elvaroen',''),
('Renkel',''),
('Sorell',''),
('Marcio',''),
('Velken',''),
('Javiën',''),
('Corluis','')
`