//Sebastian Tischler, 11153606
//Leon Adel, 11153603
//Hide and Show
function show_hide(id /*Hier wurde nur ID reihngschrieben, da der befehl bei einer spezifischen ID für jedes bild neu geschrieben werden müsste*/ ) {
    var img = document.getElementById(id /*Hier eben so*/ );
    if (img.style.display === 'none') {
        img.style.display = 'inline';
    } else {
        img.style.display = 'none';
    }
    /*Diese Funktion sagt aus: wenn Bild nicht sichtbar ist 
        dann sichtbar machen. Wenn Bild was anderes als nicht sichtbar ist
        (kann nur Sichtbar sein) dann unsichtbar (display:none) machen.*/
}


//Zeichenzähler
function zeichenzaehler() {
    var text_laenge = 0

    //Hier werden alle Paragraphen (Absaetze) gesucht
    var all_ps = document.getElementsByTagName("p");

    /*Hier wird eine Schleife benutzt um den Text aus allen Paragraphen zu finden
    Vorlage aus Visual Studio Code*/
    for (let p = 0; p < all_ps.length; p++) {
        const element = all_ps[p];

        //addiere den text fuer eine gesamtausagbe
        text_laenge += element.innerText.length;

    }

    /*Hier wird die Gesamtausagbe in ein Paragraphen geschrieben.
    Vorsicht da sich damit der Text aendert, aendert sich auch die Zahl beim zweiten Klick!!!*/
    document.getElementById("button_output").innerHTML = "Diese Seite enthält in den Absätzen "+ text_laenge+ " Zeichen.";
}