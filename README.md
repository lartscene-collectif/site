# Site Collectif L'Art Scène

Le contenu du site est géré dans le dossier [`src/`](src/), au [format Markdown](https://www.markdownlang.com/cheatsheet/). Toute modification provoque automatiquement la mise à jour du site.

Les pages sont listées dans le dossier [`src/content/`](src/content/). On y trouve les pages d'accueil (home), de contact, de mentions légales et de politique de confidentialité.
Les pages peuvent être modifiées en modifiant chaque fichier (naviguer jusqu'au fichier puis utiliser l'icône du "crayon" au haut à droite).
On peut créer de nouvelles pages en ajoutant de nouveaux fichiers dans ce dossier.

Toujours dans ce dossier, on trouve le sous-dossier [`artistes`](src/content/artistes/), qui contient les fiches des différents artistes. Chaque fiche artiste vient automatiquement s'ajouter sur la page "nos artistes" du site, et également dans le "carousel" en haut de la page d'accueil (il faut une image avec le même nom que le fichier markdown : si on a un artiste avec un fichier "patate.md" alors il faut une image "patate.jpg" dans le [dossier des images](src/assets/))

Les fiches artistes doivent suivre la structure suivante :

```
---
nom: Le nom de l'artiste
image_cover: Nom du fichier image à utiliser sur la page "nos artistes"
style: Le style de l'artiste (facultatif)
instagram: Lien vers la page instagram (facultatif)
youtube: Lien vers la chaîne Youtube (facultatif)
spotify: Adresse du player embedded de spotify (facultatif)
presse: Lien vers le dossier de presse (facultatif)
rider: Lien vers la fiche technique/rider (facultatif)
gallery: (une liste d'images ou de liens youtube à intégrer sur la page, facultatif)
  - type: youtube (le type est soit "youtube", soit "image")
    url: 'https://www.youtube.com/watch?v=dKPJo6AeLns' (si le type est "youtube", alors on renseigne une URL pour le lien de la vidéo à intégrer)

  - type: image
    src: 'fichier.jpg' (si le type est "image", alors on fournit un attribut "src" avec le nom du fichier image à intégrer)
    alt: 'Description' (pour les images, il est préférable de fournir également un champ "alt" : c'est une description de l'image, utilisée pour les moteurs de recherche ou les personnes non-voyantes, ou simplement si l'image ne peut pas être chargée)
---

![Description de l'image](/assets/image.jpg) <- ici c'est pour intégrer une image avant le texte descriptif de l'artiste

Et enfin, la description de l'artiste. On peut utiliser le format markdown. Par exemple du texte entre des astérisques sera rendu en *italique*, en gras si on utilise des **doubles astérisques**.

Il faut sauter des lignes pour créer des paragraphes.

On peut insérer des liens en utilisant cette syntaxe : [texte du lien à afficher](https://url-du-site). Pour les images c'est la même chose mais on ajoute un point d'exclamation au début.
```

Les images doivent être placées dans le dossier [`src/assets/`](src/assets/).
