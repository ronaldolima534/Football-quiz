const dailyQuizData = [
{ image:"images/daily-quiz/q1.png", question:"¿Qué jugador marcó el gol de la victoria en la final del Mundial 2014?", options:["Thomas Müller","Mario Götze","Miroslav Klose","André Schürrle"], correct:1 },

{ image:"images/daily-quiz/q2.png", question:"¿Qué club eliminó al Barcelona en la remontada 8-2 en Champions 2020?", options:["PSG","Bayern Múnich","Liverpool","Juventus"], correct:1 },

{ image:"images/daily-quiz/q3.png", question:"¿Quién fue el máximo goleador del Mundial 2002?", options:["Rivaldo","Ronaldo Nazario","Ronaldinho","Klose"], correct:1 },

{ image:"images/daily-quiz/q4.png", question:"¿Qué selección perdió la final del Mundial 1994?", options:["Alemania","Italia","Brasil","Argentina"], correct:1 },

{ image:"images/daily-quiz/q5.png", question:"¿En qué club debutó profesionalmente Luka Modrić?", options:["Dinamo Zagreb","Tottenham","Real Madrid","Zrinjski Mostar"], correct:0 },

{ image:"images/daily-quiz/q6.png", question:"¿Qué equipo ganó la primera Champions League (Copa de Europa)?", options:["AC Milan","Real Madrid","Benfica","Barcelona"], correct:1 },

{ image:"images/daily-quiz/q7.png", question:"¿Qué jugador tiene más goles en una sola edición de Champions?", options:["Messi","Cristiano Ronaldo","Lewandowski","Benzema"], correct:1 },

{ image:"images/daily-quiz/q8.png", question:"¿Qué selección eliminó a Brasil 7-1 en 2014?", options:["Argentina","Alemania","Holanda","Francia"], correct:1 },

{ image:"images/daily-quiz/q9.png", question:"¿Quién asistió el gol de Iniesta en la final del Mundial 2010?", options:["Xavi","Fàbregas","Torres","Villa"], correct:1 },

{ image:"images/daily-quiz/q10.png", question:"¿Qué club fichó a Thierry Henry antes de ir al Barcelona?", options:["Juventus","Arsenal","Monaco","Inter"], correct:1 },

{ image:"images/daily-quiz/q11.png", question:"¿Qué país ganó la primera Eurocopa en 1960?", options:["Alemania","URSS","España","Italia"], correct:1 },

{ image:"images/daily-quiz/q12.png", question:"¿Qué jugador ganó el Balón de Oro en 2010?", options:["Sneijder","Milito","Messi","Cristiano Ronaldo"], correct:2 },

{ image:"images/daily-quiz/q13.png", question:"¿Qué club ganó el triplete (Liga, Copa, Champions) en 2013?", options:["Barcelona","Bayern Múnich","Inter","Real Madrid"], correct:1 },

{ image:"images/daily-quiz/q14.png", question:"¿Quién fue el entrenador del Leicester City campeón en 2016?", options:["Mourinho","Ranieri","Klopp","Wenger"], correct:1 },

{ image:"images/daily-quiz/q15.png", question:"¿Qué selección ganó la Copa América 2015?", options:["Argentina","Chile","Brasil","Uruguay"], correct:1 },

{ image:"images/daily-quiz/q16.png", question:"¿Qué jugador marcó en la final de Champions 2014 para el empate 1-1?", options:["Bale","Ramos","Cristiano","Di María"], correct:1 },

{ image:"images/daily-quiz/q17.png", question:"¿Qué club fue el rival del Liverpool en la final de Champions 2005?", options:["Milan","Inter","Juventus","Bayern"], correct:0 },

{ image:"images/daily-quiz/q18.png", question:"¿Qué país ganó el Mundial Sub-20 en 2013?", options:["Brasil","Francia","España","Uruguay"], correct:1 },

{ image:"images/daily-quiz/q19.png", question:"¿Qué jugador tiene más asistencias en la historia de la Champions?", options:["Messi","Cristiano Ronaldo","Di María","Xavi"], correct:1 },

{ image:"images/daily-quiz/q20.png", question:"¿Qué selección ganó la Euro 2004 sorprendiendo a todos?", options:["Portugal","Grecia","España","Italia"], correct:1 },

{ image:"images/daily-quiz/q21.png", question:"¿Qué club descendió en 2023 en LaLiga?", options:["Valencia","Espanyol","Sevilla","Getafe"], correct:1 },

{ image:"images/daily-quiz/q22.png", question:"¿Qué selección ganó el Mundial 2018?", options:["Croacia","Francia","Bélgica","Inglaterra"], correct:1 },

{ image:"images/daily-quiz/q23.png", question:"¿Qué club ganó la Europa League 2022?", options:["Sevilla","Frankfurt","Arsenal","Roma"], correct:1 },

{ image:"images/daily-quiz/q24.png", question:"¿Qué jugador fue capitán de Italia en el Mundial 2006?", options:["Buffon","Cannavaro","Pirlo","Totti"], correct:1 },

{ image:"images/daily-quiz/q25.png", question:"¿Qué selección fue subcampeona del Mundial 2010?", options:["Alemania","Holanda","Uruguay","Brasil"], correct:1 },

{ image:"images/daily-quiz/q26.png", question:"¿Qué club fichó a Luis Suárez en 2014?", options:["PSG","Real Madrid","Barcelona","Juventus"], correct:2 },

{ image:"images/daily-quiz/q27.png", question:"¿Qué selección ganó la Copa América 2007?", options:["Brasil","Argentina","Chile","Uruguay"], correct:0 },

{ image:"images/daily-quiz/q28.png", question:"¿Qué jugador anotó el gol más rápido en la historia de los Mundiales (2002)?", options:["Ronaldo","Hakan Şükür","Owen","Klose"], correct:1 },

{ image:"images/daily-quiz/q29.png", question:"¿Qué club ganó la Champions League 2012?", options:["Bayern","Chelsea","Real Madrid","Barcelona"], correct:1 },

{ image:"images/daily-quiz/q30.png", question:"¿Qué selección eliminó a España en el Mundial 2014?", options:["Chile","Holanda","Australia","Brasil"], correct:0 },

{ image:"images/daily-quiz/q31.png", question:"¿Qué jugador fue MVP del Mundial 2018?", options:["Mbappé","Modrić","Griezmann","Hazard"], correct:1 },

{ image:"images/daily-quiz/q32.png", question:"¿Qué club ganó la Ligue 1 en 2017 (rompiendo dominio del PSG)?", options:["Lyon","Marseille","Monaco","Lille"], correct:2 },

{ image:"images/daily-quiz/q33.png", question:"¿Qué selección ganó la Euro 1984?", options:["Alemania","Francia","Italia","España"], correct:1 },

{ image:"images/daily-quiz/q34.png", question:"¿Qué jugador marcó el gol en la final de Champions 1999 en el último minuto para el United?", options:["Beckham","Solskjaer","Giggs","Scholes"], correct:1 },

{ image:"images/daily-quiz/q35.png", question:"¿Qué club fue fundado primero?", options:["Barcelona","Real Madrid","Manchester United","Bayern"], correct:2 },

{ image:"images/daily-quiz/q36.png", question:"¿Qué selección ganó el Mundial 1978?", options:["Brasil","Argentina","Alemania","Holanda"], correct:1 },

{ image:"images/daily-quiz/q37.png", question:"¿Qué jugador ganó el Balón de Oro 2007?", options:["Kaká","Cristiano","Messi","Ronaldinho"], correct:0 },

{ image:"images/daily-quiz/q38.png", question:"¿Qué club ganó la Champions 2009?", options:["Manchester United","Barcelona","Chelsea","Inter"], correct:1 },

{ image:"images/daily-quiz/q39.png", question:"¿Qué selección ganó la Copa América 2016 (Centenario)?", options:["Chile","Argentina","Brasil","Colombia"], correct:0 },

{ image:"images/daily-quiz/q40.png", question:"¿Qué jugador marcó el penal decisivo en la final del Mundial 2022?", options:["Messi","Dybala","Montiel","Lautaro"], correct:2 }
];
