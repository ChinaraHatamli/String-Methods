
<h2> String-Methoden in JavaScript </h2>
In JavaScript sind Strings unveränderliche Datentypen, die eine Sequenz von Zeichenketten repräsentieren. Sie können verwendet werden, um Text, Zahlen und andere Daten darzustellen. JavaScript bietet eine Vielzahl von Methoden zum Arbeiten mit Strings, die in folgende Kategorien eingeteilt werden können:

<h3> 1. Zeichenketten extrahieren und manipulieren: </h3>

charAt(index): Gibt das Zeichen an der angegebenen Position zurück. <br>
charCodeAt(index): Gibt den Unicode-Zeichencode an der angegebenen Position zurück. <br>
slice(start, end): Extrahiert einen Teil der Zeichenkette und gibt sie als neue Zeichenkette zurück.<br>
substring(start, end): Ähnlich wie slice(), aber der Endindex ist optional und wird standardmäßig auf das Ende der Zeichenkette gesetzt. <br>
substr(start, length): Extrahiert einen Teil der Zeichenkette ab der angegebenen Position mit der angegebenen Länge. <br>
replace(regexp, replacement): Ersetzt alle Vorkommen eines regulären Ausdrucks durch die angegebene Zeichenkette.<br>
toUpperCase(): Konvertiert alle Zeichen in Großbuchstaben.<br>
toLowerCase(): Konvertiert alle Zeichen in Kleinbuchstaben.<br>

<h3> 2. Zeichenketten suchen und vergleichen: </h3>

indexOf(searchValue, fromIndex): Gibt den ersten Index des Vorkommens der angegebenen Zeichenkette zurück. <br>
lastIndexOf(searchValue, fromIndex): Gibt den letzten Index des Vorkommens der angegebenen Zeichenkette zurück. <br>
startsWith(searchString): Prüft, ob die Zeichenkette mit der angegebenen Zeichenkette beginnt. <br>
endsWith(searchString): Prüft, ob die Zeichenkette mit der angegebenen Zeichenkette endet.<br>
includes(searchString): Prüft, ob die Zeichenkette die angegebene Zeichenkette enthält.<br>

<h3> 3. Zeichenketten formatieren: </h3>

concat(string1, string2, ...): Verkettet mehrere Zeichenketten zu einer neuen Zeichenkette.<br>
repeat(count): Wiederholt die Zeichenkette die angegebene Anzahl von Malen.<br>
padStart(targetLength, padString): Füllt die Zeichenkette am Anfang mit der angegebenen Zeichenkette auf die gewünschte Länge auf.<br>
padEnd(targetLength, padString): Füllt die Zeichenkette am Ende mit der angegebenen Zeichenkette auf die gewünschte Länge auf.<br>

<h3> 4. Weitere nützliche String-Methoden: </h3>

length: Gibt die Länge der Zeichenkette zurück.<br>
trim(): Entfernt Leerzeichen am Anfang und Ende der Zeichenkette.<br>
trimStart(): Entfernt Leerzeichen am Anfang der Zeichenkette.<br>
trimEnd(): Entfernt Leerzeichen am Ende der Zeichenkette.<br>
split(separator): Teilt die Zeichenkette an den Vorkommen des angegebenen Trennzeichens auf und gibt ein Array von Teilzeichenketten zurück.<br>
join(separator): Verkettet die Elemente eines Arrays zu einer neuen Zeichenkette, wobei der angegebene Trenner zwischen den Elementen verwendet wird.<br>
