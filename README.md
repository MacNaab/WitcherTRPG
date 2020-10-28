# WitcherTRPG : HTML - JS - Json
Utilitaire MJ - Joueur pour le JdR The Witcher.

------------------

Utilitaire de jet de dé, inventaire etc pour le JdR The Witcher façon VTT.  Il est recommandé d'utiliser OwlbearRodeo comme VTT.

------------------
# Sommaire
- [Joueur](#heading)
  * [Importer sa fiche](#sub-heading)
  * [Interface](#sub-heading-1)
    + [Fiche](#sub-sub-heading)
    + [Compétences](#sub-sub-heading-1)
    + [Inventaire](#sub-sub-heading-2)
    + [Histoire](#sub-sub-heading-3)
    + [Journal](#sub-sub-heading-4)
- [MJ](#heading-1)
  * [Sub-heading](#sub-heading-1)
    + [Sub-sub-heading](#sub-sub-heading-1)
- [Fiche](#heading-2)
  * [Eléments](#sub-heading-2)
    + [Sub-sub-heading](#sub-sub-heading-2)

------------------

## Joueur
Vous avez deux possibilitées :
- Se connecter (si votre fiche est dans data/pj.json)
- Importer votre Fiche

### Importer sa fiche
Vous pouvez importer votre fiche (format .json). Vous référez à [Fiche](#heading-2).

### Interface
This is an h2 heading

#### Fiche
Dans cette section, vous aurez les principales informations sur votre personnage: histoire, événements, description mais égalements les caractéristiques primaires et secondaires. Vous avez également la possibilité de rajouter une image de portrait (lien url).

#### Compétences
Dans cette section, vous aurez la liste de vos compétences (par caractéristique) ainsi que vos compétences de profession. Vos trouverez aussi vos capacités raciales et votre compétence exclusive, le tout en détaillé. Vous aurez également un tableau qui regroupant les différentes compétences de votre profession, ce tableau possède une fonction de recherche.

Si vous pratiquez la magie, vos sorts seront dans cette section ainsi qu'un tableau regroupant les différents formes de magie que vous pouvez pratiquer, ce tableau possède une fonction de recherche.

#### Inventaire
Dans cette section, vous trouverez votre inventaire divisé en trois catégories:
- Armes
- Armures
- Inventaire

Vous trouverez également un gestionnaire d'achat d'objets communs (à prix fixe) ainsi qu'un tableau regroupant les différents items du jeu, ce tableau possède une fonction de recherche.

#### Histoire
Dans cette section, vous trouverez une section fiche rapide composé de votre argent, vos dés de relance restant, votre réputation, vos PP, vos PS et END actuel ainsi que les valeurs de la PA, l'encombrement et l'encombrement d'armure. Vous aurez aussi vos bonus et malus.

Ensuite vous trouverez votre simulateur de lancer qui possède un historique.
La première ligne sert aux principaux lancés (caractéristique, compétence).
"Jet d'arme" permet de faire un jet de dommage avec une de vos armes.
"Corps à corps" permet de faire un jet de coup de poings ou de coup de pieds.
"Dé" permet de lancer un dé possède X face. (X étant le chiffre mis dans cet input)

#### Journal
Dans cette section, vous avez la possibilité de prendre des notes, tenir un journal de PJ tout en jouant.

Pour cela, cliquez sur "Editer le journal". "Valider" enregistrera les modifications dans votre fiche de personnage, si vous cliquez sur Annuler, ces modifications ne seront pas enregistrées.

## MJ
This is an h1 heading

### Sub-heading
This is an h2 heading

#### Sub-sub-heading
This is an h3 heading

## Fiche
La fiche de PJ doit être dans un format .json

### Eléments
La fiche comprends les éléments suivants: [...]
  Vous trouverez 2 exemples de fiches:
- template.json
- template_min.js

#### template_min.json
C'est la version minimale pour un PJ. Vous pouvez la retrouver ici. Lors de la première utilisation, les caractéristiques secondaires et capacités seront automatiquement ajoutées.
#### template.json
C'est la version détaillé d'une fiche de PJ. Vous pouvez la retrouver ici.
