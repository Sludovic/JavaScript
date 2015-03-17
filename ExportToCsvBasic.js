/*
 * link = element html 'a' dans la page
 * JSONdata = données du tableau en JSON
 * KEYSdata = corresponds au nom des colonnes dans le JSON.
 * HeaderData = corresponds au nom des colonnes que l'on veut à l'affichage dans le meme ordre que les colonnes sql.
 *              Peut être généré automatiquement
 * KEYSdata et HeaderData doivent être correspondants
 * name = nom du fichier csv (ex: blabla.csv)
 */
function exportToCsv(link,JSONdata,KEYSdata,name,HeaderData) {
    var data = eval(JSONdata);
    var str;
    var orderedData = [];
    
    for(var i = 0; i < data.length; i++) {
        if(i == 0){
            if(HeaderData!= null){
                orderedData.push(HeaderData.join(','));
            }else{
                KEYSdata = Object.keys(data[i]);
                orderedData.push(KEYSdata.join(','));
            }
        }
       var liste = [];
        for(var j = 0; j < KEYSdata.length; j++) {
            liste.push(data[i][KEYSdata[j]]);
        }
        orderedData.push(liste.join(','));
    }    
    var csvContent = "data:application/vnd.ms-excel;charset=utf-8,\r\n" + orderedData.join("\r\n");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", name);    
}

Ex : 
```HTML
<script>
    var headercsv = ["Nom","Total", "MAJ", "Nouveau"];
    var headerdata = ["Nom", "Nombre Valide", "Mis a jour", "Nouveaux"];
    var datacsv = '[{"Nom":"la première ligne","MAJ":"0","Nouveau":"5475","Total":"5475"},{"Nom":"le deuxieme ligne","MAJ":"60","Nouveau":"0","Total":"60"}]';
    var name = 'tableau.csv';
</script>
<a onClick="exportToCsv(this,datacsv,headercsv,name,headerdata);">Télécharger le tableau</a>
```
