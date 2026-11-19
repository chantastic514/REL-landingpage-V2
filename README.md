# RestoEnLigne — Landing page V5.1 · FR / EN

## Changement V5.1
- Microsoft Bookings reste le point de contact principal, visible par défaut. Il demeure un placeholder technique tant que l’URL officielle n’est pas fournie.
- Le formulaire (téléphone obligatoire) est **masqué au chargement** et apparaît seulement après un clic sur « Remplir le formulaire » / « Fill out the form ». Le même bouton permet de le refermer.
- Les trois témoignages présentent une zone « Image à venir » puis un emplacement de **logo à la place du nom/titre**, et enfin une citation temporaire. Aucune photo ou citation authentique n’est simulée.
- Le formulaire est une démo non connectée. Aucun message n'est réellement envoyé.

## Remplacement depuis V5
Remplacer **4 fichiers** dans le dépôt :
1. `fr/index.html`
2. `en/index.html`
3. `assets/styles.css`
4. `assets/site.js`

`index.html` à la racine est seulement une redirection vers `/fr/` et **ne nécessite aucune modification**. Les photos, `translations.json`, `content_cards.json` et le fichier Excel V5 sont inchangés.

Pour une copie complète du projet, le ZIP V5.1 contient également les autres fichiers utiles.

## À terminer avant la mise en ligne
- Lier Microsoft Bookings et le CRM, configurer le formulaire et la politique de confidentialité.
- Remplacer les placeholders du GIF, des images et des témoignages, puis obtenir les approbations.
- Vérifier les statistiques et l’offre commerciale avant publication.
- Valider mobile, clavier, accessibilité et SEO. La directive `noindex,nofollow` reste activée pour cette prévisualisation.
- Sur GitHub Pages, le dépôt public reste accessible publiquement malgré `noindex`.


## V5.2 — Mise à jour du Hero
- Nouvelle photo « Untitled Design.png » intégrée sous `assets/hero-restaurateur.jpg` (optimisée JPEG).
- Hero photographique pleine largeur, sans panneau violet opaque ; dégradé léger localisé côté texte sur desktop.
- Sur mobile : photo visible en haut et texte dans la continuité sur fond sombre, pour éviter de masquer le visage et assurer la lisibilité.
- Prix d'entrée mis en évidence : **À partir de 29 $/mois** / **Starting at $29/month**. Spotlight reste disponible gratuitement ; aucun tarif détaillé dans le comparateur.
- Formulaire alternatif et placeholders de témoignages de V5.1 conservés.
- En preview : `noindex,nofollow` conservé et intégrations non actives.

### Mise à jour ciblée GitHub
Remplacer uniquement : `fr/index.html`, `en/index.html`, `assets/styles.css`, `assets/hero-restaurateur.jpg` et facultativement `README.md`. Ne pas remplacer le `index.html` racine.
