<script setup>
  import { useStore } from '../store/searchStore';
  const config = useRuntimeConfig();
  const store = useStore();
  const searchResultData = ref([]);

  const doSearch = async () => {

    searchResultData.value = [];

    if(store.searchHistory.hasOwnProperty(store.searchValue)) {
      searchResultData.value = store.searchHistory[store.searchValue];

    } else {

      const { data } = await useFetch(`${config.public.SEARCH_API_URL}/search?term=${store.searchValue}`);
      
      for( const [key, val] of Object.entries(data.value.data)) {

        if(val.length > 0) {

          searchResultData.value = [...searchResultData.value, await Promise.all(val.map(async (item, index) => {

              const getContentName = (type) => {
                switch (type) {
                  case "videos":
                    return "videos";
                  case "contents":
                    return "articles";
                  case "pdfs":
                    return "publications";
                }
              };

              const result = await queryContent('en', getContentName(key)).where({ id: Number(item.id) }).findOne();

              return {
                type: item.type,
                excerptSummary: item.excerptSummary,
                ...result
              }
            }))
          ];
        }

      }

      searchResultData.value = searchResultData.value.flat();
      store.setAttempts(store.attempts + 1);
      store.setLastSearchResults(searchResultData.value);
      store.setSearchHistory({key: store.searchValue, content: searchResultData.value});
      store.searchValue = '';
    }
  };

  watch(() => {
    return store.searchValue;
  }, async () => {
    if(store.searchValue !== '') {
      doSearch();
    }
  });

  onMounted(() => {
    if(store.searchValue) {
      doSearch();
    }

    if(store.lastSearchResults.length) {
      searchResultData.value = store.lastSearchResults;
    }

  });

</script>

<template>
  <article>
    <div v-if=searchResultData.length>
      <center-l size="wide">
        <stack-l class="list" space="var(--s4)">
          <rd-search-result-card class="result-card" v-for="item in searchResultData" :content="item" />
        </stack-l>
      </center-l>
    </div>
    <rd-skeleton-loading :isSearching="(!searchResultData.length && store.searchValue != '')" v-else />
  </article>
</template>

<style lang="scss" scoped>
  .list {
    padding-block: var(--s3);
  }
  
  .list > * {
    --space: 4rem;
  }
</style>


