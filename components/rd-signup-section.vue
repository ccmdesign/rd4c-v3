<template>
  <!-- @ToDo: Translate the whole section -->
  <rd-split-section class="rd-signup-section" data-layout="50-50" regular-order>
    <ccm-form class="form" aria-labelledby="signup-form">
      <!-- <base-input placeholder="Name" aria-label="Name"/> -->
      <base-input placeholder="Email" aria-label="Email"/>
      
      <div>
        <label class="rd-checkbox" for="videos-updates">
          <input type="checkbox" checked name="videos-updates" id="videos-updates" aria-labelledby="videos-updates-label">
          <span id="videos-updates-label">Sign up for Videos and Updates</span>
        </label>
        <label class="rd-checkbox" for="join-conversation">
          <input type="checkbox" name="join-conversation" id="join-conversation" aria-labelledby="join-conversation-label">
          <span id="join-conversation-label">Join the Conversation</span>
        </label>
        <label class="rd-checkbox" for="join-alliance">
          <input type="checkbox" name="join-alliance" id="join-alliance" aria-labelledby="join-alliance-label">
          <span id="join-alliance-label">Join the Alliance</span>
        </label>
      </div>

      <rd-button size="l" color="white" aria-label="Signup">Signup</rd-button>
    </ccm-form>

    <template #extra>
      <div class="header">
        <h4 class="brow">Join Us</h4>
        <h2 class="heading">Be the first to know</h2>
      </div>
      <div class="content">
        <p>The Responsible Data for Children initiative regularly releases videos explaining its work and the work of its
          partners. Here’s a few of our video series that you might be interested in. If you would like to stay up to date
          with our latest releases, please subscribe to our YouTube channel or fill out the form here.</p>
      </div>
    </template>
  </rd-split-section>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-signup-section {
  background-color: var(--tertiary-color);
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

:deep(.panel--image) {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: var(--s1);
  padding-block: var(--s1);
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
  gap: var(--s-2);

  input[type="checkbox"] {
    display: none;
  }

  &::before {
    content: 'check_box_outline_blank';
    font-family: var(--icon-font);
    font-size: 1.75rem;
  }
  
  &:has(:checked)::before {
    content: 'check_box';
  }
}

</style>
