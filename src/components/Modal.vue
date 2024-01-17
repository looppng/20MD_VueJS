<template>
  <div class="modal">
    <div class="modal-inner">
      <div role="dialog" aria-modal="true">
        <h3>Do you confirm?</h3>
        <div>
          <button @click="($event) => $emit('close')">No</button>
          <button @click="($event) => $emit('close')">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>
