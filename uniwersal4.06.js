var testowanie = false;

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const GIFEncoder = require('gifencoder');
const client = new Discord.Client();
const { createCanvas, loadImage , registerFont } = require('canvas');
const fs = require('fs');
const open = require('open');
const download = require('download');
var request = require('xhr-request');

var c7 = {
	loginy:[],
	hasla:[],
	discord:[],
	f1:[],
	klasaD:[],
	teamy:[]
}
var git = "{\"loginy\":[\"Joopek\",\"savi\",\"mrrr\",\"Lawrenc\",\"Ærø\",\"The Honkler\",\"Cena\",\"Quest\",\"karp\",\"ClayJay aka kemot\",\"Nicol.\",\"frytki\",\"hik02\",\"Acquah\",\"A.Meret\",\"lepretara 5\",\"PINOTEK\",\"MC\",\"Daroo\",\"paul pojjer GTR\",\"gilles villeneuve\",\"k4iley\",\"rocky\",\"marten\",\"17 S. Starodubov\",\"mario\",\"Godlike\",\"KKK\",\"Kwiato\",\"zenon\",\"Cena\",\"Haspid\",\"komornik19\",\"Kolumb\",\"Don\",\"Falafel\",\"i'm from brazil\",\"Softendo\",\"Bump\",\"Rizzoli\",\"AmrBinCabbar\",\"SantiX\",\"so.blue\",\"DAKOTA\",\"e\",\"KacpeR\",\"retroz\",\"Xx_Slim_xX\",\"dakon\",\"Panda\",\"dakierod\",\"Pan Kierowca\",\"Beto\",\"goat\",\"Time Lord\",\"Rudy Rudy Rydz\",\"Nogo\",\"a king's metamorphosis\",\"Lebron\",\"Prodigium\",\"Kogut\",\"Mecha\",\"Xavi\",\"brejalis\",\"Snorlax\",\"Adrian\",\"Zawisza\",\"Nemanja Radonjic\",\"opna\",\"pastor chavo\",\"Diablo Granado\",\"Handballijczyk\",\"PYOTER\",\"8\",\"Slovenia oktipus\",\"Munja\",\"fortuna d.\",\"Spławski\",\"ProRock\",\"Papież-Franciszek\",\"Rizla+\",\"IronCroos\",\"Gerson\",\"Alfas\",\"Kruszwil\",\"ładuś\",\"Benedetto\",\"Vanaken\",\"ZUTWLC\",\"Helium\",\"dinospeed19\",\"Lubizza\",\"Pol.Llonch\",\"Makaroni\",\"Nenè\",\"dj666\",\"Sarkan\",\"iSeb\",\"widneybr\",\"Wilmot\",\"Raky\",\"Peky\",\"Pingu\",\"Miłeszx\",\"Hayexyz\",\"Quench\",\"Z3H1R\",\"Hospitalek\",\"hax\",\"IvoW\",\"PESZKO\",\"Smurf\",\"GirlontaR\",\"KI\",\"Zorci\",\"stile\",\"AdiWWE\",\"Wickey\",\"The Niggest\",\"Recep\",\"Dres\",\"silent\",\"Liban\",\"aitor\",\"TrapStar\",\"Fab\",\"Łukasz Szumowski\",\"Sylwek\",\"Konrad\",\"koT\",\"Keksz\",\"Piccolo\",\"DAVID CECH\",\"aton14\",\"Ricciardelli\",\"Pocoyo\",\"Liberty\",\"DaVo\",\"ramos\",\"Lorenzo\",\"Del\",\"^aMp^\",\"x\",\"Matixoo\",\"Arto\",\"Pipi Lacalzalarga\",\"Decayy'\",\"Kl\",\"Simoncelli\",\"Chunky\"],\"discord\":[\"352921338933149696\",\"392445914163445781\",\"286177331377078273\",\"329695032175099916\",\"577484876899680256\",\"588674511935635480\",\"304287255390978048\",\"345218683628552193\",\"267307087460040715\",\"432930247307034624\",\"343356428804816896\",\"582272064971472896\",\"348794225866964992\",\"334017704946302978\",\"396053791935299594\",\"598300818810077210\",\"562301268891140100\",\"317754317811613706\",\"344795437967867904\",\"257320115828293632\",\"103911162931863552\",\"253358421334556672\",\"515611116194234371\",\"432486358242557953\",\"554323219419627520\",\"192301042732498944\",\"266511167537545216\",\"392064218800848896\",\"334759782147686400\",\"447416479693144064\",\"304287255390978048\",\"464730648347934730\",\"505004830759190528\",\"345936706869919745\",\"360485080440766466\",\"312222514539397121\",\"522888245508308993\",\"144083128942723072\",\"457755471126986762\",\"302531051883069440\",\"373802795175772174\",\"436906117042536448\",\"418419509083242496\",\"605050234300792832\",\"351993688856985601\",\"425410215731658754\",\"522235843977412628\",\"526437515448549398\",\"605687846832963604\",\"523707280424828940\",\"477865021238542349\",\"345131921145069568\",\"506874427766734848\",\"205008951371235329\",\"319659723307876363\",\"442998696188051467\",\"218815309824393216\",\"604806312647327942\",\"265558164806696962\",\"372693412467572736\",\"346643143841677312\",\"242029496432066560\",\"440602188348260362\",\"376098641137369099\",\"616253016101748765\",\"577543445565145118\",\"378940583894450187\",\"571227723020763155\",\"287322817475903498\",\"411714064792813569\",\"471249197241204746\",\"415260197326684161\",\"572776611955605525\",\"257367631638560779\",\"602404816630710302\",\"236835410876170240\",\"657043103558926346\",\"663852204410798101\",\"344792214699769856\",\"502649379254042624\",\"517751948506562573\",\"533598551674978305\",\"500286312704638987\",\"310128263718633473\",\"646428492866650153\",\"593475283668172839\",\"544269006824144897\",\"372457868089098261\",\"525047528035581953\",\"384367667609468929\",\"406460403577782273\",\"625827248104144936\",\"380128034709045269\",\"504636227387916288\",\"595591886257782804\",\"393174612088979470\",\"430812759760961538\",\"396301365514862592\",\"386364597470232578\",\"442923942320013332\",\"335089770101473281\",\"394121424320856074\",\"634084920167497758\",\"517731248425140224\",\"427882846854578181\",\"548157277434019841\",\"315531683581394944\",\"615563495899136013\",\"610940441398870047\",\"403168223886835713\",\"535579731060588554\",\"320245619631587329\",\"191610974669766656\",\"484427283650838568\",\"317211096089886720\",\"704772772425105489\",\"153619843994746880\",\"724693681902452806\",\"424193910076604416\",\"632573735043596299\",\"664903392325271557\",\"238012719695921153\",\"482112437773008927\",\"162395392460193792\",\"503977935296790538\",\"442707193641304065\",\"613768541023371453\",\"605123516773433354\",\"531164512443957250\",\"646428492866650153\",\"541587853701021696\",\"245214539862245386\",\"453171086088208394\",\"529280652756123648\",\"358739224360386573\",\"712059139274047508\",\"602466314933764096\",\"600303514874281986\",\"307599859328876556\",\"362917722339803136\",\"193428641084866562\",\"304195719697399808\",\"415885361760305164\",\"649625535940526080\",\"481390772097384448\",\"618763908664262667\",\"723456102083330079\",\"618887708009300018\",\"392445914163445781\",\"505329578655481856\"],\"teamy\":[1,4,4,10,0,0,0,3,11,13,1,6,7,0,0,0,0,0,11,0,8,0,0,5,0,0,0,10,0,7,0,0,0,2,0,6,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,2,0,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,9,9,0,9,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"f1\":[\"savi\",\"Haspid\",\"Joopek\",\"Kolumb\",\"Quest\",\"Daroo\",\"Don\",\"Falafel\",\"karp\",\"marten\",\"POP\",\"zenon\",\"Nicol.\",\"KKK\",\"Lubizza\",\"Mohito\",\"ProRock\",\"SantiX\"],\"klasaD\":[\"Bielik\",\"Cena\",\"GirlontaR\",\"hax\",\"hik02\",\"James\",\"ClayJay aka kemot\",\"Lawrenc\",\"ładuś\",\"mario\",\"MC\",\"mrrr\",\"paul pojjer gtr\",\"Poczta\",\"PYOTER\",\"Spławski\",\"Softendo\",\"ZUTWLC\",\"aitor\",\"Zorci\",\"Fab\",\"stile\",\"aton14\",\"Helium\"]}";
c7 = JSON.parse(git);
c7.f1 = [], c7.klasaA = [], c7.klasaB = [], c7.klasaC = [], c7.klasaD = [], c7.teamy = [];

const kanalZmiany = '549207996819832842';	// kanał, z którego wychwytuje wszelkie zmiany kont
const msgZmiany = '895262307377115176';		// pierwsza wiadomość, żeby wiedział kiedy się zatrzymać

const kanalKonta = '859749696087392266';	// kanał, na którym można zarządzać kontami
const kanalKontaS = '859749767362248744';	// pierwsza wiadomość w powyższym kanale

///////// PONIŻSZE SĄ DLA TEAMÓW

const kanalZmianyT = '895023200033972274';	// kanał, z którego wychwytuje wszelkie zmiany teamów
const msgZmianyT = '895028605812375563';	// pierwsza wiadomość, żeby wiedział kiedy się zatrzymać

const kanalKontaT = '857597390764113940';	// kanał, na którym można zarządzać teamami
const kanalKontaST = '857868859976319016';	// pierwsza wiadomość w powyższym kanale

/////////////

var kanal1 = '349660042083041280';			// kanał, na którym bedą wysyłane wiadomości o każdym przejeździe (talksy)
var kanal2 = '889480140688609342';			// kanał z pierwszą wiadomością (qualifications)
var kanal3 = "610092324285972516";  		// kanał z którego zczytuje wiadomości (komunikacja testowa)
var tekst1 = "F1 QUALIFICATIONS";			// tekst górny
var tekst2 = "Jerusalemmmmmm";				// tor
var krajMapy = 'id';						// kod kraju, gdzie są kwale

const tekst1f2 = "F2 QUALIFICATIONS";		// tekst górny
var kanal2f2 = '889480151971295305';		// kanał z pierwszą wiadomością (qualifications)
var kanal3f2 = '740254000967974914';  		// kanał z którego zczytuje wiadomości (komunikacja testowa)
var krajMapyf2 = 'id';						// kod kraju, gdzie są kwale
var tekst2f2 = "Jerusalemmmmmm";			// tor

const kanal3tren = "743180189437132920";  	// kanał z którego zczytuje przejazdy treningowe f1
const kanal3trenf2 = "743180213122236466";	// kanał z którego zczytuje przejazdy treningowe f2

const kanalResults = '859003189273034762'	// kanał na który wysyłane są wyniki wyścigu
const kanalResultsF2 = '889480053392539648'	// kanał na który wysyłane są wyniki wyścigu f2
var kanalGeneralka = '859003189273034762'	// kanał z generalką
var kanalGeneralkaF2 = '889480246095646722'	// kanał z generalką f2
const wyscigi1msg = '859365531303936030'	// pierwsza wiadomosc z wynikami wyscigów

const standingsCreatorChannel = '920700766291902515'					// kanał do tworzenia ładnych tabelek

const iloscWyscigow = 14;					// ilość wyścigów w kalendarzu

var teamy = [{name:'Free Driver', emoji:client.emojis.find(emoji => emoji.name == 'fd')}];
var kolory = ['#000000','#9eff57','#05ccb8','#060075','#f5f500','#727272','#840054','#d1000a','#0702fa','#84963c','#0900b9','#0900b9','#f28f05','#d4362a','#d4362a','#d4362a','#d4362a','d4362a','d4362a','d4362a'];
var teamImage = [], avatars = [], torf1, torf2, stan=0, schedule={}, lastMsgChannel, krajf1, krajf2, zmienilihaslo = [];
var kanalTrenF1, kanalTrenF2;

if (testowanie) {
	kanal1 = '394476100220223490';
	kanal2 = '746773482821386381';
	kanal2f2 = '746773482821386381';
}

var czasy = {
	gracz:[-1],
	czas:[0],
	flag:['pl']
}

var tab = {
	gracz:[0],
	czas:[0]
}

var czasyf2 = {
	gracz:[-1],
	czas:[0],
	flag:['pl']
}

var tabf2 = {
	gracz:[0],
	czas:[0]
}

var czasylotne = {
	gracz:[0],
	czas:[0],
	flag:['pl']
}

var czasyzmiejsca = {
	gracz:[0],
	czas:[0],
	flag:['pl']
}

var user = {
	name:["FalaBot"],
	czaszmiejsca:[0],
	czaslotny:[0],
	flag: ['pl'],
	lapszmiejsca: [0],
	lapslotny: [0]
};

var trening = {
	gracz:['falabot'],
	czas:[0]
}

var userf2 = JSON.parse(JSON.stringify(user));;

var lastTrenMsgF1=0, lastTrenMsgF2=0;

client.on('ready', () => {
    console.log('Ready!');
	
	/////////
	//return;
	/////////
	
	if (!wczytanoKonta) {
		teamy = [{name:'Free Driver', emoji: '<:fd:443384715207245836>'}];
		wczytajKonta();
	}
	wczytanoKonta = true;
	var channel = client.channels.get('747523797636218962');
	channel.fetchMessages({ limit: 5 })
	  .then(messages => wczytajTor(messages.array()))
	  .catch(console.error);
	  
	channel = client.channels.get('747523816086831204');
	channel.fetchMessages({ limit: 5 })
	  .then(messages => wczytajTorf2(messages.array()))
	  .catch(console.error);
	  
	wczytajMultikonta00('f1', '802515445592227860', '849408680662663228', 0);
	
	//var channel = client.channels.get("394476100220223490");
	//channel.send("Q1 results").then(sentMessage => wiadomosc = sentMessage);
	
	kanalTrenF2 = client.channels.get('895306720404992011');
	kanalTrenF1 = client.channels.get('895306433707507742');
	
	testowaFunkcja1();
});

if (fs.existsSync('backlogs.txt') == false) fs.writeFileSync('backlogs.txt','BACKLOGS FILE \n','utf-8'); 

client.on('error', (err) => {
   console.log(err.message);
   var data = fs.readFileSync('backlogs.txt', 'utf-8');
   var a = new Date(Date.now());
   var newValue = data + '/n==='+a.getHours()+':'+a.getMinutes()+'=== - '+err.message;
   fs.writeFileSync('backlogs.txt', newValue, 'utf-8');
});

var testowaFunkcja1 = function() {
	var channel = client.channels.get('754064433470505091');
	channel.fetchMessages({ limit: 4 })
	  .then(messages => testowaFunkcja2(messages.array()))
	  .catch(console.error);
}

var testowaFunkcja2 = function(messages) {
	for (var i=0; i<messages.length; i++) {
		var a = messages[i].content.split(' ');
		//console.log(a);
		if (a[0] == 'treningf1') linkTrenF1 = a[1];
		else if (a[0] == 'treningf2') linkTrenF2 = a[1];
		else if (a[0] == 'kwalef1') linkKwaleF1 = a[1];
		else if (a[0] == 'kwalef2') linkKwaleF2 = a[1];
	}
}

var uruchomBota1 = function() {
	var channel = client.channels.get('747523797636218962'); // wczytywanie toru dla f1
	channel.fetchMessages({ limit: 5 })
	  .then(messages => uruchomBota2(messages.array()))
	  .catch(console.error);
}

var uruchomBota2sentMessages = 0;
var uruchomBota2 = function(messages) {
	uruchomBota2sentMessages = 0;
	var channel = client.channels.get('747523797636218962');
	for (var i=messages.length-1; i>=0; i--) {
		channel.send(messages[i].content)
		  .then(sentMessage => uruchomBota3(i))
		  .catch(console.error);
	}
}

