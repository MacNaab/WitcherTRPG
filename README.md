# WitcherTRPG : HTML - JS - Json
Utilitaire MJ - Joueur pour le JdR The Witcher.

------------------

Utilitaire de jet de dé, inventaire etc pour le JdR The Witcher façon VTT.  Il est recommandé d'utiliser OwlbearRodeo comme VTT.

------------------
# Wiki
Lien du [wiki](https://github.com/MacNaab/WitcherTRPG/wiki):
- PJ
- MJ
- Fiche
------------------

# Sommaire
- [Fiche](#Fiche)
  * [template_min.json](#template_minjson)
  * [template.json](#templatejson)
  * [Propriétés](#Propriétés)
    + [Nom](#Nom)
    + [Race](#Race)
    + [Profession](#Profession)
    + [Caractéristique](#Caractéristique)
    + [Compétences](#Compétences)
    + [Magie](#Magie)
    + [PS](#PS)
    + [END](#END)
    + [Réput](#Réput)
    + [Inventaire](#Inventaire)
    + [Or](#Or)
    + [HdV](#HdV)
    + [Evénements](#Event)
    + [Description](#Description)
    + [Portrait](#Portrait)
    + [Relance](#Relance)
    + [Effet](#Effet)
    + [Journal](#Journal)
    + [PP](#PP)
    + [Origine](#Origine)

------------------

## Joueur
Vous avez deux possibilitées :
- Se connecter (si votre fiche est dans data/pj.json)
- Importer votre Fiche

### Importer sa fiche
Vous pouvez importer votre fiche (format .json). Vous référez à [Fiche](#Fiche-1).  
Pour créer une fiche, reprenez un template ([template_min.json](https://raw.githubusercontent.com/MacNaab/WitcherTRPG/master/data/template_min.json) ou [template.json](https://raw.githubusercontent.com/MacNaab/WitcherTRPG/master/data/template.json)) en utilisant un éditeur de texte ou un [éditeur en ligne](https://jsoneditoronline.org/).

## Fiche
La fiche de PJ doit être dans un format .json. Vous pouvez éditer votre fiche avec n'importe quel éditeur de texte (bloc-note, Notepad++, Visual Studio Code...) ou utiliser un éditeur en ligne ([jsoneditoronline](https://jsoneditoronline.org/) ...).

Vous trouverez 2 exemples de fiches:
- [template.json](https://github.com/MacNaab/WitcherTRPG/blob/master/data/template.json)
- [template_min.json](https://github.com/MacNaab/WitcherTRPG/blob/master/data/template_min.json)

### template_min.json
C'est la version minimale pour un PJ. Vous pouvez la retrouver [ici](https://raw.githubusercontent.com/MacNaab/WitcherTRPG/master/data/template_min.json). Lors de la première utilisation, les caractéristiques secondaires et capacités seront automatiquement ajoutées.
### template.json
C'est la version détaillé d'une fiche de PJ. Vous pouvez la retrouver [ici](https://raw.githubusercontent.com/MacNaab/WitcherTRPG/master/data/template.json).

### Propriétés
Nous allons détailler les différentes propriétés de la fiche Json.
#### Nom
C'est le nom de votre personnage.
##### Exemple
```JSON
"Nom": "GERALT DE RIV"
```
#### Race
C'est la race de votre personnage. Elle peut prendre les valeurs:
- Humain ou Humaine
- Elfe
- Nain ou Naine
- Sorceleur
- Halfelin ou Halfeline
- Gnome
- Vampire
##### Exemple
```JSON
"Race": "Sorceleur"
```
#### Profession
C'est la profession de votre personnage. Elle peut prendre les valeurs:
- Artisan
- Barde
- Criminel
- Docteur
- Homme d'armes
- Mage
- Marchand
- Prêtre
- Sorceleur
- Noble
- Paysan
- Fanatique
- Hors-la-loi
- Nomade
##### Exemple
```JSON
"Profession": "Sorceleur"
```
#### Caractéristique
Elle regroupe les caractéristiques primaires et secondaires.
##### Primaires
- INT: Intelligence
- REF: Réflexes
- DEX: Dextérité 
- COR: Corps
- VIT: Vitesse 
- EMP: Empathie 
- TEC: Technique 
- VOL: Volonté
- CHA: Chance 
- VIG: Vigueur 
##### Secondaires
Les caractéristiques secondaires sont calculées automatiquement des caractéristiques primaires, toutefois, vous pouvez modifier ces valeurs manuellement.  
- ETOU: Étourdissement
- COU: Course
- SAUT: Saut
- PS: Points de Santé
- END: Endurance 
- ENC: Encombrement 
- REC: Récupération
- Pieds: Coup-de-pied
- Poings: Coup-de-poings
##### Exemple
```JSON
 "Caractéristique": {
      "INT": 6,  
      "REF": 14,  
      "DEX": 10,
      "COR": 8,
      "VIT": 9,
      "EMP": 3,
      "TEC": 5,
      "VOL": 8,
      "CHA": 3,
      "VIG": 7,
      "ETOU": 8,
      "COU": 27,
      "SAUT": 5,
      "PS": 55,
      "END": 40,
      "ENC": 80,
      "REC": 8,
      "Pieds": "1d6+6",
      "Poings": "1d6+2"
    }
```
#### Compétences
Elle regroupe les différentes compétences du personnage. Chaque compétence possède pour valeurs:
- Nom: le nom de la compétence
- V: sa valeur
- C: pour la caractéristique dépendante
- P: qui prend la valeur "true" si c'est une compétence de profession sinon elle prendra la valeur "false"
##### Exemple
```JSON
    "Compétences": [
      {"Nom": "Déduction","V": 9,"C": "INT","P": false},
      {"Nom": "Bagarre","V": 6,"C": "REF","P": false},
      {"Nom": "Arbalète","V": 6,"C": "DEX","P": false},
      {"Nom": "Physique","V": 6,"C": "COR","P": false},
      {"Nom": "Persuasion","V": 1,"C": "EMP","P": false},
      {"Nom": "Alchimie","V": 5,"C": "TEC","P": false},
      {"Nom": "Résistance à la magie","V": 6,"C": "VOL","P": false},
      {"Nom": "Formation de sorceleur","V": 10,"C": "INT","P": "true"}
      {"Nom": "Estomac de fer","V": 10,"C": "-","P": "true"}
    ]
```
#### Magie
Elle regroupe les diférentes compétences magiques du personnage. Chaque compétence magique possède pour valeurs:
- Nom: le nom de la compétence magique
- Type: qui correspond au type de compétence magique (Sort, Invocation, Signe, Envoûtement, Rituel, Vampire)
##### Exemple
```JSON
    "Magie": [
      {
        "Nom": "Dissipation",
        "Type": "Sort"
      },
      {
        "Nom": "Barrière magique",
        "Type": "Rituel"
      },
      {
        "Nom": "Démangeaison éternelle",
        "Type": "Envoûtement"
      }
    ]
```
#### PS
Correspond aux Points de Santé actuel.
##### Exemple
```JSON
"PS": 50
```
#### END
Correspond à l'Endurance actuel.
##### Exemple
```JSON
"END": 20
```
#### Réput
Correspond à la réputation.
##### Exemple
```JSON
"Réput": "Légende"
```
#### Inventaire
Correspond à l'inventaire du PJ. Il est divisé en quatre catégories:
- Arme
- Armure
- Autre
- Schéma
##### Arme
Ce sont les différentes armes que possède le PJ. Chaque arme possède comme propriétés:
- Nom: Nom de l'arme
- Type: Type d'arme
- Pré: Précision de l'arme
- Dég: Dégâts de l'arme
- Fia: Fiabilité actuelle de l'arme
- FiaMax: Fiabilité maximale de  l'arme
- Main: Combien de mains libres sont nécessaire par manier l'arme
- Por: Portée de l'arme
- Effet: Effet de l'arme
- Diss: Dissimulation de l'arme
- AM: Amélioration de l'arme
- Poids: Poids de l'arme
##### Projectile
Ce sont les munitions, bombes et pièges que possède le PJ. Chaque projectile possède comme propriétés:
- Nom: Nom du projectile
- Type: Type projectile
- Por: Portée du projectile
- Dég: Dégâts du projectile
- Effet: Effet du projectile
- Poids: Poids du projectile
- Qtt: Quantité d'unitée du projectile
##### Armure
Ce sont les différentes armures que possède le PJ. Chaque armure possède comme propriétés:
- Nom: Nom de l'armure
- Type: Type d'armure (Tête,Torse,Jambe,Bouclier)
- PA: Pouvoir d'arrêt de l'armure
- Fia: Fiabilité actuelle de l'armure
- Effet: Effet de l'armure
- AM: Amélioration de l'armure
- VE: Valeur d'Encombrement de l'armure
- Poids: Poids de l'armure
##### Autre
Ce sont les autres objets que possède le PJ. Chacun possède comme propriétés:
- Nom: Nom de l'objet
- Effet: Effet de l'objet
- Poids: Poids de l'objet pour 1 unitée
- Qtt: Quantité d'unitée de l'item
##### Schéma
Ce sont les différents schémas et plans connu par le PJ. Chacun possède comme propriétés:
- Nom: Nom du schéma
- Desc: Description du schéma
- Poids: Poids du schéma
##### Exemple
```JSON
    "Inventaire": {
      "Arme": [
        {
          "Nom": "Arbalète de poing",
          "Type": "P",
          "Pré": 1,
          "Dég": "2d6+2",
          "Fia": 3,
          "FiaMax": 5,
          "Main": 1,
          "Por": "50 m",
          "Effet": "Rechargement lent",
          "Diss": "G",
          "AM": "-",
          "Poids": 0.5
        }
      ],
      "Projectile": [
        {
          "Nom": "Projectile Standard",
          "Type": "P",
          "Por": "-",
          "Dég": "-",
          "Effet": "-",
          "Qtt": 5,
          "Poids": 0.05
        }
      ],
      "Armure": [
        {
          "Nom": "Cotte de mailles gnome",
          "Type": ["Tête","Torse","Jambe"],
          "PA": 10,
          "Fia": 9,
          "Effet": "Résistance : tranchant",
          "AM": "-",
          "VE": 0,
          "Poids": 5
        }
      ],
      "Autre": [
        {
          "Nom": "Carreaux d'arbalète",
          "Effet": "-",
          "Poids": 0.05,
          "Qtt": 20
        },
        {
          "Nom": "Médaillon de sorceleur",
          "Effet": "Détecte les monstre et la magie à 20m.",
          "Poids": 0.1,
          "Qtt": 1
        }
      ],
      "Schéma": [
        {
          "Nom": "Schéma",
          "Desc": "Armure Novice",
          "Poids": 0.1
        }
      ]
    }
```
#### Or
Correspond aux couronnes que possède le PJ
##### Exemple
```JSON
"Or": 1
```
#### HdV
Correspond à l'Histoire de Vie du PJ. Doit être au format .html.
##### Exemple
```JSON
"HdV": "Né à ...<br>Famille de ..."
```
#### Event
Correspond aux événements de vie du PJ. Doit être au format .html.
##### Exemple
```JSON
"Event": "..."
```
#### Description
Correspond à la description du PJ. Doit être au format .html.
##### Exemple
```JSON
"Description": "Cheveux blancs..."
```
#### Portrait
Correspond au portrait du PJ. Il doit s'agit d'un lien url.
##### Exemple
```JSON
"Portrait": "https://i.pinimg.com/originals/f1/02/41/f1024170e571510ecffc8f0ddf0b477d.jpg"
```
#### Relance
Correspond aux dé de relance restant.
##### Exemple
```JSON
"Relance": 1
```
#### Effet
Regroupe les différents effets du PJ. Elle peut prendre comme propriété :
- Bonus
- Malus 
##### Bonus
Regroupe les bonus du PJ. Elle peut prendre comme propriété :
- Certain état
- Desc: valeur affiché dans "Histoire" 
##### Malus
Regroupe les malus du PJ. Elle peut prendre comme propriété :
- Certain état
- Desc: valeur affiché dans "Histoire" 
##### Exemple
```JSON
Effet: {
	"Bonus": {
		"Desc": "Détection des Monstres",
	},
	"Malus": {
		"Desc": "Vulnérabilité au Feu",
	}
}
```
#### Journal
Correspond au journal du PJ enregistré dans l'onglet Journal.
#### PP
Correspond aux Points de Progression du PJ
##### Exemple
```JSON
"PP": 1
```
#### Origine
Correspond à la région d'origine du PJ:
- RoyaumesNord: "Rédanie","Kaedwen","Témérie","Aedirn","Lyrie et Rivie","Kovir et Poviss","Skellige","Cidaris","Verden","Cintra"
- Nilfgaard: "Coeur de l’Empire","Vicovaro","Angren","Nazair","Metinna","Mag Turga","Geso","Ebbing","Maecht","Gemmery","Étolie"
- Anciens: "Dol Blathanna","Mahakam"
##### Exemple
```JSON
"Origine": ""
```
