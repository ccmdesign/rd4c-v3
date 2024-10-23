<template>
  <!-- @ToDo: Translate the whole section -->
  <rd-split-section class="rd-signup-section" data-layout="50-50" regular-order>
    <div>

      <div class="rd-signup-group-actions">
        <label class="rd-signup-actions">
          <span>{{ $t('signup.updates.text') }}</span>
          <a href="https://www.youtube.com/@rd4c" target="_blank">
            <rd-button size="s" color="white" aria-label="Signup">{{ $t('signup.updates.btnLabel') }}</rd-button>
          </a>
        </label>
        <label class="rd-signup-actions">
          <span>{{ $t('signup.conversation.text') }}</span>
          <a href="https://thegovlab.us6.list-manage.com/subscribe?u=1a990feb5c&id=8990a71369" target="_blank">
            <rd-button size="s" color="white" aria-label="Signup">{{ $t('signup.conversation.btnLabel') }}</rd-button>
          </a>
        </label>
        <label class="rd-signup-actions">
          <span>{{ $t('signup.alliance.text') }}</span>
          <a href="mailto:datastewards@thegovlab.org">
            <rd-button size="s" color="white" aria-label="Signup">{{ $t('signup.alliance.btnLabel') }}</rd-button>
          </a>
        </label>
      </div>

    </div>

    <template #extra>
      <div class="header">
        <h4 class="brow">{{ signup.brow }}</h4>
        <h2 class="heading">{{ signup.heading }}</h2>
      </div>
      <div class="content">
        <p>{{ signup.content }}</p>
      </div>
    </template>
  </rd-split-section>
  
</template>

<script setup>
import { watch } from 'vue';
import { useSignupForm } from '../composables/useSignup';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const { locale } = useI18n();

const signup = ref((await queryContent('pages', 'signup').findOne()).signup[locale.value]);
watch(locale, async () => {
  signup.value = (await queryContent('pages', 'signup').findOne()).signup[locale.value];
});

const {
    email,
    updates,
    alliance,
    conversation,
    success,
    onSubmit } = useSignupForm();

const notify = () => {
  toast("Sent successfully!", {
    "theme": "auto",
    "type": "success",
    "autoClose": 600,
    "position": "bottom-right"
  })
};

watch(success, (value) => {
  if (value) {
    notify();
  }
});

</script>

<style lang="scss" scoped>
.rd-signup-section {
  background-color: var(--tertiary-color);
  --_brow-color: hsla(var(--white-hsl), 0.5);
}

.brow {
  color: var(--_brow-color);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-inline: auto;

  .stack {
    width: 100%;
    justify-content: stretch;
  }
}

:deep(.panel) {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: var(--space-m-l);
  padding-block: var(--space-m-xl);
}

:deep(input) {
  background-color: transparent;
  border-color: var(--white-color) !important;
  color: var(--white-color);

  &::placeholder {
    color: var(--white-color);
  }
}

h2, p {
  color: var(--white-color);
}

.rd-signup-group-actions {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: var(--s1);
}

.rd-signup-actions {
  color: var(--white-color);
  display: flex;
  align-items: center;
  gap: var(--space-2xs-xs);
}

</style>