var uruchomBota3 = function(a) {
	uruchomBota2sentMessages++;
	if (uruchomBota2sentMessages!=5) return;
	var b = JSON.stringify(c7);
	var c = Math.floor(b.length/1990) + 1; // tyle wiadomości trzeba na przesłanie wszystkiego
	var channel = client.channels.get('911662044904837190'); // kanał, na który będą te konta wysyłane
	for (var i=0; i<=c; i++) {
		if (i==c) {
			channel.send('koniec')
			  .then(sentMessage => uruchomBota4())
			  .catch(console.error);
		} else {
			var d = b.substring(1990*i, 1990*i + 1990);
			channel.send(d);
		}
	}
	
	////////////
	// WYŚLIJ NA KANAŁ WSZYSTKIE KONTA ROZBITE NA KILKA WIADOMOŚCI, TAK JAK KIEDYŚ
	////////////
	// sentMessage z iteratorem i,
}

var uruchomBota4 = function() {
	var channel = client.channels.get('747523816086831204'); // wczytywanie toru f2
	channel.fetchMessages({ limit: 5 })
	  .then(messages => uruchomBota5(messages.array()))
}

var uruchomBota5 = function(messages) {
	uruchomBota2sentMessages = 0;
	var channel = client.channels.get('747523816086831204');
	for (var i=messages.length-1; i>=0; i--) {
		channel.send(messages[i].content)
		  .then(sentMessage => uruchomBota6(i))
		  .catch(console.error);
	}
}

var uruchomBota2sentMessages = 0;
var uruchomBota6 = function(a) {
	uruchomBota2sentMessages++;
	if (uruchomBota2sentMessages!=5) return;
	var channel = client.channels.get('895023200033972274'); // wczytywanie teamów
	channel.fetchMessages({ after: '895028605812375563' })
	  .then(messages => uruchomBota7(messages.array()))
	  .catch(console.error);
}

var uruchomBota7 = function(messages) {
	//console.log(messages.length);
	var channel = client.channels.get('911685425414934558'); // kanał, na który będzie wysyłana lista teamów
	for (var i=messages.length-1; i>=-1; i--) {
		if (i==-1) {
			channel.send('koniec')
			  .then(sentMessage => uruchomBota99())
		      .catch(console.error);
		} else {
			channel.send(messages[i].content);
		}
	}
}

var uruchomBota99 = function(a) {
	var channel = client.channels.get('754040001913815110');
	channel.send('Można stworzyć następny room');
	// na ten moment nic nie robi, może potem mi się przypomni, czy coś jeszcze musi
}

var wczytajTor = function(tab) {
	tekst2 = tab[4].content.split(';;')[0];
	krajMapy = tab[4].content.split(';;')[1];
	torf1 = tekst2;
	loadImage(getFlag(krajMapy)).then((image) => {krajf1 = image;});
}

var wczytajTorf2 = function(tab) {
	tekst2f2 = tab[4].content.split(';;')[0];
	krajMapyf2 = tab[4].content.split(';;')[1];
	torf2 = tekst2f2;
	loadImage(getFlag(krajMapyf2)).then((image) => {krajf2 = image;});
}

var loaded = 0;

client.login('CLIENT LOGIN'); // TODO na haxracing

var m = 1, canvas, ctx, canvas2, ctx2, wczytanoKonta = false, encoder, tabela=[], obrazeczek, pattern, tlo, logof1,logof2, wyslano2 = false, wysylaj=false, wysylaj2 = false, msg;

loadImage("f1haxr.jpg").then((image) => {logof1 = image;});
loadImage("images/f222.png").then((image) => {logof2 = image;});

//for (var i=0; i<teamy.length; i++) loadImage("images/teams/"+teamy[i]+".png").then((image) => {teamImage.push(image);});

loadTeams2 = function(messages) {
	teamImage = [];
	for (var i=0; i<teamy.length; i++) {
		loadImage("images/teams/"+teamy[i].name+".png")
		 .then((image) => {
			 var canv = createCanvas(128,128);
			 var ctxx = canv.getContext('2d');
			 ctxx.drawImage(image, (canv.width-image.width)/2, (canv.height-image.height)/2);
			 teamImage.push(canv);
			 //console.log(image.width, image.height);
		 });
	}
}

flaga = function(a) {
	return getFlag(a);
}

var flags = 'ad,ae,af,ag,ai,ah,ak,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bl,bm,bn,bo,bq,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cw,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,ic,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mf,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,ny,nz,om,pa,pe,pf,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,ss,st,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tr,tt,tv,tw,tz,ua,ug,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,xk,ye,yt,za,zm,zw';
flags = flags.split(',');

function getFlag(a) {
	//if (flags.includes(a)) return "https://www.countryflags.io/"+a+"/shiny/64.png";
	if (flags.includes(a)) return "https://flagcdn.com/40x30/"+a+".png";
	else return "images/domesticFlag.png";
}

var Urlek;
function czyIstniejeAvatar(url) {
	Urlek = url;
	request(url, {
	  method: 'GET'
	}, function (err, data, response) {
	  if (err) throw err
	  var channel = client.channels.get('905014654261166110');
	  var x = response.statusCode;
	  console.log(Urlek);
	  if (x >= 200 && x<300) channel.send('jest git, ', Urlek);
	  else if (x>=400 && x<500) channel.send('typ zmienił avatar ', Urlek);
	  else channel.send('nie wiem co z tym avatarem');
	  //console.log('got ArrayBuffer result: ', data)
	})
}

loadImage("images/tlo.png").then((image) => {
	tlo = image;
});
var timer1 = [], msgf2;
fs.watch('gify', function (event, filename) {
	var tap1 = ['myanimated.gif', 'myanimatedf2.gif', 'myanimated2.gif', 'myanimated2f2.gif'];
	if (!tap1.includes(filename)) var channel = client.channels.get(lastMsgChannel);
	else if (tap1.indexOf(filename) < 2) var channel = client.channels.get(kanal1);
	else if (tap1.indexOf(filename) == 2) var channel = client.channels.get(kanal2);
	else if (tap1.indexOf(filename) == 3) var channel = client.channels.get(kanal2f2);
	clearTimeout(timer1[tap1.indexOf(filename)]);
	timer1[tap1.indexOf(filename)] = setTimeout(function() {
		channel.send({
		  files: [{
			attachment: 'gify/'+filename,
			name: filename
		  }]
		}).then(sentMessage => sendingGif(sentMessage,filename));
		/*if (filename) {
			console.log('filename provided: ' + filename);
		} else {
			console.log('filename not provided');
		}*/
	}, (filename.endsWith('.gif') ? 2000 : 100));
});
/*
fs.watch('botGlowny.txt', function (event, filename) {
	fs.readFile('botGlowny.txt', 'utf8', function (err, data) {
		handleCommand('botGlowny', data);
	});
});
*/
var timer4 = [];
fs.watch('.', function (event, filename) {
	if ( !filename.startsWith('bot') ) return;
	clearTimeout(timer4[filename]);
	timer4[filename] = setTimeout(function() {
		fs.readFile(filename, 'utf8', function (err, data) {
			handleCommand(filename, data);
		});
	}, 500);
});

function handleCommand(plik, komenda) {
	//console.log(plik, komenda);
	if (plik.startsWith('botGlowny')) {
		if (komenda == 'ready') {
			var channel = client.channels.get('754040001913815110');
			channel.fetchMessages({ limit: 1 })
			  .then(messages => sendAgain(channel,messages.array()))
			  .catch(console.error);
		} else if ( ['treningf1','kwalef1','treningf2','kwalef2','race'].includes(komenda.split(' ')[0]) ) {
			var channel = client.channels.get('754064433470505091');
			channel.send(komenda);
			var a = komenda.split(' ');
			if (a[0] == 'treningf1') linkTrenF1 = a[1];
			else if (a[0] == 'kwalef1') linkKwaleF1 = a[1];
			else if (a[0] == 'treningf2') linkTrenF2 = a[1];
			else if (a[0] == 'kwalef2') linkKwaleF2 = a[1];
		} else if (komenda.split(' ')[0] == 'napisz') {
			napisz(komenda.split(' ')[1], komenda.split(' ')[2]);
			var channel = client.channels.get('344605851274838028');
			//channel.send("Zrobione");
			var channel2 = client.channels.get(komenda.split(' ')[3]);
			channel2.send('napisz');
		} else if (komenda.split(' ')[0] == 'koniec') {
			var channel = client.channels.get(komenda.split(' ')[1]);
			channel.send('koniec');
		} else if (komenda.split(';;')[0] == 'delete') {
			var channel = client.channels.get(komenda.split(';;')[2]);
			channel.send(''+komenda.split(';;')[0]+';;'+komenda.split(';;')[1]);
		} else if (komenda.startsWith('czas')) {
			var czasyF = czasy;
			if (komenda.split(';;')[0]=='czasf2') czasyF = czasyf2;
			var a = komenda.split(';;');
			//console.log('tu1', czasy, czasyf2);
			for (var i=1; i<=czasyF.czas.length; i++) {
				if (i==czasyF.czas.length) {
					czasyF.czas.push(Number(a[2]));
					czasyF.gracz.push(Number(a[1]));
					czasyF.flag.push(a[3]);
					break;
				}
				else if (Number(a[2]) < czasyF.czas[i]) {
					czasyF.czas.splice(i,0,Number(a[2]));
					czasyF.gracz.splice(i,0,Number(a[1]));
					czasyF.flag.splice(i,0,a[3]);
					break;
				}
			}
			//console.log('tu2', czasy, czasyf2, czasyF);
			if (a[0] == 'czasf1') {
				czasy = czasyF;
				edytuj(true);
				var channel = client.channels.get(kanal3);
				a[0]='czas';
				channel.send(a.join(';;'));
			} else if (a[0] == 'czasf2') {
				czasyf2 = czasyF;
				edytuj(false);
				var channel = client.channels.get(kanal3f2);
				a[0]='czas';
				channel.send(a.join(';;'));
			}
		}
	} else if (plik.startsWith('botMultikontaRace')) {
		var channel = client.channels.get('802516336009674822');
		channel.send(komenda);
	} else if (plik.startsWith('botMultikontaF1')) {
		var channel = client.channels.get('802515445592227860');
		channel.send(komenda);
	} else if (plik.startsWith('botMultikontaF2')) {
		var channel = client.channels.get('802516242174050314');
		channel.send(komenda);
	} else if (plik.startsWith('botNagraniaF1')) {
		//console.log(komenda);
		var channel = client.channels.get('548894456481316874');
		channel.send(komenda);
	} else if (plik.startsWith('botNagraniaF2')) {
		//console.log(komenda);
		var channel = client.channels.get('730067756279398401');
		channel.send(komenda);
	} else if (plik.startsWith('botKtoNaRoomie')) {
		var a = komenda.split(';;');
		if (a[0] == 'join') {
			if (a[2] == 'f1') {
				naroomieF1[0] = a[1];
				edytuj(true);
			} else {
				naroomieF2[0] = a[1];
				edytuj(false);
			}
		} else if (a[0] == 'leave') {
			if (a[2] == 'f1') {
				naroomieF1 = [];
				edytuj(true);
			} else {
				naroomieF2 = [];
				edytuj(false);
			}
		}
	} else if (plik.startsWith('botPrzejazdyTrenF1')) {
		var a = komenda.split('+|+');
		przetworz(true, a);
	} else if (plik.startsWith('botPrzejazdyTrenF2')) {
		var a = komenda.split('+|+');
		przetworz(false, a);
	}
}

function napisz(kanal, f1) {
	var channel = client.channels.get(kanal);
	var mess = "Qualifications on "+(f1=='f1' ? torf1 : torf2)+": "+(f1=='f1' ? linkKwaleF1 : linkKwaleF2)+'\ntraining room: '+(f1=='f1' ? linkTrenF1 : linkTrenF2)+'\nPassword to training room: haxracing';
	channel.send(mess).then(sentMessage => zapiszWiadomosc(sentMessage, f1));
}

var naroomieF1 = [], naroomieF2 = [];
function edytuj(f1, koniec) {
	var termin = new Date();
	var naroomie = naroomieF2;
	var czasyF = czasyf2;
	if (f1) {
		naroomie = naroomieF1;
		czasyF = czasy;
	}
	var richColor = 'GREEN';
	if (koniec!=undefined) {
		if (koniec == true) {
			richColor = 'RED';
		}
	} else if (naroomie.length>0) {
		richColor = 'YELLOW';
	}
	if (czasyF.gracz.length>1) {
		if (naroomie.length>0) {
			var mes1="",mes2="",mes3="",mes4="-",mes5="-",mes6="-",mes7="";
			var message = wiadomoscKwaleF2;
			if (f1) message = wiadomoscKwaleF1;
			for (var i=1; i<18; i++) {
				if (i>=czasyF.gracz.length) break;
				var emotka = teamy[c7.teamy[czasyF.gracz[i]]].emoji;
				mes1 = mes1+"||:race_car:|| "+i+".\n";
				mes2 = mes2+emotka+"  "+c7.loginy[czasyF.gracz[i]]+"\n";
				mes3 = mes3+czasyF.czas[i].toFixed(3)+" ||:watch:||\n";
			}
			for (var i=18; i<czasyF.gracz.length; i++) {
				if (i==18) mes4="",mes5="",mes6="";
				var emotka = teamy[c7.teamy[czasyF.gracz[i]]].emoji;

				mes4 = mes4+"\n||:race_car:|| "+i+".";
				mes5 = mes5+"\n"+emotka+"  "+c7.loginy[czasyF.gracz[i]]+"";
				mes6 = mes6+"\n"+czasyF.czas[i].toFixed(3)+" ||:watch:||";
				if (i==24) {
					mes4=mes4+"\n";
					mes5=mes5+"\n";
					mes6=mes6+"\n";
				}
			}
			for (var i=0; i<naroomie.length; i++) mes7=mes7+naroomie[i]+", ";
			var mess = new Discord.RichEmbed()
			 .setTitle("Qualifications results on "+(f1 ? torf1 : torf2)+":")
			 .setColor(richColor)
			 .addField("POS",mes1,true)
			 .addField("DRIVER",mes2,true)
			 .addField("TIME",mes3,true)
			 .addField("-",mes4,true)
			 .addField("-",mes5,true)
			 .addField("-",mes6,true)
			 .addField("In room:",mes7,false)
			 .addField("Qualification room:",(f1 ? linkKwaleF1 : linkKwaleF2),false)
			 .addField("Training room:",(f1 ? linkTrenF1 : linkTrenF2),false)
			 .addField("Password to training room:",'haxracing',false)
			message.edit(mess);
		} else {
			var mes1="",mes2="",mes3="",mes4="-",mes5="-",mes6="-",mes7="";
			var message = wiadomoscKwaleF2;
			if (f1) message = wiadomoscKwaleF1;
			for (var i=1; i<18; i++) {
				if (i>=czasyF.gracz.length) break;
				//console.log('tup',teamy, c7.teamy[czasyF.gracz[i]]);
				//var emotka = client.emojis.find(emoji => emoji.name == teamy[c7.teamy[czasy.gracz[i]]].emoji).toString();
				var emotka = teamy[c7.teamy[czasyF.gracz[i]]].emoji;

				mes1 = mes1+"||:race_car:|| "+i+".\n";
				mes2 = mes2+emotka+"  "+c7.loginy[czasyF.gracz[i]]+"\n";
				mes3 = mes3+czasyF.czas[i].toFixed(3)+" ||:watch:||\n";
			}
			for (var i=18; i<czasyF.gracz.length; i++) {
				if (i==18) mes4="",mes5="",mes6="";
				var emotka = teamy[c7.teamy[czasyF.gracz[i]]].emoji;

				mes4 = mes4+"\n||:race_car:|| "+i+".";
				mes5 = mes5+"\n"+emotka+"  "+c7.loginy[czasyF.gracz[i]]+"";
				mes6 = mes6+"\n"+czasyF.czas[i].toFixed(3)+" ||:watch:||";
				if (i==24) {
					mes4=mes4+"\n";
					mes5=mes5+"\n";
					mes6=mes6+"\n";
				}
			}
			//console.log(mes1,mes2,mes3);
			var mess = new Discord.RichEmbed()
			 .setTitle("Qualifications results on "+(f1 ? torf1 : torf2)+":")
			 .setColor(richColor)
			 .addField("POS",mes1,true)
			 .addField("DRIVER",mes2,true)
			 .addField("TIME",mes3,true)
			 .addField("-",mes4,true)
			 .addField("-",mes5,true)
			 .addField("-",mes6,true)
			 .addField("In room:","-",false)
			 .addField("Qualification room:",(f1 ? linkKwaleF1 : linkKwaleF2),false)
			 .addField("Training room:",(f1 ? linkTrenF1 : linkTrenF2),false)
			 .addField("Password to training room:",'haxracing',false)
			message.edit(mess);
		}
	} else {
		if (naroomie.length>0) {
			var message = wiadomoscKwaleF2;
			if (f1) message = wiadomoscKwaleF1;
			var mes7="";
			for (var i=0; i<naroomie.length; i++) mes7=mes7+naroomie[i]+", ";
			var mess = new Discord.RichEmbed()
			 .setTitle("Qualifications results on "+(f1 ? torf1 : torf2)+":")
			 .setColor(richColor)
			 .addField("In room:",mes7,false)
			 .addField("Qualification room:",(f1 ? linkKwaleF1 : linkKwaleF2),false)
			 .addField("Training room:",(f1 ? linkTrenF1 : linkTrenF2),false)
			 .addField("Password to training room:",'haxracing',false)
			message.edit(mess);
		} else {
			var message = wiadomoscKwaleF2;
			if (f1) message = wiadomoscKwaleF1;
			var mess = new Discord.RichEmbed()
			 .setTitle("Qualifications results on "+(f1 ? torf1 : torf2)+":")
			 .setColor(richColor)
			 .addField("In room:","-",false)
			 .addField("Qualification room:",(f1 ? linkKwaleF1 : linkKwaleF2),false)
			 .addField("Training room:",(f1 ? linkTrenF1 : linkTrenF2),false)
			 .addField("Password to training room:",'haxracing',false)
			message.edit(mess);
		}
	}
}

