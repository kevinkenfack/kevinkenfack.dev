---
title: 5 Snippets Raycast Nuxt (Vue) pour améliorer vos projets
date: 22/01/2024
description: Dans le domaine du développement web, où l'efficacité est aussi précieuse que l'expertise, les outils qui rationalisent et simplifient notre flux de travail sont indispensables. Parmi ceux-ci, les extraits de code Raycast émergent comme un allié puissant, surtout pour ceux qui travaillent avec les frameworks Nuxt et Vue. Mais qu'est-ce que ces extraits de code, et comment peuvent-ils transformer votre expérience de développement ?
tags:
  - Nuxt
  - Vue
  - Raycast
  - Productivité
image: https://kevinkenfack.com/articles/5-raycast-snippets.jpg
readingTime: '10'
---

![preview](/articles/5-raycast-snippets.jpg)

Dans le domaine du développement web, où l'efficacité est aussi précieuse que l'expertise, les outils qui simplifient et optimisent notre flux de travail sont indispensables. Parmi eux, les extraits de Raycast se révèlent être des alliés puissants, notamment pour ceux qui travaillent avec les frameworks Nuxt et Vue. Mais qu'est-ce que ces extraits, et comment peuvent-ils transformer votre expérience de développement ?

## Que sont les snippets de Raycast ?

Les extraits de Raycast sont de petits morceaux de texte ou de code réutilisables qui peuvent être insérés rapidement dans votre travail. Pensez à eux comme à des raccourcis pour des contenus fréquemment utilisés, que ce soit du code, des réponses prédéfinies pour des emails, ou même des emojis. Ils sont conçus pour gagner du temps et réduire les saisies répétitives, permettant ainsi aux développeurs et aux rédacteurs de travailler plus efficacement.

## Comment utiliser les snippets de Raycast

L'utilisation des extraits de Raycast est simple. Une fois que vous avez créé ou importé un extrait dans l'application Raycast, vous pouvez lui assigner un mot-clé spécifique. Ce mot-clé agit comme un déclencheur : à chaque fois que vous le tapez dans une application, l'extrait s'étend automatiquement sur place, remplaçant le mot-clé par le texte ou le code complet de l'extrait.

Par exemple, si vous avez un extrait pour une signature d'email standard, vous pouvez attribuer un mot-clé comme sig1. En tapant sig1 dans un email, celui-ci se transformera automatiquement en texte complet de la signature. Cette fonctionnalité est particulièrement utile dans le code, où vous pouvez avoir des extraits pour des modèles de code ou des configurations courants.

![snippets-exemple](/articles/snippets-exemple.gif)

### Modèle de composant : !comp

L'extrait !comp est un modèle basique mais puissant pour créer de nouveaux composants Vue. Il inclut un script setup avec la prise en charge de TypeScript, une section template, et des styles encapsulés. Cet extrait est idéal pour générer rapidement de nouveaux composants dans votre projet.

**Exemple d'utilisation** : Utilisez !comp pour créer rapidement de nouveaux composants Vue, garantissant la cohérence et économisant du temps sur la configuration.

```vue
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  item: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <h1>{{ item }}</h1>
  </div>
</template>

<style scoped>

</style>
```

### API Handler Template: `!api`

Gérer les requêtes API est une tâche courante dans les applications web modernes. L'extrait !api fournit un modèle pour créer des gestionnaires d'API en utilisant h3, un outil HTTP léger. Cet extrait simplifie le processus de configuration des routes API et la gestion des requêtes.

**Exemple d'utilisation** : Implémentez l'extrait !api pour créer des routes API efficaces dans votre application Nuxt, notamment lors de la gestion des opérations CRUD.

```ts
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  // your_api_logic
});
```

### Gestion d'état avec Pinia : !store

La gestion d'état est cruciale dans les applications à grande échelle. L'extrait !store utilise Pinia, un store Vue, et offre un modèle structuré pour gérer l'état de l'application. Il inclut une définition d'état, des getters et des actions.

**Exemple d'utilisation** : Utilisez !store pour configurer des modules de store dans votre application Nuxt/Vue, en gérant l'état de manière plus efficace et propre. Le { clipboard } sera remplacé par votre presse-papiers actuel..

```ts
import { defineStore } from 'pinia';

type {clipboard}Store = { 
  count: number;
} 

export const use{clipboard}Store = defineStore('{clipboard}', {
  state: (): {clipboard}Store => ({ 
    count: 0,
  }), 
  getters: { 
    getCount(): number { 
      return this.count; 
    }
  },
  actions: { 
    increment() {
      this.count++; 
    }, 
  } 
});
```

### Modèle de fonction composable : !cps

Les fonctions composables dans Vue 3 apportent réutilisabilité et organisation à votre code. L'extrait !cps offre un modèle pour créer ces fonctions, aidant à maintenir un code propre et modulaire.

**Exemple d'utilisation** : Utilisez !cps pour créer des fonctions composables réutilisables qui peuvent être partagées entre les composants, améliorant ainsi la réutilisabilité et la maintenabilité du code.

```ts
export function use{clipboard}() {
  const {clipboard} = ref(null);
  
  // Composable logic
  
  return { {clipboard} };
}
```

### Récupération de données avec l'API de composition : !fcomp

L'extrait !fcomp est conçu pour récupérer des données en utilisant l'API de composition de Vue. Il propose une configuration pour effectuer des requêtes HTTP, gérer les états de chargement et les erreurs, le tout au sein d'un composant.

**Exemple d'utilisation** : Implémentez !fcomp dans des scénarios où vous devez récupérer des données à partir d'une API, en offrant une structure robuste pour la récupération des données et la gestion des états..

```vue
<script setup lang="ts">
const { data, pending, error, refresh } = useFetch("your_url", { 
  immediate: false,
  watch: false,
});

function loadData() {
  await refresh();
}
</script>

<template>
  <div>
    <button @click="loadData">Load Data</button>
    <div v-if="pending">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<style scoped>
/* composant styles */
</style>
```

### Pourquoi utiliser ces extraits ?

#### Améliorer la productivité

Les extraits Raycast vous font gagner du temps et des efforts en fournissant des modèles de code prêts à l'emploi, vous permettant de vous concentrer sur les aspects uniques de votre projet.

#### Maintenir la cohérence

L'utilisation d'extraits standardisés garantit la cohérence dans l'ensemble de votre code, le rendant plus facile à lire, à maintenir et à collaborer.

#### Rationaliser le développement

Les extraits répondent aux tâches de développement courantes, simplifiant votre flux de travail et réduisant les risques d'erreurs ou d'oublis.

#### Encourager l'apprentissage

Pour les nouveaux développeurs ou ceux qui découvrent Nuxt et Vue, ces extraits offrent un aperçu des meilleures pratiques et des schémas de codage efficaces.

En conclusion, l'incorporation de ces extraits Raycast dans votre flux de travail Nuxt et Vue peut considérablement améliorer la productivité, maintenir la cohérence du code et rationaliser votre processus de développement. Que vous construisiez un petit projet ou une application à grande échelle, ces extraits sont des outils inestimables dans l'arsenal du développeur moderne.
