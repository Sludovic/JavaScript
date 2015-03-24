Adapté de la réponse sur stackoverflow.com - http://stackoverflow.com/a/14966131

Exemple pour ExportToCsvBasic.js:
```HTML
<script>
var headercsv = ["Nom","Total", "MAJ", "Nouveau"];
var headerdata = ["Nom", "Nombre Valide", "Mis a jour", "Nouveaux"];
var datacsv = '[{"Nom":"la première ligne","MAJ":"0","Nouveau":"5475","Total":"5475"},{"Nom":"le deuxieme ligne","MAJ":"60","Nouveau":"0","Total":"60"}]';
var name = 'tableau.csv';
</script>
<a onClick="exportToCsv(this,datacsv,headercsv,name,headerdata);">Télécharger le tableau</a>
```
