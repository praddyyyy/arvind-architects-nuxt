<template>
  <uContainer :ui="{ constrained: 'max-w-8xl' }" class="text-black pt-20">
    <div className="py-10">
      <p className="text-6xl font-bold">Let us know</p>
      <p className="text-6xl font-bold">about your project</p>
    </div>
    <div className="pb-28 max-w-2xl">
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email" :ui="{ label: 'text-black' }">
          <input
            v-model="state.email"
            class="bg-white ring-1 ring-black p-1 w-full rounded-md text-black"
          />
        </UFormGroup>

        <UFormGroup label="Name" name="name" :ui="{ label: 'text-black' }">
          <input
            v-model="state.email"
            class="bg-white ring-1 ring-black p-1 w-full rounded-md text-black"
          />
        </UFormGroup>

        <UFormGroup
          label="Phone Number"
          name="number"
          :ui="{ label: 'text-black' }"
        >
          <input
            v-model="state.email"
            class="bg-white ring-1 ring-black p-1 w-full rounded-md text-black"
          />
        </UFormGroup>

        <UFormGroup
          label="Your Message"
          name="message"
          :ui="{ label: 'text-black' }"
        >
          <input
            v-model="state.email"
            class="bg-white ring-1 ring-black p-1 w-full rounded-md text-black"
          />
        </UFormGroup>

        <button
          type="submit"
          class="mt-8 p-2 bg-black rounded-md text-white hover:bg-gray-800 uppercase tracking-wider text-sm"
        >
          Submit
        </button>
      </UForm>
    </div>
  </uContainer>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = ref({
  email: undefined,
  name: undefined,
  number: undefined,
  message: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.name) errors.push({ path: "name", message: "Required" });
  if (!state.number) errors.push({ path: "number", message: "Required" });
  if (!state.message) errors.push({ path: "message", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
</script>

<style scoped></style>
