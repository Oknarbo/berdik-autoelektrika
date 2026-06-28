// TODO: Replace mock response logic with real LLM API route + WhatsApp Business integration.

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
};

type FlowStage = "initial" | "followup" | "summary" | "general";

const followUpPatterns: Record<string, RegExp[]> = {
  ignition: [/ne\s*pali/i, /klik/i, /anlaser/i, /starter/i, /upal/i],
  charging: [/akumulator/i, /lampica/i, /alternator/i, /pun/i, /prazn/i],
  lock: [/zaklju/i, /daljinsk/i, /ključ/i, /kljuc/i, /centraln/i],
  lights: [/svjetl/i, /žmigavac/i, /zmigavac/i, /far/i, /rasvjet/i],
};

type FlowResponse = { first: string; followup: string };

const flowResponsesMap: Record<string, FlowResponse> = {
  ignition: {
    first: `Razumijem. To može biti povezano s akumulatorom, anlaserom ili napajanjem.

Da pripremim bolji upit za servis, napišite mi:
1. Koji auto i godište vozite?
2. Pale li se lampice na instrument tabli?
3. Je li akumulator nedavno mijenjan?
4. Čuje li se jedan klik ili brzo kliktanje?`,
    followup: `Hvala. Prema opisu, preporuka je termin za dijagnostiku paljenja/anlasera i provjeru napajanja.

Mogu pripremiti upit za servis s ovim podacima:
- vozilo
- simptomi
- hitnost
- kontakt broj

Želite li poslati upit za termin?`,
  },
  charging: {
    first: `Lampica akumulatora tijekom vožnje često znači problem s punjenjem, alternatorom ili instalacijom.

Molim vas:
1. Koji je model i godište vozila?
2. Gasi li se lampica ikad?
3. Slabe li svjetla ili ventilacija?
4. Je li auto trenutno pokretan?

Na temelju toga servis može bolje pripremiti dijagnostiku.`,
    followup: `Hvala. Prema simptomima, preporuka je dijagnostika sustava punjenja — alternator, regulator napona i instalacija.

Mogu pripremiti upit za servis. Trebate li termin za dijagnostiku?`,
  },
  lock: {
    first: `Može biti baterija ključa, prijemnik, instalacija, modul centralnog zaključavanja ili alarmni sustav.

Za bolji upit trebam:
1. Model vozila
2. Radi li zaključavanje na ključ?
3. Radi li iznutra na tipku?
4. Je li problem nastao odjednom ili postupno?`,
    followup: `Hvala. Preporuka je dijagnostika centralnog zaključavanja i provjera ključa/prijemnika.

Želite li poslati upit za termin?`,
  },
  lights: {
    first: `Problemi s rasvjetom mogu biti žarulja, osigurač, relej, instalacija ili modul.

Molim vas:
1. Koji auto vozite?
2. Koje svjetlo ne radi (far, žmigavac, stop)?
3. Je li problem na jednoj ili više strana?
4. Je li nedavno bilo zamjena ili popravaka?`,
    followup: `Hvala. Preporuka je provjera osigurača, instalacije i odgovarajućeg svjetlosnog modula.

Mogu pripremiti upit za servis — trebate li termin?`,
  },
  general: {
    first: `Hvala na opisu. Da pripremim kvalitetan upit za servis, trebam:

1. Marku, model i godište vozila
2. Detaljniji opis simptoma
3. Kada se kvar prvi put pojavio
4. Je li auto trenutno pokretan?

Servis će na temelju toga predložiti termin za dijagnostiku.`,
    followup: `Hvala. Prema opisu, preporuka je termin za autodijagnostiku i pregled električnog sustava.

Želite li poslati upit za termin?`,
  },
  appointment: {
    first: `Naravno. Za dogovor termina trebam:

1. Marku, model i godište vozila
2. Kratki opis problema
3. Vaš kontakt broj
4. Preferirani dan/vrijeme (servis potvrđuje)

Servis radi po dogovoru — manje čekanja, više fokusa na vozilo.`,
    followup: `Hvala. Upit je spreman za pregled servisa (demo mode).

U produkciji bi ovdje došla potvrda termina putem WhatsAppa ili poziva. Za sada nas možete nazvati na +385 91 254 6637.`,
  },
};

const confirmMessage = `Odlično. Upit je pripremljen u demo modu.

Servis će pregledati podatke i potvrditi termin. Za hitne slučajeve nazovite +385 91 254 6637.

Hvala što koristite digitalnog pomoćnika Autoelektrika Berdik.`;

function detectFlow(message: string): string {
  if (/termin/i.test(message)) return "appointment";
  for (const [flow, patterns] of Object.entries(followUpPatterns)) {
    if (patterns.some((p) => p.test(message))) {
      return flow;
    }
  }
  return "general";
}

export function getAssistantResponse(
  userMessage: string,
  stage: FlowStage,
  activeFlow: string | null
): { content: string; nextStage: FlowStage; nextFlow: string | null } {
  const lower = userMessage.toLowerCase();

  if (/^(da|želim|zelim|pošalji|posalji|ok|može|moze)/i.test(lower.trim())) {
    return { content: confirmMessage, nextStage: "initial", nextFlow: null };
  }

  if (/termin/i.test(lower) && stage === "initial") {
    const appointment = flowResponsesMap.appointment;
    return {
      content: appointment.first,
      nextStage: "followup",
      nextFlow: "appointment",
    };
  }

  if (stage === "followup" && activeFlow) {
    const flow = flowResponsesMap[activeFlow];
    if (flow) {
      return {
        content: flow.followup,
        nextStage: "summary",
        nextFlow: activeFlow,
      };
    }
  }

  const flowKey = detectFlow(userMessage);
  const flow = flowResponsesMap[flowKey] ?? flowResponsesMap.general;
  return {
    content: flow.first,
    nextStage: "followup",
    nextFlow: flowKey,
  };
}