var wiadomoscKwaleF1, wiadomoscKwaleF2;
function zapiszWiadomosc(mess, f1) {
	if (f1=='f1') wiadomoscKwaleF1 = mess;
	else wiadomoscKwaleF2 = mess;
}

function sendAgain(channel, messages) {
	for (var i=messages.length-1; i>=0; i--) {
		channel.send(messages[i].content);
	}
}

sendingGif = function(sentMessage,filename) {
	if (filename=='myanimated2.gif') {
		if (msg!=undefined) msg.delete();
		msg = sentMessage;
	} else if (filename=='myanimated2f2.gif') {
		if (msgf2!=undefined) msgf2.delete();
		msgf2 = sentMessage;
	}
}

function wczytajKonta() {
	var channel = client.channels.get("741673072200908830");
	var jot = ""
	channel.fetchMessages({ limit: 10 })
	  .then(messages => wczytajKonta2(messages))
	  .catch(console.error);
}
/*
function wczytajKonta2(messages) {
	c7 = JSON.parse(messages.array()[9].content.substring(2) + messages.array()[8].content.substring(2) + messages.array()[7].content.substring(2) + messages.array()[6].content.substring(2) + messages.array()[5].content.substring(2) + messages.array()[4].content.substring(2) + messages.array()[3].content.substring(2) + messages.array()[2].content.substring(2) + messages.array()[1].content.substring(2) + messages.array()[0].content.substring(2));
	c7.klasa = [], c7.teamy = [];
	var a = [5,10,36,47,55,65,103,113,148,160,161,209,211,223,239,249,253,258,260,267,305,311,313,315,317];
	for (var i=a.length-1; i>=0; i--) {
		c7.loginy.splice(a[i], 1);
		c7.hasla.splice(a[i], 1);
		c7.discord.splice(a[i], 1);
	}
	for (var i=0; i<c7.loginy.length; i++) {
		c7.teamy[i] = 0;
		c7.klasa[i] = 'd';
	}
	//console.log(c7.loginy.length);
	var channel = client.channels.get('895023162146828319');
	var msg = '';
	for (var i=50; i<100; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
	msg = '';
	for (var i=100; i<150; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
	msg = '';
	for (var i=150; i<200; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
	msg = '';
	for (var i=200; i<250; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
	msg = '';
	for (var i=250; i<300; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
	msg = '';
	for (var i=300; i<c7.loginy.length; i++) msg += '\n'+i+' - '+c7.loginy[i]+' - '+c7.discord[i];
	channel.send(msg);
}
*/
function wczytajKonta2(messages) {
	c7 = JSON.parse(messages.array()[9].content.substring(2) + messages.array()[8].content.substring(2) + messages.array()[7].content.substring(2) + messages.array()[6].content.substring(2) + messages.array()[5].content.substring(2) + messages.array()[4].content.substring(2) + messages.array()[3].content.substring(2) + messages.array()[2].content.substring(2) + messages.array()[1].content.substring(2) + messages.array()[0].content.substring(2));
	c7.klasa = [], c7.f1 = [], c7.klasaA = [], c7.klasaB = [], c7.klasaC = [], c7.klasaD = [], c7.teamy = [];
	var a = [5,10,36,47,55,65,103,113,148,160,161,209,211,223,239,249,253,258,260,267,305,311,313,315,317];
	for (var i=a.length-1; i>=0; i--) {
		c7.loginy.splice(a[i], 1);
		c7.hasla.splice(a[i], 1);
		c7.discord.splice(a[i], 1);
	}
	for (var i=0; i<c7.loginy.length; i++) {
		c7.teamy[i] = 0;
		c7.klasa[i] = 'd';
	}
	var channel2 = client.channels.get(kanalZmiany);
	zmianyKont00(true, msgZmiany, channel2.lastMessageID);
	var channel3 = client.channels.get(kanalZmianyT);
	channel3.fetchMessages({ after: msgZmianyT })
	  .then(messages => noweTeamy(messages.array()))
	  .catch(console.error)
}

function zmianyKont00(check, after, before) {
	var channel2 = client.channels.get(kanalZmiany);
	var limits = { };
	if (before!=0) limits.before = before;
	//console.log(limits);
	channel2.fetchMessages(limits)
	  .then(messages => zmianyKont01(check, messages.array(), after, before))
	  .catch(console.error)
}

function zmianyKont01(check, tab, after, before) {
	for (let z of tab) {
		//console.log(z.content);
		doDodania.push(z);
		if (z.id==after) {
			//console.log(doDodania.length);
			zmianyKont02(doDodania, check);
			return;
		}
	}
	zmianyKont00(check, after, tab[tab.length-1].id);
}
//var doDodania=[];

function zmianyKont02(tab, check) {
	var channel2 = client.channels.get(kanalZmiany);
	channel2.fetchMessages({ after: tab[0].id })
	  .then(messages => zmianyKont03(messages.array(), tab, check))
	  .catch(console.error)
}

function zmianyKont03(tab1, tab, check) {
	tab.splice(0,0,tab1[0]);
	zmianyKont(tab, check);
}

function zmianyKont(messages, check) {
	//console.log(c7.loginy[c7.loginy.length-2],c7.loginy[c7.loginy.length-1],c7.loginy[c7.loginy.length]);
	for (var i=messages.length-1; i>=0; i--) {
		//console.log(messages[i].content);
		if (messages[i].content.startsWith('konto')) {
			var m = messages[i].content.split(';;');
			c7.loginy.push(m[1]);
			c7.hasla.push(m[2]);
			c7.discord.push(m[3]);
			c7.teamy.push(0);
			c7.klasa.push('d');
		} else if (messages[i].content.startsWith('password')) {
			var m = messages[i].content.split(';;');
			c7.hasla[Number(m[1])] = m[2];
		} else if (messages[i].content.startsWith('team')) {
			var m = messages[i].content.split(';;');
			c7.teamy[Number(m[1])] = Number(m[2]);
		} else if (messages[i].content.startsWith('klasa')) {
			var m = messages[i].content.split(';;');
			c7.klasa[Number(m[1])] = m[2].toLowerCase();
		}
	}
	if (check) {
		zarzadzanieKontem001(kanalKontaS, 0);
	}
}

function zarzadzanieKontem001(after, before) {
	var channel = client.channels.get(kanalKonta);
	var limits = { };
	if (before!=0) limits.before = before;
	channel.fetchMessages(limits)
	  .then(messages => zarzadzanieKontem002(messages.array(), after, before))
	  .catch(console.error)
}

function zarzadzanieKontem002(tab, after, before) {
	for (let z of tab) {
		doDodania2.push(z);
		if (z.id==after) {
			zarzadzanieKontem0(doDodania2);
			return;
		}
	}
	zarzadzanieKontem001(after, tab[tab.length-1].id);
}
var doDodania2=[];

function noweTeamy(messages) {
	for (var i=messages.length-1; i>=0; i--) {
		var c = messages[i].content.split(' ;; ');
		// ':grey_question:'
		// '❓'
		//var d = client.emojis.find(emoji => emoji.name == message.content.split(';;')[1]).toString();
		teamy.push({name: c[1], emoji: c[2]});
	}
	loadTeams2();
	//console.log('IOP wczytanie wszystkich teamów na początek');
	var channel = client.channels.get(kanalKontaT);
	channel.fetchMessages({ after: kanalKontaST })
	  .then(messages => tworzenieTeamow0(messages.array()))
	  .catch(console.error)
}

function zarzadzanieKontem0(messages) {
	var a = [];
	for (var i=0; i<messages.length; i++) {
		//console.log(messages[i].content);
		if (messages[i].reactions.array().length>0) {
			zarzadzanieKontem00(a);
			//console.log('e',a);
			return;
		} else if (!messages[i].author.bot) a.push(messages[i]);
	}
	zarzadzanieKontem00(a);
}

function tworzenieTeamow0(messages) {
	var a = [];
	//console.log('IOP wczytanie wiadomości z nowymi teamami');
	for (var i=0; i<messages.length; i++) {
		if (messages[i].reactions.array().length>0) {
			tworzenieTeamow00(a);
			return;
		} else if (!messages[i].author.bot) a.push(messages[i]);
	}
	tworzenieTeamow00(a);
}

function zarzadzanieKontem00(messages) {
	for (var i=messages.length-1; i>=0; i--) zarzadzanieKontem(messages[i]);
}

function tworzenieTeamow00(messages) {
	//console.log('IOP wczytanie niezareagowanych wiadomości',messages);
	for (var i=messages.length-1; i>=0; i--) stworzenieTeamu(messages[i]);
}

