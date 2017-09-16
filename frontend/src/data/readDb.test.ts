import readDb from './readDb';

const mockDb = `
1. Tumman Virran Taa
2. Ylioppilasriemua
3.
4. Erokirje

1. Tumman Virran Taa
Yllä harmaan korven korpit laulaa,  
Hurme tämän kansan roudan sulattaa,  
Katso kuinka hohkaa kansi taivaan,  
Kutsuu se meitä tumman virran taa.  
  
Heikot vaipuu kuohuun sysimustaan,  
Sankarit kun astuu joen rantaan,  
Halki iäisyyden laulu raikaa,  
Kutsuu se Veikkoja tumman virran taa.  
  
Nostakaamme malja, Koskenkorvaa on,  
väljähtyköön kalja, mallas kelvoton.  
Kalja voimallansa meitä innostaa,  
Koskenkorvan kanssa mielet nostattaa.  
2. Ylioppilasriemua
On elomme häipyvä muistoista pois
ken mennyttä kauankaan muistella vois?
:,: Mutt’ riemu kattoon Veikot, 
ja sarkka pohjaan, hei!
Laulun mahti murehet jo unholaan vei. :,:

Sä nuoruuden huumassa harhaillut
liet, ja kulutti voimasi hukkaan sen tiet.
Mutt’ riemu...

Mä usein oon syvyyksiin sukeltanut
mutt’ aina oon pinnalle pulpahtanut.
Siis jos sä kerran ryyppäät, niin
ryyppää kunnolla, ja jos sä kerran
rakastat, niin aamuun rakasta.
Siis jos sä kerran ryyppäät, niin
ryyppää kunnolla,
ja jos sä kerran unhoitat, niin
KAIKKI UNHOITA!
4. Olen heittänyt verkon
(säv., san. Kerkko Koskinen)

Olen heittänyt verkon siinä toivossa
että siihen nappaisi taimen tai mukava leski
Olen keittänyt keiton siinä toivossa
että syömään tulisi <nimi 1> tai mukava leski

Ei tärpännyt tällä kertaa
ei tärpännyt naisen kanssa
mutta <nimi 1> jäi sentään ja laulettiin
ja juotiin rauhassa kossua

Olen kaivanut kuopan siinä toivossa
että siihen putoaisi karhu tai mukava leski
Olen paistanut paistin siinä toivossa
että syömään tulisi <nimi 2> tai mukava leski

Ei tärpännyt tällä kertaa... (pöytää kiertäen)
`;

it('successfully parses songbook db with actual whitespacing', () => {
  const result = readDb(mockDb);
  expect(result.tableOfContents.length).toBe(4);
  expect(result.songs.length).toBe(3);
});
