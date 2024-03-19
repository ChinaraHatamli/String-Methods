
<h2> String-Methoden in JavaScript </h2>
In JavaScript sind Strings unveränderliche Datentypen, die eine Sequenz von Zeichenketten repräsentieren. Sie können verwendet werden, um Text, Zahlen und andere Daten darzustellen. JavaScript bietet eine Vielzahl von Methoden zum Arbeiten mit Strings, die in folgende Kategorien eingeteilt werden können:

<h3> 1. Zeichenketten extrahieren und manipulieren: </h3>

charAt(index): Gibt das Zeichen an der angegebenen Position zurück.
charCodeAt(index): Gibt den Unicode-Zeichencode an der angegebenen Position zurück.
slice(start, end): Extrahiert einen Teil der Zeichenkette und gibt sie als neue Zeichenkette zurück.
substring(start, end): Ähnlich wie slice(), aber der Endindex ist optional und wird standardmäßig auf das Ende der Zeichenkette gesetzt.
substr(start, length): Extrahiert einen Teil der Zeichenkette ab der angegebenen Position mit der angegebenen Länge.
replace(regexp, replacement): Ersetzt alle Vorkommen eines regulären Ausdrucks durch die angegebene Zeichenkette.
toUpperCase(): Konvertiert alle Zeichen in Großbuchstaben.
toLowerCase(): Konvertiert alle Zeichen in Kleinbuchstaben.

<h3> 2. Zeichenketten suchen und vergleichen: </h3>

indexOf(searchValue, fromIndex): Gibt den ersten Index des Vorkommens der angegebenen Zeichenkette zurück.
lastIndexOf(searchValue, fromIndex): Gibt den letzten Index des Vorkommens der angegebenen Zeichenkette zurück.
startsWith(searchString): Prüft, ob die Zeichenkette mit der angegebenen Zeichenkette beginnt.
endsWith(searchString): Prüft, ob die Zeichenkette mit der angegebenen Zeichenkette endet.
includes(searchString): Prüft, ob die Zeichenkette die angegebene Zeichenkette enthält.

<h3> 3. Zeichenketten formatieren: </h3>

concat(string1, string2, ...): Verkettet mehrere Zeichenketten zu einer neuen Zeichenkette.
repeat(count): Wiederholt die Zeichenkette die angegebene Anzahl von Malen.
padStart(targetLength, padString): Füllt die Zeichenkette am Anfang mit der angegebenen Zeichenkette auf die gewünschte Länge auf.
padEnd(targetLength, padString): Füllt die Zeichenkette am Ende mit der angegebenen Zeichenkette auf die gewünschte Länge auf.

<h3> 4. Weitere nützliche String-Methoden: </h3>

length: Gibt die Länge der Zeichenkette zurück.
trim(): Entfernt Leerzeichen am Anfang und Ende der Zeichenkette.
trimStart(): Entfernt Leerzeichen am Anfang der Zeichenkette.
trimEnd(): Entfernt Leerzeichen am Ende der Zeichenkette.
split(separator): Teilt die Zeichenkette an den Vorkommen des angegebenen Trennzeichens auf und gibt ein Array von Teilzeichenketten zurück.
join(separator): Verkettet die Elemente eines Arrays zu einer neuen Zeichenkette, wobei der angegebene Trenner zwischen den Elementen verwendet wird.