function zarzadzanieKontem(message) {
	var args = message.content.split(';;');
	if (!['konto','team','klasa'].includes(args[0])) {
		message.channel.send('Nieprawidłowa komenda (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		  return;
	} else if (args.length<3) {
		message.channel.send('Brakuje któregoś argumentu, sprawdź w instrukcji czy dobrze wpisujesz komendę (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		  return;
	} else if (args[0] == 'team' && teamy.length <= Number(args[2])) {
		message.channel.send('Nieprawidłowy numer teamu (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		  return;
	} else if (['team','klasa'].includes(args[0]) && (Number(args[1]) < 0 || Number(args[1]) >= c7.loginy.length)) {
		message.channel.send('Nieprawidłowy numer gracza (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	} else if (args[0] == 'klasa' && !['a','b','c','d'].includes(args[2].toLowerCase())) {
		message.channel.send('Nieprawidłowa nazwa klasy (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	} else if (args[0] == 'team' && ['Falafel','frytki'].includes(c7.loginy[Number(args[1])]) && message.author.id != '312222514539397121') {
		message.channel.send('Niestety nie masz uprawnień do zmiany teamu tego gracza (wiadomość: `'+message.content+')`');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	}
	var channel = client.channels.get(kanalZmiany);
	var msg = args[0];
	for (var i=1; i<args.length; i++) msg = msg + ';;' + args[i];
	if (args[0] == 'konto') {
		msg = 'konto;;'+args[2]+';;';
		const znaki = '1234567890qwertyuiopasdfghjklzxcvbnm';
		var haslo = '';
		for (var i=0; i<3; i++) {
			haslo += (znaki.charAt(Math.floor(Math.random()*znaki.length)));
		}
		msg += haslo;
		msg += ';;'+args[1];
		client.fetchUser(args[1])
		  .then(fetchedUser => fetchedUser.send("🇬🇧 Hi!\nThanks for the registration! Q1 starts on Tuesday at 21.00 CET (19.00 GMT) and lasts 2 days. Results and link are available in <#889480151971295305> channel. Your account:\n\nNick: **"+message.content.substring(27)+"**\nPassword: **"+haslo+"** \n\nAfter joining the room, you have to type `.login "+haslo+"`. During Q you can change your password by sending me PM: `f.password [new password]` Good luck!\n\n🇵🇱 Cześć!\nDzięki za rejestrację! Q1 zaczyna się we wtorek o 21 i trwa przez 2 dni, a wyniki i link możesz znaleźć na kanale <#889480151971295305>. Dane Twojego konta:\n\nNick: **"+message.content.substring(27)+"**\nHasło: **"+haslo+"** \n\nPo wejściu na room musisz napisać `.login "+haslo+"` W czasie trwania Q1 możesz zmienić hasło do Twojego konta pisząc do mnie `f.password [nowe hasło]`. Powodzenia!"))
		  .catch(console.error);
		var channel2 = client.channels.get('895023162146828319');
		channel2.send(''+c7.loginy.length + ' - '+args[2]+' - '+args[1]);
	}
	channel.send(msg);
	message.react('✅')
	  .then(console.log('Zareagowano na coś tam'))
	  .catch(console.error);
}

function stworzenieTeamu(message) {
	/*
	var a = message.content.split(';;')[0];		
	var b = client.emojis.find(emoji => emoji.name == message.content.split(';;')[1]).toString();
	teamy.push({name: a, emoji: b});
	message.channel.send('Nowy team: **'+a+'**\nLogo: '+b);
	*/
	//console.log(message.attachments);
	//console.log('IOP tworzenie teamu z wiadomości '+message.content);
	var a = message.content.split(';;');
	var b = message.attachments.array()[0];
	if (a.length<2) {
		message.channel.send('Nieprawidłowy format wiadomości (`'+message.content+'`)');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	} else if (!b.filename.endsWith('.png')) {
		message.channel.send('Obraz musi być w formacie PNG (`'+message.content+'`)');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	} else if (b.height > 128 || b.width > 128) {
		message.channel.send('Max wielkość obrazu to 128x128 (`'+message.content+'`)');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	} else if (client.emojis.find(emoji => emoji.name == a[1]) == null) {
		message.channel.send('Podane emoji nie istnieje - możliwe że zostało utworzone już po uruchomieniu bota (wiadomość `'+message.content+'`)');
		message.react('❌')
		  .then(console.log('Zareagowano na coś tam'))
		  .catch(console.error);
		return;
	}
	var c = message.content.split(';;')[0];
	// ':grey_question:'
	// '❓'
	var d = client.emojis.find(emoji => emoji.name == message.content.split(';;')[1]).toString();
	teamy.push({name: c, emoji: message.content.split(';;')[1]});
	message.react('✅')
	  .then(console.log('Zareagowano na coś tam'))
	  .catch(console.error);
	var channel = client.channels.get('895023200033972274');
	channel.send(''+teamy.length-1+' ;; '+c+' ;; '+d);
	download(b.url, 'images/teams', {filename: c+'.png'});
	setTimeout(function() {
		loadTeams2();
	}, 3000);
}

function wczytajMultikonta00(typ, kanal, after, before) {
	var channel = client.channels.get(kanal);
	var limits = { };
	if (before!=0) limits.before = before;
	//console.log(typ);
	channel.fetchMessages(limits)
	  .then(messages => wczytajMultikonta01(typ, kanal, after, before, messages.array()))
	  .catch(console.error)
}

function wczytajMultikonta01(typ, kanal, after, before, tab) {
	for (let z of tab) {
		//console.log(z.content);
		doDodania3.push(z);
		if (z.id==after) {
			//console.log(doDodania.length);
			wczytajMultikonta02(typ);
			return;
		}
	}
	wczytajMultikonta00(typ, kanal, after, tab[tab.length-1].id);
}
var doDodania3=[], multikonta = {auth: [], conn: [], name: [], date: []};

function wczytajMultikonta02(typ) {
	if (typ == 'f1') wczytajMultikonta00('f2', '802516242174050314', '849371241404170320', 0);
	else if (typ == 'f2') wczytajMultikonta00('race', '802516336009674822', '898272393632559155', 0);
	else wczytajMultikonta03();
}

function wczytajMultikonta03() {
	for (let z of doDodania3) {
		if (!z.author.bot) continue;
		if (z.content.includes(' ;; ')) {
			var a = z.content.split(' ');
			var b = [ a[5], a[4] ];
			var c = a[0];
		} else {
			var a = z.content.split(' ');
			var b = [ a[a.length-1], a[a.length-2], a[a.length-3] ];
			if (b[0] == undefined || b[1] == undefined || b[2] == undefined) continue;
			var c = z.content.substring(0, z.content.length - b[0].length - b[1].length - b[2].length - 3);
		}
		if (!multikonta.auth.includes(b[1])) {
			multikonta.auth.push(b[1]);
			multikonta.conn.push(b[0]);
			multikonta.name.push(c);
			multikonta.date.push(z.createdTimestamp);
		} else if (!multikonta.conn.includes(b[0])) {
			multikonta.auth.push(b[1]);
			multikonta.conn.push(b[0]);
			multikonta.name.push(c);
			multikonta.date.push(z.createdTimestamp);
		}
	}
	//console.log(multikonta.auth, multikonta.conn, multikonta.name, multikonta.date);
}

function czyjuz(f1, canvas, user, avek) {
	encoder = new GIFEncoder(canvas.width, canvas.height);
	if (f1) {
		var czasyF = czasy;
		var tabF = tab;
	} else {
		var czasyF = czasyf2;
		var tabF = tabf2;
	}
	// stream the results as they are available into myanimated.gif
	if (f1) encoder.createReadStream().pipe(fs.createWriteStream('gify/myanimated.gif'));
	else encoder.createReadStream().pipe(fs.createWriteStream('gify/myanimatedf2.gif'));
	 
	encoder.start();
	encoder.setRepeat(-1);   // 0 for repeat, -1 for no-repeat
	encoder.setDelay(20);  // frame delay in ms
	encoder.setQuality(10); // image quality. 10 is default.
	
	ctx.globalAlpha = 1;
	ctx.fillStyle = '#ffffff';
	ctx.fillStyle = "#ff0000";
	
	var wid = canvas.width, hei = canvas.height;
	
	for (var i=0; i<55; i++) {
		ctx.drawImage(tlo, 0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 0.1;
		ctx.drawImage(f1 ? logof1 : logof2,wid/120,wid/120,wid/5,wid/7);
		ctx.globalAlpha = 1;
		
		ctx.beginPath();
		ctx.fillStyle = '#000000';
		ctx.fillRect(canvas.width/2-4, canvas.height/4, 8, canvas.height/2);
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(canvas.width/2-1.5, canvas.height/4, 3, canvas.height/2);
		ctx.fillStyle = '#303030';
		ctx.fillRect(0, canvas.height/4, canvas.width, 6);
		ctx.fillRect(0, canvas.height/4*3, canvas.width, 6);
		ctx.fill();
		
		ctx.fillStyle = "#0080ff";
		ctx.strokeStyle = '000000';
		
		if (i>34) ctx.globalAlpha = 1 + (34-i)*0.05;
		
		ctx.beginPath();
		ctx.arc(i*20*wid/1200, canvas.height/2, wid/40, 0, 2*Math.PI);
		ctx.fill();
		ctx.lineWidth = wid/400;
		ctx.stroke();
		ctx.lineWidth = 1;
		
		ctx.fillStyle='#ffffff';
		
		var fontsiz = wid/40;
		fontsiz = 'bold '+fontsiz+'px sans-serif';
		ctx.font = fontsiz;
		ctx.textAlign = 'center';
		ctx.fillText(avek, i*20*wid/1200, canvas.height/2+wid/120);
		
		fontsiz = wid/40;
		fontsiz = fontsiz+'px sans-serif';
		ctx.font = fontsiz;
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		ctx.fillText(c7.loginy[user], i*20*wid/1200, canvas.height/2 + wid/20);
		
		ctx.globalAlpha = 1;
		encoder.addFrame(ctx);
	}
	ctx.globalAlpha = 0.1;
	var fontsiz = wid/20;
	fontsiz = fontsiz+'px Formula1 Display-Bold';
	ctx.font = fontsiz;
	encoder.setDelay(200);
	//settings.speed = 30;
	encoder.setQuality(1);
	ctx.lineWidth = wid/400;
	ctx.textAlign = 'left';
	
	for (var i=0; i<9; i++) {
		ctx.fillText(c7.loginy[user], canvas.width/3, canvas.height/3);
		ctx.strokeText(c7.loginy[user], canvas.width/3, canvas.height/3);
		
		ctx.fillText(''+czasyF.czas[czasyF.gracz.indexOf(user)].toFixed(3), canvas.width/24, canvas.height/3*2);
		ctx.strokeText(''+czasyF.czas[czasyF.gracz.indexOf(user)].toFixed(3), canvas.width/24, canvas.height/3*2);
		
		ctx.drawImage(czasyF.flag[czasyF.gracz.indexOf(user)], canvas.width/24, canvas.height/3-80*wid/1200, canvas.width/8, canvas.width/32*3);
		ctx.drawImage(teamImage[c7.teamy[user]], canvas.width/32*9, canvas.height/3*2-78*wid/1200, canvas.width/32*3, canvas.width/32*3);
		ctx.drawImage(avatars[user], canvas.width/9*2, canvas.height/3-60*wid/1200, canvas.width/33*2, canvas.width/33*2);
		
		ctx.fillText(teamy[c7.teamy[user]].name, canvas.width/12*5, canvas.height/3*2);
		ctx.strokeText(teamy[c7.teamy[user]].name, canvas.width/12*5, canvas.height/3*2);
		
		encoder.addFrame(ctx);
		ctx.globalAlpha += 0.1;
	}
	ctx.globalAlpha = 1;
	encoder.setDelay(20);
	//settings.speed = 10;
	
	var canvas5 = createCanvas(canvas.width, canvas.height);
	var ctx5 = canvas5.getContext('2d');
	ctx5.globalAlpha = 1;

	ctx5.beginPath();
	ctx5.rect(0, 0, canvas.width, canvas.height);
	ctx5.fillStyle = "#15151d";
	ctx5.fill();
	
	ctx5.drawImage(f1 ? logof1 : logof2,wid/120,wid/120,wid/15,wid/20);
	ctx5.globalAlpha = 1;
	ctx5.drawImage(f1 ? krajf1 : krajf2,wid-wid/15,wid/120,wid/18,wid/24);

	var fontsiz = wid/30;
	fontsiz = fontsiz+'px Formula1 Display-Bold';
	ctx5.font = fontsiz;
	ctx5.fillStyle = "#FFFFFF";
	ctx5.textAlign = "left";
	ctx5.fillText(f1 ? tekst1 : tekst1f2, wid/12, wid/24);
	fontsiz = wid/30;
	fontsiz = fontsiz+'px Formula1 Display-Regular';
	ctx5.font = fontsiz;
	ctx5.fillStyle = "#FFFFFF";
	ctx5.textAlign = "left";
	
	fontsiz = wid/30;
	fontsiz = fontsiz+'px Formula1 Display-Regular';
	ctx5.font = fontsiz;
	ctx5.textAlign = "right";
	ctx5.fillText(f1 ? torf1 : torf2, wid-wid/12, wid/24);
		
	ctx5.beginPath();
	ctx5.rect(0, wid/16, canvas.width, 1);
	ctx5.fillStyle = "#808080";
	ctx5.fill();
	
	fontsiz = 24*wid/1200;
	fontsiz = fontsiz+'px Formula1 Display-Regular';
	ctx5.font = fontsiz;
	ctx5.fillStyle = "#FFFFFF";
	ctx5.textAlign = "left";
	
	for (var i=1; i<czasyF.gracz.length; i++) { //TODO tabela na czasy prawdziwe, na żółto nowych
		if (czasyF.gracz[i]==user) continue;
		ctx5.fillStyle = "#FFFFFF";
		ctx5.beginPath();
		ctx5.moveTo(wid/40, 85*wid/1200+40*i*wid/1200);
		ctx5.lineTo(65*wid/1200, 85*wid/1200+40*i*wid/1200);
		ctx5.lineTo(65*wid/1200, 110*wid/1200+40*i*wid/1200);
		
		ctx5.arc(55*wid/1200, 110*wid/1200+40*i*wid/1200, 10*wid/1200, 0, Math.PI/180*90);
		
		ctx5.moveTo(55*wid/1200, 120*wid/1200+40*i*wid/1200);
		ctx5.lineTo(30*wid/1200, 120*wid/1200+40*i*wid/1200);
		ctx5.lineTo(30*wid/1200, 85*wid/1200+40*i*wid/1200);
		ctx5.fill();
		
		ctx5.textAlign = "center";
		ctx5.fillStyle = "#000000";
		var fontsiz = Math.round(26*wid/1200);
		fontsiz = fontsiz+'px Formula1 Display-Bold';
		ctx5.font = fontsiz;
		ctx5.fillText(""+i, 47*wid/1200, 113*wid/1200 + 40*i*wid/1200);
		
		ctx5.textAlign = "left";
		ctx5.beginPath();
		fontsiz = Math.round(30*wid/1200);
		if (c7.loginy[czasyF.gracz[i]].length>14) fontsiz = Math.round(26*wid/1200);
		fontsiz = fontsiz+'px Formula1 Display-Bold';
		ctx5.font = fontsiz;
		ctx5.fillStyle = "#FFFFFF";
		ctx5.fillText(c7.loginy[czasyF.gracz[i]], 140*wid/1200, 113*wid/1200+40*i*wid/1200);
		fontsiz = Math.round(30*wid/1200);
		fontsiz = fontsiz+'px Formula1 Display-Regular';
		ctx5.font = fontsiz;
		ctx5.fillText(teamy[c7.teamy[czasyF.gracz[i]]].name, 490*wid/1200, 113*wid/1200+40*i*wid/1200); //TODO teamy
		ctx5.fillText(czasyF.czas[i].toFixed(3), 865*wid/1200, 113*wid/1200+40*i*wid/1200);
		
		if (i>1) ctx5.fillText("+"+((czasyF.czas[i].toFixed(3))-(czasyF.czas[1].toFixed(3))).toFixed(3), 1035*wid/1200, 113*wid/1200+40*i*wid/1200); 
		ctx5.drawImage(czasyF.flag[i],83*wid/1200,87*wid/1200+40*i*wid/1200,40*wid/1200,30*wid/1200);
		ctx5.drawImage(teamImage[c7.teamy[czasyF.gracz[i]]] ,440*wid/1200,87*wid/1200+40*i*wid/1200,30*wid/1200,30*wid/1200);
	}
	
	encoder.setDelay(100);
	//settings.speed = 50;
	
	for (var i=0; i<10; i++) {
		ctx.globalAlpha = 1;
		ctx.drawImage(tlo, 0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 0.1;
		ctx.drawImage(f1 ? logof1 : logof2,wid/120,wid/120,wid/5,wid/7);
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.fillStyle = '#000000';
		ctx.fillRect(wid/2-4, canvas.height/4, 8, canvas.height/2);
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(wid/2-1.5, canvas.height/4, 3, canvas.height/2);
		ctx.fillStyle = '#303030';
		ctx.fillRect(0, canvas.height/4, wid, 6);
		ctx.fillRect(0, canvas.height/4*3, wid, 6);
		ctx.fill();
		/*
		ctx.fillStyle = "#0080ff";
		ctx.strokeStyle = '000000';
		
		ctx.beginPath();
		ctx.arc(wid-wid/10, canvas.height/2, wid/40, 0, 2*Math.PI);
		ctx.fill();
		ctx.lineWidth = wid/400;
		ctx.stroke();
		ctx.lineWidth = 1;
		
		ctx.fillStyle='#ffffff';
		
		var fontsiz = wid/40;
		fontsiz = 'bold '+fontsiz+'px sans-serif';
		ctx.font = fontsiz;
		ctx.textAlign = 'center';
		ctx.fillText(avek, wid-wid/10, canvas.height/2+wid/120);
		
		fontsiz = wid/40;
		fontsiz = fontsiz+'px sans-serif';
		ctx.font = fontsiz;
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		ctx.fillText(c7.loginy[user], wid-wid/10, canvas.height/2 + wid/20);
		*/
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "center";
		
		ctx.globalAlpha = 0.1 + i/10;
		ctx.drawImage(canvas5, 0, 0, canvas.width, canvas.height);
		
		ctx.globalAlpha = 1;
		ctx.textAlign = 'left';
		fontsiz = wid/20;
		fontsiz = fontsiz+'px Formula1 Display-Bold';
		ctx.font = fontsiz;
		ctx.fillText(c7.loginy[user], canvas.width/3, canvas.height/3);
		ctx.strokeText(c7.loginy[user], canvas.width/3, canvas.height/3);
		
		ctx.fillText(''+czasyF.czas[czasyF.gracz.indexOf(user)].toFixed(3), canvas.width/24, canvas.height/3*2);
		ctx.strokeText(''+czasyF.czas[czasyF.gracz.indexOf(user)].toFixed(3), canvas.width/24, canvas.height/3*2);
		
		ctx.drawImage(czasyF.flag[czasyF.gracz.indexOf(user)], canvas.width/24, canvas.height/3-80*wid/1200, canvas.width/8, canvas.width/32*3);
		ctx.drawImage(teamImage[c7.teamy[user]], canvas.width/32*9, canvas.height/3*2-78*wid/1200, canvas.width/32*3, canvas.width/32*3);
		ctx.drawImage(avatars[user], canvas.width/9*2, canvas.height/3-60*wid/1200, canvas.width/33*2, canvas.width/33*2);
		
		ctx.fillText(teamy[c7.teamy[user]].name, canvas.width/12*5, canvas.height/3*2);
		ctx.strokeText(teamy[c7.teamy[user]].name, canvas.width/12*5, canvas.height/3*2);
		
		encoder.addFrame(ctx);
	}
	ctx.lineWidth = 1;
	encoder.setDelay(60);
	//settings.speed = 30;
	var ij = czasyF.gracz.indexOf(user);
	var cFlaga = {
		docelowo: {x: 83*wid/1200, y:87*wid/1200+40*ij*wid/1200, dx: 40*wid/1200, dy: 30*wid/1200},
		obecnie: {x: canvas.width/24, y: canvas.height/3-80*wid/1200, dx: canvas.width/8, dy: canvas.width/32*3}
	}
	var cPozycja = {
		docelowo: {p1: {x: wid/40, y: 85*wid/1200+40*ij*wid/1200}, p2: {x: 65*wid/1200, y: 85*wid/1200+40*ij*wid/1200}, p3: {x: 65*wid/1200, y: 110*wid/1200+40*ij*wid/1200}, p4: {x: 55*wid/1200, y: 110*wid/1200+40*ij*wid/1200}, p5: {x: 55*wid/1200, y: 120*wid/1200+40*ij*wid/1200}, p6: {x: 30*wid/1200, y: 120*wid/1200+40*ij*wid/1200}, p7: {x: 30*wid/1200, y: 85*wid/1200+40*ij*wid/1200}},
		tekst: {x: 47*wid/1200, y: 113*wid/1200 + 40*ij*wid/1200}
	}
	var cNick = {
		docelowo: {x: 140*wid/1200, y: 113*wid/1200+40*ij*wid/1200, fontsize: (c7.loginy[user].length>14 ? 26*wid/1200 : 30*wid/1200)},
		obecnie: {x: canvas.width/3, y: canvas.height/3, fontsize: wid/20}
	}
	var cTeam = {
		docelowo: {x: 490*wid/1200, y: 113*wid/1200+40*ij*wid/1200, fontsize: Math.round(30*wid/1200)},
		obecnie: {x: canvas.width/12*5, y: canvas.height/3*2, fontsize: wid/20}
	}
	var cCzas= {
		docelowo: {x: 865*wid/1200, y: 113*wid/1200+40*ij*wid/1200, fontsize: Math.round(30*wid/1200)},
		obecnie: {x: canvas.width/24, y: canvas.height/3*2, fontsize: wid/20}
	}
	var cDiff = {
		docelowo: {x: 1035*wid/1200, y: 113*wid/1200+40*ij*wid/1200}
	}
	var cLogo = {
		obecnie: {x: canvas.width/32*9, y: canvas.height/3*2-78*wid/1200, dx: canvas.width/32*3, dy: canvas.width/32*3},
		docelowo: {x: 440*wid/1200, y:87*wid/1200+40*ij*wid/1200, dx: 30*wid/1200, dy: 30*wid/1200}
	}
	//console.log(cNick.docelowo.fontsize/wid*1200);	
	for (var i=1; i<11; i++) {
		//console.log(cFlaga.obecnie.x + i/10*(cFlaga.docelowo.x - cFlaga.obecnie.x), cFlaga.obecnie.y + i/10*(cFlaga.docelowo.y - cFlaga.obecnie.y), cFlaga.obecnie.dx - i/10*(cFlaga.obecnie.dx - cFlaga.docelowo.dx), cFlaga.obecnie.dy - i/10*(cFlaga.obecnie.dy - cFlaga.docelowo.dy));
		ctx.drawImage(canvas5, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(czasyF.flag[czasyF.gracz.indexOf(user)], cFlaga.obecnie.x + i/10*(cFlaga.docelowo.x - cFlaga.obecnie.x), cFlaga.obecnie.y + i/10*(cFlaga.docelowo.y - cFlaga.obecnie.y), cFlaga.obecnie.dx - i/10*(cFlaga.obecnie.dx - cFlaga.docelowo.dx), cFlaga.obecnie.dy - i/10*(cFlaga.obecnie.dy - cFlaga.docelowo.dy));
		ctx.drawImage(teamImage[c7.teamy[user]], cLogo.obecnie.x + i/10*(cLogo.docelowo.x - cLogo.obecnie.x), cLogo.obecnie.y + i/10*(cLogo.docelowo.y - cLogo.obecnie.y), cLogo.obecnie.dx - i/10*(cLogo.obecnie.dx - cLogo.docelowo.dx), cLogo.obecnie.dy - i/10*(cLogo.obecnie.dy - cLogo.docelowo.dy));
		//ctx.drawImage(flaga('pl'), cFlaga.docelowo.x + (10-1)*(cFlaga.obecnie.x - cFlaga.docelowo.x), 100,100,100);//cFlaga.docelowo.y + (10-1)*(cFlaga.obecnie.y - cFlaga.docelowo.y), cFlaga.docelowo.dx + (10-1)*(cFlaga.obecnie.dx - cFlaga.docelowo.dx), cFlaga.docelowo.dy + (10-1)*(cFlaga.obecnie.dy - cFlaga.docelowo.dy));
		fontsiz = Math.round(cNick.obecnie.fontsize - i/10*(cNick.obecnie.fontsize - cNick.docelowo.fontsize));
		fontsiz = fontsiz+'px Formula1 Display-Bold';
		ctx.font = fontsiz;
		ctx.fillText(c7.loginy[user], cNick.obecnie.x + i/10*(cNick.docelowo.x - cNick.obecnie.x), cNick.obecnie.y + i/10*(cNick.docelowo.y - cNick.obecnie.y));
		
		ctx.beginPath();
		ctx.moveTo(cPozycja.docelowo.p1.x - (10-i)*5, cPozycja.docelowo.p1.y);
		ctx.lineTo(cPozycja.docelowo.p2.x - (10-i)*5, cPozycja.docelowo.p2.y);
		ctx.lineTo(cPozycja.docelowo.p3.x - (10-i)*5, cPozycja.docelowo.p3.y);
		
		ctx.arc(cPozycja.docelowo.p4.x - (10-i)*5, cPozycja.docelowo.p4.y, 10*wid/1200, 0, Math.PI/180*90);
		
		ctx.moveTo(cPozycja.docelowo.p5.x - (10-i)*5, cPozycja.docelowo.p5.y);
		ctx.lineTo(cPozycja.docelowo.p6.x - (10-i)*5, cPozycja.docelowo.p6.y);
		ctx.lineTo(cPozycja.docelowo.p7.x - (10-i)*5, cPozycja.docelowo.p7.y);
		ctx.fill();
		
		ctx.textAlign = "center";
		ctx.fillStyle = "#000000";
		fontsiz = Math.round(26*wid/1200);
		fontsiz = fontsiz+'px Formula1 Display-Bold';
		ctx.font = fontsiz;
		ctx.fillText(""+ij, cPozycja.tekst.x - (10-i)*5, cPozycja.tekst.y);
		
		ctx.textAlign = "left";
		ctx.fillStyle = "#ffffff";
		
		fontsiz = Math.round(cTeam.obecnie.fontsize - i/10*(cTeam.obecnie.fontsize - cTeam.docelowo.fontsize));
		fontsiz = fontsiz+'px Formula1 Display-Regular';
		ctx.font = fontsiz;
		ctx.fillText(teamy[c7.teamy[user]].name, cTeam.obecnie.x + i/10*(cTeam.docelowo.x - cTeam.obecnie.x), cTeam.obecnie.y + i/10*(cTeam.docelowo.y - cTeam.obecnie.y));
		ctx.fillText(czasyF.czas[czasyF.gracz.indexOf(user)].toFixed(3), cCzas.obecnie.x + i/10*(cCzas.docelowo.x - cCzas.obecnie.x), cCzas.obecnie.y + i/10*(cCzas.docelowo.y - cCzas.obecnie.y));
		ctx.globalAlpha = 0.1*i;
		if (ij>1) ctx.fillText("+"+((czasyF.czas[ij].toFixed(3))-(czasyF.czas[1].toFixed(3))).toFixed(3), cDiff.docelowo.x, cDiff.docelowo.y);
		ctx.globalAlpha = 1-0.1*i;
		ctx.drawImage(avatars[user], canvas.width/9*2, canvas.height/3-60*wid/1200, canvas.width/33*2, canvas.width/33*2);
		ctx.globalAlpha = 1;
		
		encoder.addFrame(ctx);
	}
	encoder.finish()
	
}

function addFrame() {
	encoder = new GIFEncoder(canvas.width, canvas.height);
	// stream the results as they are available into myanimated.gif
	encoder.createReadStream().pipe(fs.createWriteStream('gify/myanimated.gif'));
	 
	encoder.start();
	encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
	encoder.setDelay(100);  // frame delay in ms
	encoder.setQuality(10); // image quality. 10 is default.
	for (var i=0; i<tabela.length; i++) encoder.addFrame(tabela[i]);
	//console.log(encoder);
	encoder.finish();
}

function firstMess(f1, koniec) {
	if (f1) {
		var czasyF = czasy;
		var tabF = tab;
	} else {
		var czasyF = czasyf2;
		var tabF = tabf2;
	}
	var canvas5 = createCanvas(1200, 170+40*czasyF.gracz.length);
	var ctx5 = canvas5.getContext('2d');
	
	encoder2 = new GIFEncoder(canvas5.width, canvas5.height);
	// stream the results as they are available into myanimated.gif
	if (f1) encoder2.createReadStream().pipe(fs.createWriteStream('gify/myanimated2.gif'));
	else encoder2.createReadStream().pipe(fs.createWriteStream('gify/myanimated2f2.gif'));
	 
	encoder2.start();
	encoder2.setRepeat(0);   // 0 for repeat, -1 for no-repeat
	encoder2.setDelay(1000);  // frame delay in ms
	encoder2.setQuality(10); // image quality. 10 is default.
	
	ctx5 = generalCanvas(f1, canvas5);

	ctx5.textAlign = 'right';
	ctx5.font = '30px Formula1 Display-Bold';
	ctx5.fillStyle = 'ffffff';
	if (koniec==1) {
		ctx5.fillText("FINISHED", 1140, canvas5.height-20);
		ctx5.fillStyle = '#ff0000';
		ctx5.beginPath();
		ctx5.arc(1170, canvas5.height-30, 20, 0, 2*Math.PI);
		ctx5.fill();
	} else {
		ctx5.fillText("LIVE", 1140, canvas5.height-20);
		encoder2.addFrame(ctx5);
		ctx5.fillStyle = '#00ff00';
		ctx5.beginPath();
		ctx5.arc(1170, canvas5.height-30, 20, 0, 2*Math.PI);
		ctx5.fill();
	}
	encoder2.addFrame(ctx5);
	encoder2.finish();
}

function generalCanvas(f1, canvas) {
	if (f1) {
		var czasyF = czasy;
		var tabF = tab;
	} else {
		var czasyF = czasyf2;
		var tabF = tabf2;
	}
	
	//console.log(czasyF);
	
	ctx = canvas.getContext('2d');
	ctx.globalAlpha = 1;

	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#15151d";
	ctx.fill();
	
	ctx.drawImage(f1 ? logof1 : logof2,10,10,80,50);
	ctx.font = '40px Formula1 Display-Bold';
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "left";
	ctx.fillText(f1 ? tekst1 : tekst1f2, 100, 50);
	ctx.font = '24px Formula1 Display-Regular';
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "left";
	
	ctx.font = '40px Formula1 Display-Regular';
	ctx.textAlign = "right";
	ctx.fillText(f1 ? torf1 : torf2, 1080, 50);
	
	ctx.beginPath();
	ctx.rect(0, 75, canvas.width, 1);
	ctx.fillStyle = "#808080";
	ctx.fill();
	
	ctx.font = '24px Formula1 Display-Regular';
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "left";

	for (var i=1; i<czasyF.gracz.length; i++) { //TODO tabela na czasy prawdziwe, na żółto nowych
		ctx.fillStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.moveTo(30, 85+40*i);
		ctx.lineTo(65, 85+40*i);
		ctx.lineTo(65, 110+40*i);
		
		ctx.arc(55, 110+40*i, 10, 0, Math.PI/180*90);
		
		ctx.moveTo(55, 120+40*i);
		ctx.lineTo(30, 120+40*i);
		ctx.lineTo(30, 85+40*i);
		ctx.fill();
		
		ctx.textAlign = "center";
		ctx.fillStyle = "#000000";
		ctx.font = '26px Formula1 Display-Bold';
		ctx.fillText(""+i, 47, 113 + 40*i);
		
		ctx.textAlign = "left";
		ctx.beginPath();
		ctx.font = '30px Formula1 Display-Bold';
		ctx.fillStyle = "#FFFFFF";
		if (c7.loginy[czasyF.gracz[i]].length != undefined) {
			if (c7.loginy[czasyF.gracz[i]].length>14) ctx.font = '26px Formula1 Display-Bold';
		}
		ctx.fillText(c7.loginy[czasyF.gracz[i]], 140, 113+40*i-(ctx.font.startsWith('26') ? 2 : 0));
		ctx.font = '30px Formula1 Display-Regular';
		ctx.fillText(teamy[c7.teamy[czasyF.gracz[i]]].name, 490, 113+40*i); //TODO teamy
		ctx.fillText(czasyF.czas[i].toFixed(3), 865, 113+40*i);
		
		if (i>1) ctx.fillText("+"+((czasyF.czas[i].toFixed(3))-(czasyF.czas[1].toFixed(3))).toFixed(3), 1035, 113+40*i); 
		if (typeof czasyF.flag[i] == 'object') ctx.drawImage(czasyF.flag[i],83,87+40*i,40,30);
		if (typeof teamImage[c7.teamy[czasyF.gracz[i]]] == 'object') ctx.drawImage(teamImage[c7.teamy[czasyF.gracz[i]]], 440,87+40*i,30,30)
	}
	
	ctx.drawImage(f1 ? krajf1 : krajf2,1120,10,60,50);
	return ctx;
}

var wiadomosc, miejsce=97;

function editPic(f1) {
	var czasyF = czasyf2;
	if (f1) czasyF = czasy;
	var canvas5 = createCanvas(1200, 170+40*czasyF.gracz.length);
	var ctx5 = canvas5.getContext('2d');
	
	encoder2 = new GIFEncoder(canvas5.width, canvas5.height);
	// stream the results as they are available into myanimated.gif
	if (f1) encoder2.createReadStream().pipe(fs.createWriteStream('gify/myanimated2.gif'));
	else encoder2.createReadStream().pipe(fs.createWriteStream('gify/myanimated2f2.gif'));
	 
	encoder2.start();
	encoder2.setRepeat(0);   // 0 for repeat, -1 for no-repeat
	encoder2.setDelay(1000);  // frame delay in ms
	encoder2.setQuality(10); // image quality. 10 is default.
	
	ctx5 = generalCanvas(f1, canvas5);
	ctx5.textAlign = 'right';
	ctx5.font = '30px Formula1 Display-Bold';
	ctx5.fillStyle = 'ffffff';
	ctx5.fillText("LIVE", 1140, canvas5.height-20);
	encoder2.addFrame(ctx5);
	ctx5.fillStyle = '#00ff00';
	ctx5.beginPath();
	ctx5.arc(1170, canvas5.height-30, 20, 0, 2*Math.PI);
	ctx5.fill();
	encoder2.addFrame(ctx5);
	encoder2.finish();
}

function coTeraz(x, i, kanal) {
	if (((x==1 || x==3) && i==czasyzmiejsca.gracz.length) || ((x==2 || x==4) && i==czasylotne.czas.length)) {
		var obraz = canvas.toDataURL("image/png");
		let base64Image = obraz.split(';base64,').pop();
		fs.writeFile('image'+x+'.png', base64Image, {encoding: 'base64'}, function(err) {
			//console.log('File created');
		});
		m=1;
		if (lastTrenMsgF1 != 0 && kanal.id==kanalTrenF1.id) lastTrenMsgF1.delete();
		else if (lastTrenMsgF2 != 0 && kanal.id==kanalTrenF2.id) lastTrenMsgF2.delete();
		setTimeout(function(){
			kanal.send({
			  files: [{
				attachment: "image"+x+".png",
				name: "obrazek.png"
			  }]
			})
			  .catch(console.error);
		}, 5000);
	} else {
		createPicTren(x, i, kanal);
	}
}

function loadLastMsg(message, kanal) {
	if (kanal == kanalTrenF1) lastTrenMsgF1 = message;
	else lastTrenMsgF2 = message;
}

function createPicTren(x, i, kanal) {
	//console.log(kanal);
	var userF = user;
	if (x>2) userF = userf2;
	if (i==1) {
		/*if (kanal == kanalTrenF1 || kanal == kanalTrenF2) {
			kanal.fetchMessages({ limit: 1})
			.then(messages => messages.array()[0].delete())
			.catch(console.error);
		}*/
		czasylotne = {
			gracz:[0],
			czas:[0],
			flag:['pl']
		}

		czasyzmiejsca = {
			gracz:[0],
			czas:[0],
			flag:['pl']
		}
		//console.log(userF);
		if (x%2==1) {
			for (var k=1; k<userF.name.length; k++) {
				//console.log(k, userF);
				if (userF.czaszmiejsca[k]==100) continue;
				for (var j=1; j<=czasyzmiejsca.czas.length; j++) {
					//console.log(czasyzmiejsca);
					if (j==czasyzmiejsca.czas.length) {
						czasyzmiejsca.czas.push(userF.czaszmiejsca[k]);
						czasyzmiejsca.gracz.push(userF.name[k]);
						czasyzmiejsca.flag.push(userF.flag[k]);
						break;
					}
					else if (userF.czaszmiejsca[k] < czasyzmiejsca.czas[j]) {
						czasyzmiejsca.czas.splice(j,0,userF.czaszmiejsca[k]);
						czasyzmiejsca.gracz.splice(j,0,userF.name[k]);
						czasyzmiejsca.flag.splice(j,0,userF.flag[k]);
						break;
					}
				}
			}
		} else {
			for (var k=1; k<userF.name.length; k++) {
				if (userF.czaslotny[k]==100) continue;
				for (var j=1; j<=czasylotne.czas.length; j++) {
					if (j==czasylotne.czas.length) {
						czasylotne.czas.push(userF.czaslotny[k]);
						czasylotne.gracz.push(userF.name[k]);
						czasylotne.flag.push(userF.flag[k]);
						break;
					}
					else if (userF.czaslotny[k] < czasylotne.czas[j]) {
						czasylotne.czas.splice(j,0,userF.czaslotny[k]);
						czasylotne.gracz.splice(j,0,userF.name[k]);
						czasylotne.flag.splice(j,0,userF.flag[k]);
						break;
					}
				}
			}
		}
		//console.log(czasylotne, czasyzmiejsca);
		if (x%2==1 && czasyzmiejsca.gracz.length<2) {
			return kanal.send('Nobody made a lap yet. Update every 10 minutes');
		} else if (x%2==0 && czasylotne.gracz.length<2) {
			return kanal.send('Nobody made a lap yet. Update every 10 minutes');
		}
		if (x%2==0) canvas = createCanvas(1200, 170+40*czasylotne.czas.length);
		else canvas = createCanvas(1200, 170+40*czasyzmiejsca.czas.length);
		ctx = canvas.getContext('2d');
	
		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#15151d";
		ctx.fill();
		
		ctx.drawImage(x>2 ? logof2 : logof1,10,10,80,50);
		ctx.drawImage(x>2 ? krajf2 : krajf1,1120,10,60,50);
		
		ctx.font = '32px Formula1 Display-Bold';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		ctx.fillText('Practice session', 100, 50);
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.font = '32px Formula1 Display-Regular';
		ctx.textAlign = "right";
		ctx.fillText(x>2 ? torf2 : torf1, 1080, 50);
		
		ctx.beginPath();
		ctx.rect(0, 75, canvas.width, 1);
		ctx.fillStyle = "#808080";
		ctx.fill();
		
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.textAlign = "center";
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillText('Laps', 1000, 113);
		ctx.textAlign = "left";
	}
	
	var j=1;
	
	ctx.fillStyle = "#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(30, 85+40*i);
	ctx.lineTo(65, 85+40*i);
	ctx.lineTo(65, 110+40*i);
	
	ctx.arc(55, 110+40*i, 10, 0, Math.PI/180*90);
	
	ctx.moveTo(55, 120+40*i);
	ctx.lineTo(30, 120+40*i);
	ctx.lineTo(30, 85+40*i);
	ctx.fill();
	
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.font = '26px Formula1 Display-Bold';
	ctx.fillText(""+i, 47, 113 + 40*i);
	/*
	ctx.beginPath();
	ctx.fillStyle = kolory[c7.teamy[czasy.gracz[i]]];
	ctx.rect(80, 90+40*i, 6, 25);
	ctx.fill();
	*/
	ctx.textAlign = "left";
	ctx.beginPath();
	ctx.font = '30px Formula1 Display-Bold';
	if ((x%2==0 && czasylotne.gracz[i] != undefined && czasylotne.gracz[i].length>14) || (czasyzmiejsca.gracz[i] != undefined && czasyzmiejsca.gracz[i].length>14)) ctx.font = '26px Formula1 Display-Bold';
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText((x%2==0 ? czasylotne.gracz[i] : czasyzmiejsca.gracz[i]), 140, 113+40*i-(ctx.font.startsWith('26') ? 2 : 0));
	ctx.font = '30px Formula1 Display-Regular';
	ctx.fillText((x%2==0 ? czasylotne.czas[i].toFixed(3) : czasyzmiejsca.czas[i].toFixed(3)), 490, 113+40*i); //TODO teamy
	ctx.textAlign = "center";
	ctx.fillText((x%2==0 ? userF.lapslotny[userF.name.indexOf(czasylotne.gracz[i])] : userF.lapszmiejsca[userF.name.indexOf(czasyzmiejsca.gracz[i])]), 1000, 113+40*i);
	ctx.textAlign = "left";
	if (i>1) ctx.fillText((x%2==0 ? "+"+((czasylotne.czas[i].toFixed(3))-(czasylotne.czas[1].toFixed(3))).toFixed(3) : "+"+((czasyzmiejsca.czas[i].toFixed(3))-(czasyzmiejsca.czas[1].toFixed(3))).toFixed(3)), 700, 113+40*i); 
	
	loadImage(getFlag(((x==1 || x==3) ? czasyzmiejsca.flag[i] : czasylotne.flag[i]))).then((image) => {
		ctx.drawImage(image,83,87+40*i,40,30);
		coTeraz(x, i+1, kanal);
		//if (talks>1 && i==czasy.gracz.length-1) czyjuz(canvas);
	});
}

function createPic(f1, i, talks, user, avek) {
	if (f1) {
		var czasyF = czasy;
		var tabF = tab;
	} else {
		var czasyF = czasyf2;
		var tabF = tabf2;
	}
	
	loaded = 0;
	miejsce = 82;
	var kolorex = "";
	
	wysokosc = 170+40*czasyF.gracz.length;
	dlugosc = 1200;
	mnoznik = 1/(wysokosc*dlugosc/200000);
	wysokosc1 = wysokosc * Math.sqrt(mnoznik);
	dlugosc1 = dlugosc * Math.sqrt(mnoznik);
	
	//console.log(wysokosc, wysokosc1, dlugosc, dlugosc1, mnoznik);
	
	
	if (i==1) {
		canvas = createCanvas(dlugosc1, wysokosc1);
		ctx = canvas.getContext('2d');
		//createSparkles(canvas);
		czyjuz(f1, canvas, user, avek);
	}
		
	//}
	
	
}
var pisz = true;

loadTimes = function(tab) {
	for (var j=1; j<tab.length; j++) {
		//console.log(tab[j].content);
		var argi = tab[j].content.split(';;');
		argi.shift();
		//console.log(argi);
		for (var i=1; i<=czasy.czas.length; i++) {
			if (i==czasy.czas.length) {
				czasy.czas.push(Number(argi[1]));
				czasy.gracz.push(Number(argi[0]));
				czasy.flag.push(argi[2]);
				break;
			}
			else if (Number(argi[1]) < czasy.czas[i]) {
				czasy.czas.splice(i,0,Number(argi[1]));
				czasy.gracz.splice(i,0,Number(argi[0]));
				czasy.flag.splice(i,0,argi[2]);
				break;
			}
		}
	}
	console.log('times loaded');
	console.log(czasy);
}

przetworz = function(f1, messages) {
	if (f1) {
		user = {
			name:["FalaBot"],
			czaszmiejsca:[0],
			czaslotny:[0],
			flag: ['pl'],
			lapszmiejsca: [0],
			lapslotny: [0]
		};
	} else {
		userf2 = {
			name:["FalaBot"],
			czaszmiejsca:[0],
			czaslotny:[0],
			flag: ['pl'],
			lapszmiejsca: [0],
			lapslotny: [0]
		};
	}
	var userF = userf2;
	if (f1) userF = user;
	for (var i=1; i<messages.length; i++) {
		//var a = messages[i].content;
		var a = messages[i];
		if (!a.startsWith('0') && !a.startsWith('1')) continue;
		const arg = a.split(';;');
		const gracz = arg[3];
		const x = userF.name.indexOf(gracz);
		if (userF.name.includes(gracz)) {
			if (arg[0]=='0') {
				if (userF.czaslotny[x] > Number(arg[1])) userF.czaslotny[x] = Number(arg[1]);
				userF.lapslotny[x]++;
			} else if (arg[0]=='1') {
				if (userF.czaszmiejsca[x] > Number(arg[1])) userF.czaszmiejsca[x] = Number(arg[1]);
				userF.lapszmiejsca[x]++;
			} else continue;
		} else {
			userF.name.push(gracz);
			userF.lapszmiejsca.push(0);
			userF.lapslotny.push(0);
			userF.flag.push(arg[2]);
			if (arg[0]=='0') {
				userF.czaslotny.push(Number(arg[1]));
				userF.lapslotny[userF.lapslotny.length-1]++;
				userF.czaszmiejsca.push(100);
			} else if (arg[0]=='1') {
				userF.czaszmiejsca.push(Number(arg[1]));
				userF.lapszmiejsca[userF.lapszmiejsca.length-1]++;
				userF.czaslotny.push(100);
			} else continue;
		}
	}
}
loadTimesTren = function(f1, id, messageId, x) {
	var channel = client.channels.get(kanal3tren);
	if (!f1) channel = client.channels.get(kanal3trenf2);
	var limits;
	if (x==undefined) limits = {/* limit: 100, */before: messageId, after: id};
	else limits = {/* limit: 100, */after: id, before: x};
	channel.fetchMessages(limits)
	  .then(messages => czyprzetworz(f1, messages.array(), id, messageId))
	  .catch(console.error);
}
czyprzetworz = function(f1, tab, id, messageId) {
	for (let z of tab) {
		doDodania.push(z);
		if (z.id==id) {
			console.log('NO STAŃ TU KURWA');
			przetworz(f1, doDodania);
			return;
		}
	}
	loadTimesTren(f1, id, tab[tab.length-1].id);
}
var doDodania=[];
awataruj = function(fetchedUser, f1, args) {
	//console.log('DUPA', fetchedUser.displayAvatarURL);
	//if (fetchedUser.displayAvatarURL.includes('.gif')) console.log('EEEEE ON MA GIFA');
	loadImage(fetchedUser == undefined ? client.users.get(c7.discord[35]).defaultAvatarURL : fetchedUser.displayAvatarURL).then((image) => {
		avatars[Number(args[0])] = image;
		//console.log(image.width, image.height);
		if (args[3]==undefined || args[3]==null) args[3] = ' ';
		loadImage(getFlag(args[2])).then((image) => {
			//console.log('tu3', czasy, czasyf2);
			if (f1) czasy.flag[czasy.gracz.indexOf(Number(args[0]))] = image;
			else czasyf2.flag[czasyf2.gracz.indexOf(Number(args[0]))] = image;
			//console.log('tu4', czasy);
			//console.log(czasyf2);
			if (pisz) editPic(f1);
			if (pisz) createPic(f1, 1, 2, Number(args[0]), args[3]);
		});
	})
	.catch(console.error)
}
var timer2 = 0, timer3;
var mess1, mess2;
client.on('message', message => {
    //console.log(message.content);
	if (message.channel.id==kanal3 || message.channel.id==kanal3f2) { //TODO zmienić na ten komunikacyjny kanał
		var f1 = false;
		if (message.channel.id==kanal3) f1 = true;
		const args = message.content.split(';;');
		const command = args.shift().toLowerCase();
		if (command === "konto") { //TODO dodawanie nowych kont
			c7.loginy.push(args[2]);
			c7.hasla.push(args[1]);
			c7.discord.push(args[0]);
			c7.teamy.push(0);
			message.channel.send("Dodałem");
			return;
		} else if (command === "pisz") {
			pisz = true;
			message.channel.send("No dobra");
		} else if (command === "niepisz") {
			pisz = false;
			message.channel.send("No dobra, nie piszę");
		} else if (command === "napisz") {
			//console.log('no napisz');
			firstMess(f1, 0);
			if (timer2 == 0) {
				timer2 = setInterval(function() {
					createPicTren(2, 1, kanalTrenF1);
				}, 600000);
				setTimeout(function() {
					timer3 = setInterval(function() {
						createPicTren(4, 1, kanalTrenF2);
					}, 600000);
				}, 180000);
			}
		} else if (command === "koniec") {
			clearInterval(timer2);
			clearInterval(timer3);
			firstMess(f1, 1);
		} else if (command === "load") {
			message.channel.fetchMessages({ limit: Number(args[0])+1 })
			  .then(messages => loadTimes(messages.array()))
			  .catch(console.error);
		} else if (command === "czas") {
			//console.log(Number(args[0]), Number(args[1]));
			var czasyF = czasy;
			if (message.channel.id == kanal3f2) czasyF = czasyf2;
			if ( (message.channel.id == kanal3 && !czasy.gracz.includes(Number(args[0]))) || (message.channel.id == kanal3f2 && !czasyf2.gracz.includes(Number(args[0]))) ) {
				var a = args;
				//console.log('tu1', czasy, czasyf2);
				for (var i=1; i<=czasyF.czas.length; i++) {
					if (i==czasyF.czas.length) {
						czasyF.czas.push(Number(a[1]));
						czasyF.gracz.push(Number(a[0]));
						czasyF.flag.push(a[2]);
						break;
					}
					else if (Number(a[1]) < czasyF.czas[i]) {
						czasyF.czas.splice(i,0,Number(a[1]));
						czasyF.gracz.splice(i,0,Number(a[0]));
						czasyF.flag.splice(i,0,a[2]);
						break;
					}
				}
				//console.log('tu2', czasy, czasyf2, czasyF);
				if (message.channel.id == kanal3) {
					czasy = czasyF;
					edytuj(true);
				} else {
					czasyf2 = czasyF;
					edytuj(false);
				}
			}
			client.fetchUser(c7.discord[Number(args[0])])
			.then(fetchedUser => awataruj(fetchedUser, f1, args))
			.catch(console.error)
		}
		else if (command === "delete") {
			var czasyF = czasyf2;
			if (f1) czasyF = czasy;
			const x = czasyF.gracz.indexOf(Number(args[0]));
			czasyF.gracz.splice(x, 1);
			czasyF.czas.splice(x, 1);
			czasyF.flag.splice(x, 1);
		}
	}  else if (message.channel.id==kanal3tren) {
		if (message.content.startsWith('0') || message.content.startsWith('1')) {
			const arg = message.content.split(';;');
			const gracz = arg[3];
			const x = user.name.indexOf(gracz);
			if (user.name.includes(gracz)) {
				if (arg[0]=='0') {
					if (user.czaslotny[x] > Number(arg[1])) user.czaslotny[x] = Number(arg[1]);
					user.lapslotny[x]++;
				} else if (arg[0]=='1') {
					if (user.czaszmiejsca[x] > Number(arg[1])) user.czaszmiejsca[x] = Number(arg[1]);
					user.lapszmiejsca[x]++;
				}
			} else {
				user.name.push(gracz);
				user.lapszmiejsca.push(0);
				user.lapslotny.push(0);
				user.flag.push(arg[2]);
				if (arg[0]=='0') {
					user.czaslotny.push(Number(arg[1]));
					user.lapslotny[user.lapslotny.length-1]++;
					user.czaszmiejsca.push(100);
				} else if (arg[0]=='1') {
					user.czaszmiejsca.push(Number(arg[1]));
					user.lapszmiejsca[user.lapszmiejsca.length-1]++;
					user.czaslotny.push(100);
				}
			}
		} else if (message.content.startsWith("f.load")) {
			doDodania = [];
			loadTimesTren(true, message.content.substring(7), message.id);
		}
	} else if (message.channel.id==kanal3trenf2) {
		if (message.content.startsWith('0') || message.content.startsWith('1')) {
			const arg = message.content.split(';;');
			const gracz = arg[3];
			const x = userf2.name.indexOf(gracz);
			if (userf2.name.includes(gracz)) {
				if (arg[0]=='0') {
					if (userf2.czaslotny[x] > Number(arg[1])) userf2.czaslotny[x] = Number(arg[1]);
					userf2.lapslotny[x]++;
				} else if (arg[0]=='1') {
					if (userf2.czaszmiejsca[x] > Number(arg[1])) userf2.czaszmiejsca[x] = Number(arg[1]);
					userf2.lapszmiejsca[x]++;
				}
			} else {
				userf2.name.push(gracz);
				userf2.lapszmiejsca.push(0);
				userf2.lapslotny.push(0);
				userf2.flag.push(arg[2]);
				if (arg[0]=='0') {
					userf2.czaslotny.push(Number(arg[1]));
					userf2.lapslotny[userf2.lapslotny.length-1]++;
					userf2.czaszmiejsca.push(100);
				} else if (arg[0]=='1') {
					userf2.czaszmiejsca.push(Number(arg[1]));
					userf2.lapszmiejsca[userf2.lapszmiejsca.length-1]++;
					userf2.czaslotny.push(100);
				}
			}
			//console.log(user);
		} else if (message.content.startsWith("f.load")) {
			doDodania = [];
			loadTimesTren(false, message.content.substring(7), message.id);
		}
	} else if (message.channel.id==kanalKonta && !message.author.bot) {
		zarzadzanieKontem(message);
	} else if (message.channel.id==kanalKontaT && !message.author.bot) {
		stworzenieTeamu(message);
	} else if (message.channel.id==kanalZmiany && message.author.bot) {
		zmianyKont([message], false);
	} else if (message.channel.id=='895306433707507742' && message.author.bot) {
		mess1 = message;
		setTimeout(function() {
			mess1.delete();
		}, 590000);
	} else if (message.channel.id=='895306720404992011' && message.author.bot) {
		mess2 = message;
		setTimeout(function() {
			mess2.delete();
		}, 590000);
	} else if (message.channel.id==='548894456481316874' && message.author.bot) {
		var args, numer, nazwa;
		args = message.content.split('+|+');
		numer = args[0]+".hbr2";
		nazwa = args[1]+" Q "+torf1+".hbr2";
		if (args[0] == 'race') {
			nazwa = args[1];
			numer = args[1];
		}
		var channel = client.channels.get('548898611912638465');
		channel.send({
		  files: [{
			attachment: numer,
			name: nazwa
		  }]
		})
		  .then(console.log('nagranko'))
		  .catch(console.error);
	} else if (message.channel.id==='730067756279398401' && message.author.bot) {
		var args, numer, nazwa;
		args = message.content.split('+|+');
		numer = args[0]+" f2.hbr2";
		nazwa = args[1]+" Q "+torf2+" f2.hbr2";
		var channel = client.channels.get('548898611912638465');
		channel.send({
		  files: [{
			attachment: numer,
			name: nazwa
		  }]
		})
		  .then(console.log('nagranko'))
		  .catch(console.error);
	} else if (message.channel.id=='754064433470505091' && ['kwalef1','kwalef2','treningf1','treningf2','race','start'].includes(message.content.split(' ')[0])) {
		uruchomBota1();
	} else if (!message.author.bot && message.channel.id=='754040001913815110' && ['kwalef1','kwalef2','treningf1','treningf2','race','start'].includes(message.content.split(' ')[0])) {
		open('https://www.haxball.com/headless', {app: 'firefox'});
	} else if (message.channel.id==='731232655223423018' && !message.author.bot) {
		//console.log(stan, 'powinno dzialac');
		if (stan == 0) {
			schedule.name = message.content;
			stan = 1;
			message.channel.send("Podaj datę nowego wydarzenia w formacie DD.MM.RRRR GG:MM, np.: 19.01.2021 21:30");
			return;
		} else if (stan == 1) {
			a = function(x,y) {return Number(message.content.substr(x,y))}
			godzina = Number(message.content.substr(11,2)) - 1;
			dzien = Number(message.content.substr(0,2))
			if (godzina < 0) {
				godzina = 24+godzina;
				dzien--;
			}
			schedule.date = new Date(a(6,4), a(3,2)-1, dzien, godzina, a(14,2));
			if (isValidDate(schedule.date)==false) return message.channel.send("Błędna data, podaj prawidłową");
			stan = 2;
			message.channel.send("Podaj numer koloru wydarzenia ( 0-czerwony, 1-zielony, 2-niebieski, 3-żółty, 4-biały )");
			return;
		} else if (stan == 2) {
			switch (Number(message.content)) {
				case 0:
					kolor = "RED";
					break;
				case 1:
					kolor = "GREEN";
					break;
				case 2:
					kolor = "BLUE";
					break;
				case 3:
					kolor = "GOLD";
					break;
				case 4:
					kolor = "LIGHT_GREY";
					break;
				default:
					kolor = "LIGHT_GREY"
			}
			var msg = new Discord.RichEmbed()
				.setTitle(schedule.name)
				.setColor(kolor)
				.setTimestamp(schedule.date.toISOString())
			var channel = client.channels.get("618492728954716170");
			channel.send(msg);
			message.channel.send("Stworzono. Żeby stworzyć nowe, podaj nazwę wydarzenia: ");
			stan = 0;
			return;
		}
		return;
	} else if (['858938435552149534','858942309596004393'].includes(message.channel.id) && !message.author.bot) {
		if (message.content == 'ok') {
			//zatwierdzenie wyników
			message.channel.send('Wyniki zatwierdzone')
			var channel = client.channels.get('858986971417018368');
			if (message.channel.id == '858938435552149534') {
				channel.send(wynikif1.toString());
				wynikiWyscigu(wynikif1, true, 1);
			} else if (message.channel.id == '858942309596004393') {
				channel.send(wynikif2.toString());
				wynikiWyscigu(wynikif2, false, 1);
			}
		} else {
			var a = Number(message.content.split(' ')[0]);
			if (a>=1 && a<100) {
				//dodaj ten wynik do własnej tabeli
				if (c7.loginy.includes(message.content.substring(a.toString().length+1))) {
					if (message.channel.id == '858938435552149534') wynikif1[a] = c7.loginy.lastIndexOf(message.content.substring(a.toString().length+1));
					else if (message.channel.id == '858942309596004393') wynikif2[a] = c7.loginy.lastIndexOf(message.content.substring(a.toString().length+1));
					message.channel.send('Dodałem');
					/*if (a == 1) {
						var channel = client.channels.get('802516336009674822');
						channel.fetchMessages({ after: '850116794563821639'})
						.then(messages => wczytanieFlag(messages.array()))
						.catch(console.error);
					}*/
				} else message.channel.send('Podany nick nie znajduje się w bazie kont');
			} else return message.channel.send('Niewłaściwa liczba');
		}
	} else if (message.channel.id == '802516336009674822') {
		playerFlag[c7.loginy.lastIndexOf(message.content.split(' ;; ')[0])] = message.content.split(' ;; ')[1];
	} else if (['.fp1', '.fp2'].includes(message.content)) {
		//createPicTren(2*Number(message.content.substring(3)), 1, message.channel);
		//console.log(czasyzmiejsca);
		if (message.content == '.fp1') message.channel.send('<#895306433707507742>');
		else message.channel.send('<#895306720404992011>');
	} else if (message.channel.type == 'dm' && message.content.startsWith("f.password")) {
		//console.log(message.channel);
		if (zmienilihaslo.includes(message.author.id)) return message.author.send("Błąd - zmieniałeś już swoje hasło.\nFailed - you've already changed your password");
		var args = message.content.split(' ');
		if (args[1] == undefined) return message.author.send('Password can\'t be empty. Type `f.password <new_password>');
		else if (args[1].includes(';;')) return message.author.send('Forbidden string in password. Please try again');
		if (c7.discord.includes(message.author.id)) {
			zmienilihaslo.push(message.author.id);
			c7.hasla[c7.discord.lastIndexOf(message.author.id)]=args[1];
			message.author.send("Twoje nowe hasło: **"+args[1]+"**\nYour new password: **"+args[1]+"**");
			var kanale = client.channels.get('549207996819832842');
			kanale.send('password;;'+c7.discord.lastIndexOf(message.author.id)+";;"+args[1]);
		} else message.author.send("Twoje konto nie jest zarejestrowane.\nYour account is not registered");
	} else if ( ['802515445592227860', '802516242174050314', '802516336009674822'].includes(message.channel.id) ) {
		var a = message.content.split(' ');
		if (message.channel.id == '802516336009674822') {
			var bName = a[0];
			var bAuth = a[4];
			var bConn = a[5];
		} else {
			var bAuth = a[a.length-2];
			var bConn = a[a.length-1];
			var bName = message.content.substring(0, message.content.length - a[a.length-1].length - a[a.length-2].length - a[a.length-3].length - 3);;
		}
		var msg1 = '⚠️ Możliwe multikonto: przejazd gracza **'+bName+'**. Auth takie samo jak: ';
		var msg2 = '⚠️ Możliwe multikonto: przejazd gracza **'+bName+'**. Conn takie samo jak: ';
		for (var i=0; i<multikonta.auth.length; i++) {
			if (multikonta.auth[i] == bAuth) {
				if (multikonta.name[i] != bName) {
					var c = new Date(multikonta.date[i]);
					msg1 = msg1 + '\n •' + multikonta.name[i] + ' z dnia '+c.toLocaleDateString('pl-PL')+' '+c.getHours()+':'+c.getMinutes();
				}
			}
			if (multikonta.conn[i] == bConn) {
				if (multikonta.name[i] != bName) {
					var c = new Date(multikonta.date[i]);
					msg2 = msg2 + '\n •' + multikonta.name[i] + ' z dnia '+c.toLocaleDateString('pl-PL')+' '+c.getHours()+':'+c.getMinutes();
				}
			}
		}
		var channel = client.channels.get('900354055031910420');
		if (!msg1.endsWith('samo jak: ')) channel.send(msg1);
		if (!msg2.endsWith('samo jak: ')) channel.send(msg2);
		multikonta.auth.push(bAuth);
		multikonta.conn.push(bConn);
		multikonta.name.push(bName);
		multikonta.date.push(message.createdTimestamp);
	} else if (message.channel.id == '905014654261166110' && !message.author.bot) {
		client.fetchUser(message.content)
		.then(fetchedUser => czyIstniejeAvatar(fetchedUser.displayAvatarURL))
		.catch(console.error)
	} else if (message.channel.id == standingsCreatorChannel) {
		if (message.author.bot) return;
		
		// JEŚLI JEST COŚ POMIEDZY ':  :' TO WYCHWYĆ I ZASTĄP EMOTKĄ
		var msgAAA = message.content;
		
		if (msgAAA.includes(' : ')) {
			var a = msgAAA.split(' : ');
			for (var i=0; i<a.length; i++) {
				if (i==0 || i%2==0) continue;
				var b = client.emojis.find(emoji => emoji.name == a[i]);
				if (b == null) continue;
				a[i] = b;
			}
			msgAAA = a.join(' ');
		}
		
		if (msgAAA.includes('flag_')) {
			// dodaj flagę w odpowiednim miejscu, na podstawie aktualnego etapu
			// a może emoji zamiast obrazka
			if (standingsCreator.etap == 0) {
				
			}
		}
		if (msgAAA == 'new') {
			standingsCreator = {
				etap: 0,
				tytul: '',
				ktoreLogo: '',
				tekstPrawyGorny: '',
				naglowek: [],
				czyPodswietloneWiersze: false,
				wiersze: [],
				columnCords: [ 
					[80, 'left'],
					[200, 'left'],
					[900, 'left'],
					[1120, 'left']
				],
				dolaczFlage: false,
				dolaczTeam: false
			}
			return message.channel.send('Stworzono nowy projekt. Wpisz tytuł tabeli: ');
		} else if (msgAAA.startsWith('setColumnCord')) {
			var args = msgAAA.split(' ');
			message.channel.send('Ustawiono nową pozycję kolumny nr '+args[1]);
			standingsCreator.columnCords[Number(args[1])][0] = Number(args[2]);
		} else if (msgAAA.startsWith('setColumnAlign')) {
			var args = msgAAA.split(' ');
			if (['left','center','right'].includes(args[2])) {
				standingsCreator.columnCords[Number(args[1])][1] = args[2];
				message.channel.send('Poprawnie ustawiono align');
			} else message.channel.send('Błąd - możesz wpisać tylko left, center, right');
		} else if (standingsCreator.etap == 0) {
			standingsCreator.tytul = msgAAA;
			message.channel.send('Tytuł ustawiony. Wpisz tekst w prawym górnym rogu: ');
			standingsCreator.etap = 1;
		} else if (standingsCreator.etap == 1) {
			standingsCreator.tekstPrawyGorny = msgAAA;
			message.channel.send('Tekst w prawym górnym rogu ustawiony. Wpisz nagłówki kolumn:');
			standingsCreator.etap = 2;
		} else if (standingsCreator.etap == 2) {
			standingsCreator.naglowek = msgAAA.split(';;');
			message.channel.send('Nagłówki ustawione. Teraz wpisz wiersze tabeli. Po wpisaniu ostatniego, wpisz komendę `stop`');
			standingsCreator.etap = 3;
		} else if (standingsCreator.etap == 3) {
			if (msgAAA.toLowerCase() == 'stop') {
				message.channel.send('Wiersze ustawione. Teraz wybierz dodatkowe opcje, wpisując ich numer, oddzielając `;;`\n0 - logo haxracing, 1 - logo f1, 2 - logo f2, 3 - podświetlone wiersze, 4 - dołącz flagę gracza, 5 - dołącz logo teamu gracza');
				// ale dopisz te opcje
				standingsCreator.etap = 4;
			} else {
				var msg = msgAAA.split(';;');
				standingsCreator.wiersze[Number(msg[0])] = msg;
				console.log(msgAAA);
				message.channel.send('Wiersz dodany. Wpisz kolejny, lub użyj komendy `stop`');
			}
		} else if (standingsCreator.etap == 4) {
			if (msgAAA.toLowerCase() == 'stop') {
				// nic w sumie
			} else {
				var wybraneOpcje = msgAAA.split(';;');
				if (wybraneOpcje.includes('0')) {
					standingsCreator.ktoreLogo = 'haxracing';
				} else if (wybraneOpcje.includes('1')) {
					standingsCreator.ktoreLogo = 'f1';
				} else if (wybraneOpcje.includes('2')) {
					standingsCreator.ktoreLogo = 'f2';
				}
				if (wybraneOpcje.includes('3')) {
					standingsCreator.czyPodswietloneWiersze = true;
				}
				if (wybraneOpcje.includes('4')) {
					standingsCreator.dolaczFlage = true;
				}
				if (wybraneOpcje.includes('5')) {
					standingsCreator.dolaczTeam = true;
				}
			}
			// kończ i wysyłaj obrazek
			standingsCreating(0);
		}
	}
});

var standingsCanvas = '';

function standingsCreating(etap, wiersz) {
	if (etap == 0) {
		
		
		// NIE RÓB CANVASA ZAWSZE GDY JEST ETAP 0, NIECH TWORZY NOWY TYLKO PRZY KOMENDZIE NEW
		// ŻEBY MOŻNA BYŁO EDYTOWAĆ POPRZEDNI OBRAZEK JUZ PO WYSŁANIU
		
		// plus niech są komendy do wracania do odpowiednich etapów
		// i komendy do zmieniania położenia kolumn
		
		//zrób canvasa i wstaw tytuł
		standingsCanvas = createCanvas(1200, 170+40*standingsCreator.wiersze.length);
		
		var ctx = standingsCanvas.getContext('2d');

		ctx.beginPath();
		ctx.rect(0, 0, standingsCanvas.width, standingsCanvas.height);
		ctx.fillStyle = "#15151d";
		ctx.fill();
		
		ctx.font = '32px Formula1 Display-Bold';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		ctx.fillText(standingsCreator.tytul, 150, 50);
		
		if (standingsCreator.ktoreLogo == 'haxracing') {
			loadImage('https://skokihaxball.000webhostapp.com/baza/logo.jpg').then((image) => {
				ctx.drawImage(image,10,10,80,60);
			});
		} else if (standingsCreator.ktoreLogo == 'f1') {
			ctx.drawImage(logof1,10,10,80,60);
		} else if (standingsCreator.ktoreLogo == 'f2') {
			ctx.drawImage(logof2,10,10,80,60);
		}
		
		standingsCreating(1);
	} else if (etap == 1) {
		var ctx = standingsCanvas.getContext('2d');
		ctx.beginPath();
		ctx.textAlign = "right";
		ctx.fillStyle = "#FFFFFF";
		ctx.font = '16px Formula1 Display-Bold';
		ctx.fillText(standingsCreator.tekstPrawyGorny, 1150, 35);
		ctx.fillStyle = "#383845";
		ctx.fillRect(0, 75, standingsCanvas.width, 2);
		standingsCreating(2);
	} else if (etap == 2) {
		// wypisz nagłówki
		var ctx = standingsCanvas.getContext('2d');
		ctx.beginPath();
		for (var i=0; i<standingsCreator.naglowek.length; i++) {
			ctx.textAlign = standingsCreator.columnCords[i][1];
			ctx.fillStyle = "#FFFFFF";
			ctx.font = '16px Formula1 Display-Bold';
			ctx.fillText(standingsCreator.naglowek[i], standingsCreator.columnCords[i][0], 105);
		}
		standingsCreating(3,1);
	} else if (etap == 3) {
		if (standingsCreator.czyPodswietloneWiersze) {
			// dej prostokąt jak w testach
			var ctx = standingsCanvas.getContext('2d');
			ctx.beginPath();
			ctx.fillStyle = "#383845"; // kolor na taki jak w testach
			ctx.fillRect(0, 85+40*wiersz, standingsCanvas.width, 35);
		}
		// napisz wiersz (zmienna "wiersz")
		var ctx = standingsCanvas.getContext('2d');
		ctx.beginPath();
		//console.log(wiersz, standingsCreator.wiersze);
		for (var i=0; i<standingsCreator.wiersze[wiersz].length; i++) {
			if (i==0) {
				ctx.fillStyle = "#FFFFFF";
				ctx.beginPath();
				ctx.moveTo(30, 85+40*wiersz);
				ctx.lineTo(65, 85+40*wiersz);
				ctx.lineTo(65, 110+40*wiersz);
				
				ctx.arc(55, 110+40*wiersz, 10, 0, Math.PI/180*90);
				
				ctx.moveTo(55, 120+40*wiersz);
				ctx.lineTo(30, 120+40*wiersz);
				ctx.lineTo(30, 85+40*wiersz);
				ctx.fill();
				
				ctx.textAlign = "center";
				ctx.fillStyle = "#000000";
				ctx.font = '26px Formula1 Display-Bold';
				ctx.fillText(""+wiersz, 47, 113 + 40*wiersz);
			} else {
				ctx.textAlign = standingsCreator.columnCords[i][1];
				ctx.fillStyle = "#FFFFFF";
				ctx.font = '20px Formula1 Display-Regular';
				if (i == 1) ctx.font = '20px Formula1 Display-Bold';
				ctx.fillText(standingsCreator.wiersze[wiersz][i], standingsCreator.columnCords[i][0], 108+40*wiersz);
			}
		}
		if (wiersz == standingsCreator.wiersze.length-1) {
			// przejdź dalej (czyli chyba już koniec)
			setTimeout(function() {
				var obraz = standingsCanvas.toDataURL("image/png");
				let base64Image = obraz.split(';base64,').pop();
				fs.writeFile('standingsCanvas.png', base64Image, {encoding: 'base64'}, function(err) {
					//console.log('File created');
				});
				m=1;
			}, 2000);
			setTimeout(function(){
				var channel = client.channels.get(standingsCreatorChannel);
				channel.send({
				  files: [{
					attachment: "standingsCanvas.png",
					name: "obrazek.png"
				  }]
				})
				  .catch(console.error);
			}, 4000);
		} else {
			standingsCreating(3, wiersz+1);
		}
	}
}

var standingsCreator = {
	etap: 0,
	tytul: '',
	ktoreLogo: '',
	tekstPrawyGorny: '',
	naglowek: [],
	czyPodswietloneWiersze: false,
	wiersze: [],
	columnCords: [ 
		[80, 'left'],
		[200, 'left'],
		[900, 'left'],
		[1120, 'left']
	]
}

function wczytanieFlag(messages) {
	for (var j=0; j<messages.length; j++) if (a.includes(c7.loginy.lastIndexOf(messages[j].content.split(' ;; ')[0]))) playerFlag[c7.loginy.lastIndexOf(messages[j].content.split(' ;; ')[0])] = messages[j].content.split(' ;; ')[1];
}

var msgFlagi = [];

function wynikiWyscigu(wyniki, f1, i) {
	wynikiWyscigu001('898272393632559155', 0, wyniki, f1, i);
}

function wynikiWyscigu001(after, before, wyniki, f1, i) {
	doDodania = [];
	var channel2 = client.channels.get('802516336009674822');
	if (before == 0) before = channel2.lastMessageID;
	channel2.fetchMessages({ before: before })
	  .then(messages2 => wynikiWyscigu002(messages2.array(), after, before, wyniki, f1, i))
	  .catch(console.error)
}

function wynikiWyscigu002(tab, after, before, wyniki, f1, i) {
	for (let z of tab) {
		//console.log(z.content);
		doDodania.push(z);
		if (z.id==after) {
			//console.log('NO STAŃ TU KURWA');
			var channel = client.channels.get('802516336009674822');
			channel.fetchMessages({ limit: 1 })
			  .then(messages => wynikiWyscigu003(messages.array(), wyniki, f1, i))
			  .catch(console.error)
			return;
		}
	}
	wynikiWyscigu001(after, tab[tab.length-1].id, wyniki, f1, i);
}
var doDodania=[];

function wynikiWyscigu003(messages, wyniki, f1, i) {
	doDodania.splice(0, 0, messages[0]);
	wynikiWyscigu1(doDodania, wyniki, f1, i);
}

function wynikiWyscigu1(messages, wyniki, f1, i) {
	var playerFlag2 = [];
	for (var j=messages.length-1; j>=0; j--) {
		msgFlagi[c7.loginy.lastIndexOf(messages[j].content.split(' ;; ')[0])] = messages[j].content.split(' ;; ')[1];
	}
	//console.log(playerFlag2)
	wynikiWyscigu2(wyniki, f1, i)
}

function wynikiWyscigu2(wyniki, f1, i) {
	// tutej
	if (i == 1) {
		canvas = createCanvas(1200, 170+40*wyniki.length);
		ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#15151d";
		ctx.fill();
		
		ctx.drawImage(f1 == false ? logof2 : logof1,10,10,80,50);
		ctx.drawImage(f1 == false ? krajf2 : krajf1,1120,10,60,50);
		
		ctx.font = '32px Formula1 Display-Bold';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		ctx.fillText('RACE RESULTS', 100, 50);
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.font = '32px Formula1 Display-Regular';
		ctx.textAlign = "right";
		ctx.fillText(f1 == false ? torf2 : torf1, 1080, 50);
		
		ctx.beginPath();
		ctx.rect(0, 75, canvas.width, 1);
		ctx.fillStyle = "#808080";
		ctx.fill();
		
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.textAlign = "center";
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillText('Best lap', 1100, 113);
		ctx.textAlign = "left";
	}
	
	ctx.fillStyle = "#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(30, 85+40*i);
	ctx.lineTo(65, 85+40*i);
	ctx.lineTo(65, 110+40*i);
	
	ctx.arc(55, 110+40*i, 10, 0, Math.PI/180*90);
	
	ctx.moveTo(55, 120+40*i);
	ctx.lineTo(30, 120+40*i);
	ctx.lineTo(30, 85+40*i);
	ctx.fill();
	
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.font = '26px Formula1 Display-Bold';
	ctx.fillText(""+i, 47, 113 + 40*i);
	/*
	ctx.beginPath();
	ctx.fillStyle = kolory[c7.teamy[czasy.gracz[i]]];
	ctx.rect(80, 90+40*i, 6, 25);
	ctx.fill();
	*/
	ctx.textAlign = "left";
	ctx.beginPath();
	ctx.font = '30px Formula1 Display-Bold';
	if (c7.loginy[wyniki[i]].length>14) ctx.font = '26px Formula1 Display-Bold';
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(c7.loginy[wyniki[i]], 140, 113+40*i-(ctx.font.startsWith('26') ? 2 : 0));
	ctx.font = '30px Formula1 Display-Regular';
	ctx.fillText(teamy[c7.teamy[wyniki[i]]].name, 450, 113+40*i);
	ctx.fillText((i<11 ? ''+punktacja[i]+' pts' : ''), 900, 113+40*i);
	ctx.drawImage(teamImage[c7.teamy[wyniki[i]]], 400, 83+40*i, 30, 30);
	ctx.textAlign = "center";
	//ctx.fillText('BEST LAP', 1100, 113+40*i);
	
	//wykrywanie flagi z kanału race ip
	var a = 'pl';
	if (msgFlagi[wyniki[i]] != undefined) a = msgFlagi[wyniki[i]];
	loadImage(getFlag(a)).then((image) => {
		ctx.drawImage(image,83,87+40*i,40,30);
		if (i+1 < wyniki.length) wynikiWyscigu(wyniki, f1, i+1);
		else {
			var obraz = canvas.toDataURL("image/png");
			let base64Image = obraz.split(';base64,').pop();
			fs.writeFile('results.png', base64Image, {encoding: 'base64'}, function(err) {
				//console.log('File created');
			});
			setTimeout(function(){
				var channel2 = client.channels.get('858986971417018368');
				var channel = client.channels.get(f1 ? kanalResults : kanalResultsF2);
				channel2.fetchMessages({ after: wyscigi1msg })
				.then(messages => generalka(messages.array(), f1))
				.catch(console.error);
				channel.send({
				  files: [{
					attachment: "results.png",
					name: "obrazek.png"
				  }]
				})
				  .catch(console.error);
			}, 2000);
		}
	});
}

function generalka(messages, f1) {
	var generalna = [], punkty = [], b = [];
	for (var i=0; i<messages.length; i++) {
		//console.log(messages[i].content);
		var a = messages[i].content.split(',');
		for (var j=1; j<a.length; j++) {
			var c = Number(a[j]);
			if (punkty[c] == undefined) punkty[c] = punktacja[j];
			else punkty[c] += punktacja[j];
			if (j==10) break;
		}
	}
	for (var i=0; i<punkty.length; i++) {
		if (punkty[i] == undefined) continue;
		if (generalna.length == 0) generalna.push([i,punkty[i]]);
		else {
			for (var j=0; j<generalna.length; j++) {
				if (punkty[i] > generalna[j][1]) {
					generalna.splice(j, 0, [i, punkty[i]]);
					break;
				}
				if (j == generalna.length-1) {
					generalna.push([i, punkty[i]]);
					break;
				}
			}
		}
	}
	var channel = client.channels.get('802516336009674822');
	channel.fetchMessages({ after: '850116794563821639'})
	.then(messages2 => generalka2(f1, 1, generalna, messages.length, messages2.array()))
	.catch(console.error);
}

function generalka2(f1, i, generalna, races, messages) {
	// e
	if (i == 1) {
		var a = [];
		for (var j=0; j<generalna.length; j++) a.push(generalna[j][0]);
		for (var j=0; j<messages.length; j++) {
			if (a.includes(c7.loginy.lastIndexOf(messages[j].content.split(' ;; ')[0]))) playerFlag[c7.loginy.lastIndexOf(messages[j].content.split(' ;; ')[0])] = messages[j].content.split(' ;; ')[1];
		}
		canvas = createCanvas(1200, 170+50*generalna.length);
		ctx = canvas.getContext('2d');

		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "#15151d";
		ctx.fill();
		
		ctx.drawImage(f1 == false ? logof2 : logof1,10,10,80,50);
		
		ctx.font = '32px Formula1 Display-Bold';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		ctx.fillText('DRIVER STANDINGS', 100, 50);
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.font = '32px Formula1 Display-Regular';
		ctx.textAlign = "right";
		ctx.fillText(''+races+'/'+iloscWyscigow+' races', 1080, 50);
		
		ctx.beginPath();
		ctx.rect(0, 75, canvas.width, 1);
		ctx.fillStyle = "#808080";
		ctx.fill();
		
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillStyle = "#FFFFFF";
		ctx.textAlign = "left";
		
		ctx.textAlign = "center";
		ctx.font = '24px Formula1 Display-Regular';
		ctx.fillText('POINTS', 1100, 113);
		ctx.textAlign = "left";
	}
	
	ctx.fillStyle = '#212129';
	ctx.beginPath();
	ctx.moveTo(15, 80+50*i);
	ctx.lineTo(1150, 80+50*i);
	ctx.lineTo(1150, 110+50*i);
	ctx.arc(1135, 110+50*i, 15, 0, Math.PI/180*90);
	ctx.moveTo(1135, 125+50*i);
	ctx.lineTo(15, 125+50*i);
	ctx.lineTo(15, 80+50*i);
	ctx.fill();
	
	ctx.fillStyle = "#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(30, 85+50*i);
	ctx.lineTo(65, 85+50*i);
	ctx.lineTo(65, 110+50*i);
	
	ctx.arc(55, 110+50*i, 10, 0, Math.PI/180*90);
	
	ctx.moveTo(55, 120+50*i);
	ctx.lineTo(30, 120+50*i);
	ctx.lineTo(30, 85+50*i);
	ctx.fill();
	
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.font = '26px Formula1 Display-Bold';
	ctx.fillText(""+i, 47, 113 + 50*i);
	/*
	ctx.beginPath();
	ctx.fillStyle = kolory[c7.teamy[czasy.gracz[i]]];
	ctx.rect(80, 90+40*i, 6, 25);
	ctx.fill();
	*/
	ctx.textAlign = "left";
	ctx.beginPath();
	ctx.font = '30px Formula1 Display-Bold';
	if (c7.loginy[generalna[i-1][0]].length>14) ctx.font = '26px Formula1 Display-Bold';
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(c7.loginy[generalna[i-1][0]], 140, 113+50*i-(ctx.font.startsWith('26') ? 2 : 0));
	ctx.font = '30px Formula1 Display-Regular';
	ctx.fillText(teamy[c7.teamy[generalna[i-1][0]]].name, 450, 113+50*i);
	ctx.drawImage(teamImage[c7.teamy[generalna[i-1][0]]], 400, 83+50*i, 30, 30);
	ctx.textAlign = "center";
	ctx.fillText(''+generalna[i-1][1], 1100, 113+50*i);
	
	//wykrywanie flagi z kanału race ip
	var a = 'pl';
	if (msgFlagi[generalna[i-1][0]] != undefined) a = msgFlagi[generalna[i-1][0]];
	loadImage(getFlag(a)).then((image) => {
		ctx.drawImage(image,83,87+50*i,40,30);
		if (i < generalna.length) generalka2(f1, i+1, generalna, races);
		else {
			var obraz = canvas.toDataURL("image/png");
			let base64Image = obraz.split(';base64,').pop();
			fs.writeFile('driverStandings.png', base64Image, {encoding: 'base64'}, function(err) {
				//console.log('File created');
			});
			setTimeout(function(){
				var channel = client.channels.get(f1 ? kanalGeneralka : kanalGeneralkaF2);
				channel.send({
				  files: [{
					attachment: "driverStandings.png",
					name: "obrazek.png"
				  }]
				})
				  .catch(console.error);
			}, 2000);
		}
	});
}

var wynikif1 = [0], klasyfikacjaf1 = [];
var wynikif2 = [0], klasyfikacjaf2 = [];
const punktacja = [0,25,18,15,12,10,8,6,4,2,1];
var playerFlag = [];

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}