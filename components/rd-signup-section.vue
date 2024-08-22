<template>
  <!-- @ToDo: Translate the whole section -->
  <rd-split-section class="rd-signup-section" data-layout="50-50" regular-order>
    <ccm-form @submit.prevent="onSubmit" class="form" aria-labelledby="signup-form">
      <!-- <base-input placeholder="Name" aria-label="Name"/> -->
      <base-input placeholder="Email" aria-label="Email" type="email" name="email" v-model="email" required />

      <div>
        <label class="rd-checkbox" for="videos-updates">
          <input type="checkbox" checked name="videos-updates" id="videos-updates" aria-labelledby="videos-updates-label" v-model="updates">
          <span id="videos-updates-label">{{ $t('signup.options.updates') }}</span>
        </label>
        <label class="rd-checkbox" for="join-conversation">
          <input type="checkbox" name="join-conversation" id="join-conversation" aria-labelledby="join-conversation-label" v-model="conversation">
          <span id="join-conversation-label">{{ $t('signup.options.conversation') }}</span>
        </label>
        <label class="rd-checkbox" for="join-alliance">
          <input type="checkbox" name="join-alliance" id="join-alliance" aria-labelledby="join-alliance-label" v-model="alliance">
          <span id="join-alliance-label">{{ $t('signup.options.alliance') }}</span>
        </label>
      </div>

      <rd-button size="l" color="white" aria-label="Signup">{{ $t('signup.btnLabel') }}</rd-button>
    </ccm-form>

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

.rd-checkbox {
  color: var(--white-color);
  display: flex;
  align-items: center;
  gap: var(--space-2xs-xs);

  input[type="checkbox"] {
    display: none;
  }

  &::before {
    content: 'check_box_outline_blank';
    font-family: var(--icon-font);
    font-size: var(--step-2);
  }
  
  &:has(:checked)::before {
    content: 'check_box';
  }
}

</style>
