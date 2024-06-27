<template>
  <div>
    <rd-hero>
      <h1>Updates</h1>
      <p>Short publications and analysis from our team and partners</p>
    </rd-hero>

    <base-section>
      <ul class="list">
        <li v-for="post in data.articles" v-bind:key="post.slug">
          <nuxt-link :to="post.url">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </base-section>

    <div class="aux">
      <p>The Responsible Data for Children initiative regularly releases videos explaining its work and the work of its
        partners. Here’s a few of our video series that you might be interested in. If you would like to stay up to date
        with our latest releases, please subscribe to our YouTube channel or fill out the form here.</p>
      <h3>RD4C Bites & Lessons from the Field</h3>
      <p>Short videos highlighting responsible data practices from governments, UN offices, research centers, and other
        partners around the world.</p>
      <h3>Recorded Webinars and Lectures</h3>
      <p>Recordings of our efforts to train data professionals and disseminate the Responsible Data for Children
        approach</p>
      <h3>What is Responsible Data for Children?</h3>
      <p>Videos explaining the value of the Responsible Data for Children initiative, available in different languages.
      </p>
    </div>

  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
  // @ToDo
  // Vamos pegar os dados da lista de updates
  // Tabs/Filtros para "All, Blogs, Videos"
  // Ordenação por data reversa, igual todos os blogs

  // RECUPERAR OS DADOS DO CONTENT. VOCE PODE USAR O QUERYCONTENT
  // PARA FILTRAR OS DADOS AQUI.
  const articles = await queryContent('articles').find();

  // DECLARO UMA VARIÁVEL REACTIVE PARA INTERAGIR COM O CONTEUDO EXIBIDO EM TEMPO REAL
  // ALTERACOES EM VARIAVEIS REACTIVE REFLETEM NO TEMPLATE DIRETAMENTE
  const data = reactive({
      articles: [],
  });

  // EXEMPLO DE TRATAMENTO DE DADOS APENAS EXEMPLO:
  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/articles/${post.slug}`
    }
    data.articles.push(article);
  });

</script>

<style lang="scss" scoped>

</style>
