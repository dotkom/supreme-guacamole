import arrkomIcon from 'assets/images/arrkom-square.svg';
import bankomIcon from 'assets/images/bankom-square.svg';
import bedkomIcon from 'assets/images/bedkom-square.svg';
import dotkomIcon from 'assets/images/dotkom-square.svg';
import fagkomIcon from 'assets/images/fagkom-square.svg';
import prokomIcon from 'assets/images/prokom-square.svg';
import trikomIcon from 'assets/images/trikom-square.svg';

const committees = new Map([
  ['arrkom', {
    key: 'arrkom',
    name: "Arrkom",
    info: `Arrangementskomiteen jobber for at informatikkstudentene skal ha sosiale
    tilbud gjennom hele året. Vi arrangerer velkjente arrangement som
    immatrikuleringsball, blåtur, Åre-tur, kryssfest, filmkvelder og mye
    mer! Liker du at andre skal ha det kult? Er du en sosial og sprudlende
    person selv? Da er kanskje Arrangementskomitéen stedet for deg!`,
    id: 1,
    icon: arrkomIcon,
  }],
  ['bankom', {
    key: 'bankom',
    name: 'Bankom',
    info: `Bank- og økonomikomtiteen sørger for at det blir satt opp fornuftige budsjett
    og at de blir fulgt. Komiteen består av de økonmiansvarlige fra hver av de andre
    komiteene, en komiteeleder og en økonomiansvarlig for Online/Hovedstyret. Vi setter
    hvert år opp budsjett og fører månedlige regnskap. Ukentlige arbeidsoppgaver som
    fakturering og betaling av regninger hører også med i et verv i bankom. Er du
    interessert i økonomi, regnskap, kontroll og gode rutiner vil vi gjerne at du informerer
    oss om at du er interessert i et tilleggsverv som økonomiansvarlig!`,
    icon: bankomIcon,
    disableSelect: true,
  }],
  ['bedkom', {
    key: 'bedkom',
    name: "Bedkom",
    info: `Bedriftskomiteen er bindeleddet mellom næringslivet og informatikkstudenter,
    og skal i tillegg samarbeide med andre linjeforeninger på NTNU for å ivareta informatikkstudentenes interesser.
    Som medlem vil du ha flere oppgaver, blant annet, å planlegge og arrangere bedriftspresentasjoner, legge ut annonser på våre nettsider, mm. 
    Gjennom bedriftskomiteen vil du opprette en tidlig og god kontakt med næringslivet
    og potensielle arbeidsgivere under studietiden, samtidig som du får et
    innblikk i hvordan bedrifter rekrutterer studenter.`,
    id: 3,
    icon: bedkomIcon,
  }],
  ['dotkom', {
    key: 'dotkom',
    name: "Dotkom",
    info: `Drifts- og utviklingskomiteen har ansvaret for alle linjeforeningens
    datasystemer. Vi leverer tjenester som nettside, wiki,
    e-postsystemer, filområder og mye annet spennende. I en stor
    linjeforening er informasjonsflyt og kvalitet viktig. Drifts- og
    utviklingskomiteen prøver hele tiden å lage smarte løsninger som
    holder en høy standard, slik som i en bedrift. Er du interessert i
    programmering, drifting eller teknologi generelt? Vi kan tilby et
    unikt verv i en meget sosial gjeng som driver med IT på høyt nivå.
    Ingen forkunnskaper er påkrevd annet enn stor lærevilje!`,
    id: 4,
    icon: dotkomIcon,
  }],
  ['fagkom', {
    key: "fagkom",
    name: "Fagkom",
    info: `Fag- og kurskomiteen tilbyr kunnskap om ny og spennende teknologi,
    gjennom blant annet kurs og foredrag. Vår jobb er å stimulere
    studentenes faglige interesser. Vi oppsøker kompetansen i
    næringslivet, og samarbeider tett med bedriftskomiteen for å komme i
    kontakt med de aktuelle bedriftene. Som medlem av Fag- og kurskomiteen
    vil du få god innsikt i emner utenfor skolen, og samtidig knytte
    tettere bånd til din fremtidige arbeidsgiver.`,
    id: 6,
    icon: fagkomIcon,
  }],
  ['prokom', {
    key: "prokom",
    name: "Prokom",
    info: `Profil- og aviskomiteen sørger for at Onlines ansikt utad er
    profesjonelt og konsistent. Alt profileringsmateriale som klær,
    annonser, brev og brosjyrer, plakater, medaljer og andre effekter
    lages av oss. Vi har også en redaksjon som er ansvarlig for
    linjeforeningens tidsskrift, Offline. Har du en designerspire eller en
    skribent i magen? Vi leter etter deg som er interessert i design,
    markedsføring, journalisme eller skriving!`,
    id: 7,
    icon: prokomIcon,
  }],
  ['trikom', {
    key: "trikom",
    name: "Trikom",
    info: `Trivselskomiteen har ansvaret for trivsel blant informatikkstudentene.
    Dette inkluderer å arrangere flere små arrangementer og hyggelige sammenkomster i løpet av året, og drift av kontoret.
    Vi arrangerer frokoster og serievisninger på kontoret, teltturer, juleverksted og andre ting som skaper trivsel.
    Vi er også ansvarlig for drift av kontoret, som vil si å sette opp kontorvakter, møter, administrere tilganger og passe på at det er tilstrekkelig med mat, drikke, rekvisitter og lignende.
    Så hvis du har en gledesspreder i deg og liker å spre trivsel til dine medstudenter, er trikom komiteen for deg!`,
    id: 8,
    icon: trikomIcon,
  }],
]);

export default committees;
